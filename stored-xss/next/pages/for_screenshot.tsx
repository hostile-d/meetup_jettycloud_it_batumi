import {connectToDatabase} from "../utils/mongodb";
import {Container, ListGroup, Card, Form, Button, Collapse, Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const {useState} = React;

import {sanitizeUrl} from '@braintree/sanitize-url';

export default function Comments({comments}) {
    return (
        <ul>
            {comments.map((comment) => (
                <li>
                    <h2>{comment.name}</h2>
                    <p>{comment.text}</p>
                    <a href={sanitizeUrl(comment.author_page)}>My website</a>
                </li>
            ))}
        </ul>
    );
}

export async function getServerSideProps() {
    const {db} = await connectToDatabase();
    const comments = await db.collection("d_comments").find({}).toArray();
    return {props: {comments: JSON.parse(JSON.stringify(comments))}};
}
