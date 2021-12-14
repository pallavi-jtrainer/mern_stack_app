import { useEffect, useState } from 'react';
import BookService from '../../services/BookService';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';

const Books = () => {
    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadAllBooks();
    },[])
    
    const loadAllBooks = () => {
        BookService.getAllBooks().then(res => setBooks(res.data))
        .catch(err => console.log(err));
    }

    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <div>
                        <h1>Books On My List</h1>
                    </div>
                    <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           (books.length > 0 ? 
                                books.map((book, index) => 
                                <tr key={book._id}>
                                    <td>{index}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td><Button>Delete</Button></td>
                                </tr>
                                )
                           : null)
                       }
                    </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Books;