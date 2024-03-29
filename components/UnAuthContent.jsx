import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

export default function UnAuthContent({ children }) {
    const { loggedIn, loading } = useAuth();
    const router = useRouter();
    // Navigate authenticated users to Members page.
    useEffect(() => {
        if (!loading && loggedIn) {
            router.push('/profile');
        }
    }, [loggedIn, loading, router]);
    if (!loggedIn) {
        return <>{children}</>;
    }
    return <p>Loading...</p>;
}
