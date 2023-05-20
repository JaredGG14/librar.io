import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Register() {
    const [name, setName] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_c, setPassword_c] = useState('');
    const navigate = useNavigate();

    const { setUserLogged, setUser } = useContext(AuthContext);
    const [textError, setTextError] = useState('');
    const [formOk, setFormOk] = useState(true);

    const register = async (e) => {
        e.preventDefault();
        setFormOk(true);
        console.log("Register");
        if (name.trim() === "" || last_name.trim() === ""
            || email.trim() === "" || password.trim() === "" || password_c.trim() === "") {
            setTextError('Empty input, failed register');
            setFormOk(false);
            alert(textError);
            return;
        } else if (password.trim().length < 8) {
            setTextError('The password must be at least 8 characters');
            setFormOk(false);
            alert(textError);
            return;
        }
        if (formOk) {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            await axios.post("http://localhost/librar.io/public/api/register",
                {
                    name: name, last_name: last_name, email: email, password: password, c_password: password_c,
                }, headers)
                .then(response => {
                    localStorage.setItem("token", response.data.token);
                    setUserLogged(true);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    setUser(response.data.user);
                    localStorage.setItem("user_email", response.data.user.email);
                    localStorage.setItem("user_name", response.data.user.name);
                    navigate('/librar.io/public/main');
                }).catch(error => {
                    setTextError("The email already exists.");
                    setFormOk(false);
                    alert(textError)
                    console.log(error.response.data);
                });
        }
    }

    return (
        <>
            <div class="container-sm my-5 px-5" >
                <div class="card w-50 mx-auto bg-light">
                    <div class="py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-person-lock card-img-top" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                    </div>
                    <div class="card-body mx-auto">
                        <Form onSubmit={register}>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="last_name" value={last_name} onChange={(e) => setLast_Name(e.target.value)} placeholder="Enter your last name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formPasswordConfirm">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" name="password_c" onChange={(e) => setPassword_c(e.target.value)} placeholder="Confirm your password" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='px-5 py-2'>
                                <Button variant="dark" type="submit" style={{ alignContent: 'center' }}>
                                    Register
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;