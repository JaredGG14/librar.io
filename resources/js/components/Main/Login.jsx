import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const { setUserLogged, setUser } = useContext(AuthContext);
    const [textError, setTextError] = useState('');

    const login = async (e) => {
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        await axios.post("http://localhost/librar.io/public/api/login",
            {
                email: email, password: password,

            }, headers)
            .then(response => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user_id", response.data.user.id);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
                setUserLogged(true);
                console.log(response.data.token);
                
                if(response.data.user.role === "admin"){
                    alert("Logged in successfully as: ", response.data.user.role);
                    navigate('/librar.io/public/admin')
                } else {
                    alert("Log in, welcome " + response.data.user.name);
                    navigate('/librar.io/public/main');
                }
            }).catch(error => {
                console.log(error)
                setTextError("La contraseña o correo es incorrecto");
                alert(textError);
            });
    }

    return (
        <div class="container-sm my-5 p-5" >
            <div class="card w-50 mx-auto bg-light">

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-lock card-img-top" viewBox="0 0 16 16">
                    <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                </svg>
                <div class="card-body mx-auto align-centered">
                    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Row className='px-5 py-2'>
                                <Button variant="dark" type="submit" style={{ alignContent: 'center' }}>
                                    Sign in
                                </Button>
                            </Row>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Login;