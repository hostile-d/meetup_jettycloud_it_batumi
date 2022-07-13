import {
    useState,
    createRef,
    useEffect,
} from 'react';
import {sanitize} from 'dompurify';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap';

export const DomBasedXSS = () => {
    const [userName, setUserName] = useState("");
    const outputRef = createRef();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setUserName(searchParams.get("userName"));
        outputRef.current.innerHTML = userName;
    }, [outputRef, userName]);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    Welcome, <div id="userName" ref={outputRef}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

