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
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        setValue((new URLSearchParams(window.location.search)).get("search"));
        fetch(`${apiURL}?search=${value}`).then(res => res.json()).then(({title}) => setTitle(title));
    }, [value]);

    return (
        <Container>
            <Row>
                <Col xs={8}>
                    <InputGroup style={{ marginTop: '10rem' }}><Control type="text" name="search"/><Button
                        type="submit">Search</Button></InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <div className='mt-2' dangerouslySetInnerHTML={{__html: title}}/>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col xs={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Item 1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab blanditiis cumque dolor
                                enim ex excepturi exercitationem.
                            </Card.Text>
                            <Button variant="primary">Open Item</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Item 2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab blanditiis cumque dolor
                                enim ex excepturi exercitationem.
                            </Card.Text>
                            <Button variant="primary">Open Item</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

