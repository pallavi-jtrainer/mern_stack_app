import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/button'
import { Container, Row, Col } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";

const Create = (props) => {
    const {show, closeModal} = props;
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [salary, setSalary] = useState(0);
    const [id, setId] = useState(0);

    const addEmployee = () => {
        EmployeeService.createEmployee({id, firstname, lastname, salary});
        closeModal();
    }
    return(
        <>
            <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>Employee Registration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={8} md={8}> Employee Id: </Col>
                            <Col xs={12} md={8}><input type="number" placeholder="First Name" onChange={(e) => setId(e.target.value)}/></Col>
                        </Row>
                        <Row>
                            <Col xs={8} md={8}> First Name: </Col>
                            <Col xs={12} md={8}><input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/></Col>
                        </Row>
                        <Row>
                            <Col xs={8} md={8}> Last Name: </Col>
                            <Col xs={12} md={8}><input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/></Col>
                        </Row>
                        <Row>
                            <Col xs={8} md={8}> Salary: </Col>
                            <Col xs={12} md={8}><input type="number" placeholder="Salary"onChange={(e) => setSalary(e.target.value)}/></Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={addEmployee}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


// const Create = () => {
//    return( 
//     <Form className = "create-form">
//         <Form.Field>
//             <label id="lab">First Name: </label>
//             <input type="text" placeholder="First Name" />
//         </Form.Field>
//         <Form.Field>
//             <label id="lab">Last Name: </label>
//             <input type="text" placeholder="Last Name" />
//         </Form.Field>
//         <Form.Field>
//             <label id="lab">Salary: </label>
//             <input type="text" placeholder="Salary" />
//         </Form.Field>
//         <Button type="submit">Submit</Button>
//     </Form>
//    )
// }

export default Create;