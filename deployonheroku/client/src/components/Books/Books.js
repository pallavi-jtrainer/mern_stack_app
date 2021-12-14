import { useEffect, useState } from 'react';
import BookService from '../../services/BookService';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
// import Details from './BookDetails';

const Books = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadAllBooks();
    },[])
    
    const loadAllBooks = () => {
        BookService.getAllBooks().then(res => setBooks(res.data))
        .catch(err => console.log(err));
    }

    const handleFormSubmit = (e) => {
        if( title && author) {
            BookService.saveBook({title, author})
                .then((res) => {
                    loadAllBooks();
                })
                .catch(err => console.log(err))
        }
    }

    return(
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <div>
                        <h1>New Book Details</h1>
                    </div>
                    <div>
                        <form>
                            <div>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} 
                                    name="title" placeholder='Title (requred)'/>
                            </div>
                            <div>
                                <input value={author} onChange={(e) => setAuthor(e.target.value)} 
                                    name="author" placeholder='Author (requred)'/>
                            </div>
                            <Button type="submit" 
                                disabled={!(title && author)}
                                onClick={() => handleFormSubmit()}>Submit</Button>
                        </form>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <div>
                        <h1>Books On My List</h1>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>1</td>
                                <td>A Book Title</td>
                                <td>No One</td>
                                <td><Button>Details</Button></td>
                            </tr> */}
                        {
                            (books.length > 0 ? 
                                    books.map((book, index) => 
                                    <tr key={book._id}>
                                        <td>{index}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>
                                            <Link to={'/books/' + book._id}>
                                                <Button>Details</Button>
                                            </Link>
                                        </td>
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