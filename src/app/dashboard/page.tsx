import Header from "../components/header/header";

// ft auth-for-login
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';


export default async function Dashboard() {

    const session = await getSession();

    if (!session) {
        redirect("/");
    }

    return (
        <div className="min-h-screen">
            <title>Dashboard</title>

            <Header />

            <main className="flex w-full justify-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-6">
          
                <div className="min-h-42 rounded-3xl bg-[#1f1f1f] p-6 md:col-span-2">
                    Welcome
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