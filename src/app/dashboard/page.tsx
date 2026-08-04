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
        <div>
            <title>Dashboard</title>
            <Header />
        </div>
    );
}