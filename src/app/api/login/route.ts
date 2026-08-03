import bcrypt from "bcrypt";
import type { RowDataPacket } from "mysql2";
import pool from "@/lib/db";

interface LoginRequestBody {
  email?: string;
  password?: string;
}

interface UserRow extends RowDataPacket {
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  password_hash: string;
  user_role_id: number;
}

export async function POST(request: Request) {
  try {
    const body: LoginRequestBody = await request.json();

    const email = body.email?.trim();
    const password = body.password;

    if (!email || !password) {
      return Response.json(
        {
          success: false,
          message: "Email and password are required.",
        },
        {
          status: 400,
        }
      );
    }

    const [rows] = await pool.execute<UserRow[]>(
      `
        SELECT
          user_id,
          first_name,
          last_name,
          email_address,
          password_hash,
          user_role_id
        FROM user_info
        WHERE email_address = ?
        LIMIT 1
      `,
      [email]
    );

    const user = rows[0];

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 401,
        }
      );
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      return Response.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 401,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Login successful.",
        user: {
          id: user.user_id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email_address,
          roleId: user.user_role_id,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Login error:", error);

    return Response.json(
      {
        success: false,
        message: "An unexpected error occurred.",
      },
      {
        status: 500,
      }
    );
  }
}