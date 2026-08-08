import Header from "../components/header/header";

// ft auth-for-login
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';

// ft - getting the username
import pool from '@/lib/db'

// ft - live date/time
import LiveDateTime from "../components/live-date-time/time";


export default async function Dashboard() {

    // Getting the user session
    const session = await getSession();

    if (!session) {
        redirect("/");
    }

    // Grabbing the user's first name from their account
    const [rows] = await pool.query(
        `
            SELECT first_name
            FROM user_info
            WHERE user_id = ?
                AND logical_cancel_value = 0
        `,
        [session.userId]
    );

    const users = rows as {
        first_name: string;
    }[];

    const user = users[0];

    // // Current date/time
    // const now = new Date();

    // // Formatting
    // const date = now.toLocaleDateString("en-US", {
    //     weekday: "long",
    //     month: "long",
    //     day: "numeric",
    // });

    // const time = now.toLocaleTimeString("en-US", {
    //     hour: "numeric",
    //     minute: "2-digit",
    // });

    return (
        <div className="min-h-screen">
            <title>Dashboard</title>

            <Header />

            <main className="flex w-full justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-6">
          
                <div className="min-h-42 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-2 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-xl font-extrabold">Welcome back {user.first_name}!</h1>
                    <h1 className="text-xl font-extrabold">It is currently:</h1>
                    <LiveDateTime />

                    {/* <p className="text-sm font-bold">{date}</p>
                    <p className="text-sm font-bold">{time}</p> */}
                </div>

                <div className="min-h-42 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-4">
                    Projects Due
                </div>

                <div className="min-h-52 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-2">
                    Critical
                </div>

                <div className="min-h-64 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-4 md:row-span-2">
                    Project Creation
                </div>

                <div className="min-h-52 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-2">
                    Due Soon
                </div>
            </div>
        </main>
    </div>
    );
}