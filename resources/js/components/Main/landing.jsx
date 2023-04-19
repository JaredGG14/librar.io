import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function landing() {
    return (
        <div class="container-md py-3">
            <div class="card text-bg-dark">
                <img src="https://images.unsplash.com/photo-1499257398700-43669759a540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" height="650em" class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <h1 class="display-5 text-center">Keep track of what you're reading, what you want to read, and which books did you read in a year</h1>
                    <div className="row p-5">
                        <div className="col p-5 text-center">
                            <div className="row-md p-5">
                                <h1 class="h4 text-center">Sign up to start your book journey</h1>
                                <Button as={Link} to="/librar.io/public/register" variant="light" >Sign up now!</Button>
                            </div>
                            <div className="row-md px-5">
                                <p class="lead text-center">You already have an account?</p>
                                <Button as={Link} to="/librar.io/public/login" variant="outline-light">Sign in!</Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default landing;