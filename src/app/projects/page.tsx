import Header from "../components/header/header";

import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';

export default async function Projects() {

    // Adding the session auth for the page
    const session = await getSession();

    if (!session) {
        redirect("/");
    }

    return (
        <div>
            <title>Projects</title>
            <Header />
        </div>
    );
}