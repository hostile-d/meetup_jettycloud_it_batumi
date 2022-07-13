import {
    useState,
    createRef,
    useEffect,
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';

import {sanitize} from 'dompurify';

export const DomBasedXSS = () => {
    const outputRef = createRef();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const userName = searchParams.get("userName");
        outputRef.current.innerHTML = sanitize(userName);
    });

    return <div ref={outputRef}/>;
};

