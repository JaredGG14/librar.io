import React, { useEffect, useState } from 'react';
import { Navbar, NavDropdown, Nav, Button, Row, Col } from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const user_name = localStorage.getItem("user_name");

    

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email")
        alert("Logout succesfull")
    }

    return (
        <>
            <nav class="navbar navbar-primary bg-white bg-gradiant px-3" >
                <div class="container-fluid">
                    {token !== null ? (
                        <Row>
                            <Col>
                                <Navbar.Brand as={Link} to="/librar.io/public/main"><img src='https://i.imgur.com/zcpzOlE.png' height="50px"></img></Navbar.Brand>
                            </Col>

                            <Col className='py-2'>
                                <Button variant='outline-dark' as={Link} to="/librar.io/public/bookshelf/">Bookshelf</Button>
                            </Col>
                            <Col className='py-2'>
                                <Button variant='outline-dark' as={Link} to="/librar.io/public/discover/">Discover</Button>
                            </Col>
                            <Col className='py-2'>
                                <Button variant='outline-dark' as={Link} to="/librar.io/public/goal/">Goal</Button>
                            </Col>
                        </Row>
                    ) : (
                        <Row>
                            <Col>
                            <Navbar.Brand as={Link} to="/librar.io/public/"><img src='https://i.imgur.com/zcpzOlE.png' height="50px"></img></Navbar.Brand>
                            </Col>

                        </Row>
                    )}
                    {token === null ? (
                        <NavDropdown title={
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-lock" viewBox="0 0 16 16">
                                <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 5.996V14H3s-1 0-1-1 1-4 6-4c.564 0 1.077.038 1.544.107a4.524 4.524 0 0 0-.803.918A10.46 10.46 0 0 0 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h5ZM9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
                            </svg>
                        } align="end">
                            <NavDropdown.Item as={Link} to="/librar.io/public/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/librar.io/public/register">Register</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <NavDropdown title={
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        } align="end">
                            <NavDropdown.Header>Welcome back, {user_name} </NavDropdown.Header>
                            <NavDropdown.Item as={Link} to="/librar.io/public/user/">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/librar.io/public/login" onClick={() => logout()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-power" viewBox="0 0 16 16">
                                    <path d="M7.5 1v7h1V1h-1z" />
                                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                                </svg> Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    )}
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    );
}

export default NavBar;