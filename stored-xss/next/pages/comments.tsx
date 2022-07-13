import {connectToDatabase} from "../utils/mongodb";
import {Container, ListGroup, Card, Form, Button, Collapse, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const {useState} = React;

export default function Comments({comments}) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setOpen(!open);
            setLoading(false);
            setName('');
            setText('');
            setLink('');
        }, 1000);
    }
    return (
        <Container>
            <Card className='mt-5'>
                <Card.Header>My blog post</Card.Header>
                <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab blanditiis cumque dolor enim ex
                    excepturi exercitationem expedita explicabo illum laudantium, maiores optio perferendis quas
                    sapiente sunt velit veritatis, voluptatum!
                </Card.Body>
            </Card>
            <ListGroup className='mt-5'>
                <ListGroup.Item variant="dark">Comments:</ListGroup.Item>
                <Collapse in={open} timeout={150}>
                    <div>
                        {comments.map((comment) => (
                            <ListGroup.Item>
                                <h2>{comment.name}</h2>
                                <p>{comment.text}</p>
                                <a href={comment.author_page}>My website</a>
                            </ListGroup.Item>
                        ))}
                    </div>
                </Collapse>
            </ListGroup>

            <Card className='mt-5'>
                <Card.Header>Add Comment</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="xssname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name}
                                          onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="xsstext">
                            <Form.Label>Comment Text</Form.Label>
                            <Form.Control type="text" value={text}
                                          onChange={(e) => setText(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="xsslink">
                            <Form.Label>Your Website</Form.Label>
                            <Form.Control type="text" value={link}
                                          onChange={(e) => setLink(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit &nbsp;
                            {loading ?
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                /> : null}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export async function getServerSideProps() {
    const {db} = await connectToDatabase();
    const comments = await db.collection("d_comments").find({}).toArray();
    return {props: {comments: JSON.parse(JSON.stringify(comments))}};
}
