import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import BookService from "../../services/BookService";

const Details = () => {
    const [book, setBook] = useState({});
    const {id} = useParams();

    //console.log(id);
    useEffect(() => {
        
        loadBook(id);
    }, [])

    const loadBook = (id) => {
        BookService.getBook(id).then(res => setBook(res.data))
        .catch(err => console.log(err));
    }

    return(
        <div className="container">
            <Row>
                <Col size="md-4">
                    <label>Title:</label>
                </Col>
                <Col size='md-8'>
                    {book.title}
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <label>Author:</label>
                </Col>
                <Col size='md-8'>
                    {book.author}
                </Col>
            </Row>
            <Row>
                <Col size="md-4">
                    <Link to="/books">Back to Main Page</Link>
                </Col>
            </Row>
        </div>
    )
}

export default Details;