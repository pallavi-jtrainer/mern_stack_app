import React, { useState, useContext } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authContext } from "../contexts/authContext";
import UserService from "../services/UserService";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [users, setUsers] = useState([]);

    const history = useNavigate();

    const { setAuthData } = useContext(authContext);

    const onFormSubmit = (e) => {
        e.preventDefault();

        UserService.getUsers().then((res) => {
            setUsers(res.data);
        }).catch((err) => console.log(err));
        
        const user = users.filter((useremail) => useremail.email === email && useremail.password === pass)
        //console.log(user);

        if (user.length > 0) {
            setAuthData(email);
            history('/dash');
        } else {
            alert("UserName or Password Mismatch")
            setEmail('');
            setPass('');
        }
        
        // console.log(email);
        // console.log(pass);
        //history('/dash');
    }

    return (
        <div className="container">
            <div style={{width: 300}}>
                <h1 className="text-center">Sign In</h1>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Label>User Email:</Form.Label>
                        <Form.Control type="email" placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setPass(e.target.value)} value={pass} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3 w-100">Sign In</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;