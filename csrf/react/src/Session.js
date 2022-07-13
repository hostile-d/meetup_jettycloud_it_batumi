import {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const useSession = () => {
    const [session, setSession] = useState({});
    useEffect( () => {
        async function fetchSession() {
            const response = await fetch(`http://localhost:3000/session`,{
                credentials: 'include',
            });
            const session = await response.json();
            setSession(session);
        }
        fetchSession()
    }, []);

    return session;
};
