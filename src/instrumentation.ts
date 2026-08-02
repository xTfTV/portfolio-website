// Check to make sure the DB is running

export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { default: pool } = await import("./lib/db");
        const connection = await pool.getConnection();

        try {

            await connection.ping();

            console.log("✅ Database connection successful on startup");

        } catch (error) {
            console.error("❌ Database connection failed on startup:", error);
        } finally {
            connection.release();
        }
    }
}