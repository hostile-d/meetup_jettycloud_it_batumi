import {
    useState,
    useCallback,
    useEffect
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, InputGroup, Row, Col, Card} from 'react-bootstrap';

const apiURL = 'http://localhost:3000/results';
const {Control} = Form;

export const ReflectedXSS = () => {
    const [title, setTitle] = useState("");

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get("search");
        fetch(`${apiURL}?search=${searchParam}`)
            .then(res => res.json())
            .then(({title}) => setTitle(title));
    });

    return <div dangerouslySetInnerHTML={{__html: title}}/>;
};

