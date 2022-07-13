import {useState, useCallback, useEffect} from "react";
import {Button, Alert, Container} from 'react-bootstrap';
import {useSession} from './Session';

const backendOrigin = 'http://localhost:3000';

export const App = () => {
    const [payment, setPayment] = useState({});
    const {csrfToken} = useSession();

    const handlePaymentClick = useCallback(() => {
        fetch(`${backendOrigin}/payment`, {
            body: JSON.stringify({account: "Granny", amount: 5000}),
            method: 'POST',
            credentials: 'include',
            headers: {
                'X-CSRF-Token': csrfToken,
                'Content-Type': 'application/json',
            },
        })
            .then(r => r.json())
            .then(({payment}) => setPayment(payment))
            .catch((e) => setPayment({}));
    }, [csrfToken]);

    return (
        <Container>
            <Button onClick={handlePaymentClick}>Send money to Granny</Button>
            { payment?.amount && payment?.account ?
                <Alert variant='success'>{`${payment?.amount} has been sent to ${payment?.account}`}</Alert>
                : null
            }
        </Container>
    )
};
