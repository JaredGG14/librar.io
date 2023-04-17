import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function landing() {
    return (
        <div class="container-sm py-3">
            <div class="card text-bg-dark">
                <img src="https://wallpaperaccess.com/full/2200497.jpg" height="650em" class="card-img" alt="..." />
                <div class="card-img-overlay px-5">
                    <h1 class="display-5 text-center">Keep tracking of what you're reading, what you want to read, and which books did you read in a year</h1>
                    <div className="row">
                        <div className="col py-5 text-center">
                            <div className="row-md p-5">
                                <h1 class="h4 text-center">Sign up to start your book journey</h1>
                                <Button as={Link} to="/librar.io/public/register" className='py-3' variant="danger" size='lg'>Sign up now!</Button>
                            </div>
                            <div className="row-md px-5">
                                <p class="lead text-center">You already have an account?</p>
                                <Button as={Link} to="/librar.io/public/login" variant="outline-primary">Sign in!</Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default landing;