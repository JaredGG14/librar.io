import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, ListGroup, Image } from 'react-bootstrap';
import { Button, Typography, Rating } from '@mui/material';

function User() {
    const user_email = localStorage.getItem('user_email');
    const navigate = useNavigate();

    if (!user_email) {
        navigate('/librar.io/public/login');
        return null;
    }


    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/user/${user_email}`);
            setUserFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [UserFetch, setUserFetch] = useState([]);
    useEffect(() => {
        getUser()
    }, [])


    const getBookId = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/books/1`)
            setBookFetch(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const [BookFetch, setBookFetch] = useState([]);
    useEffect(() => {
        getBookId()
    }, [])

    return (
        <>
            <div className='container'>
                {UserFetch.map((U) => (
                    <div className='row' key={U.id}>
                        <div className="col-5">
                            <div className='row'>
                                {U.photo === null ? (
                                    <div className='CenterContent'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </div>

                                ) : (
                                    <div className='CenterContent'>
                                        <Image src={U.photo} rounded width={250}></Image>

                                    </div>
                                )}
                                <Button variant="text">Edit Profile</Button>
                            </div>
                            <div className="row">
                                <h5 className="card-title">Name</h5>
                                <p className="card-text">{U.name}</p><hr />
                                <h5 className="card-title">Last Name</h5>
                                <p className="card-text">{U.last_name}</p><hr />
                                <h5 className="card-title">Nickname</h5>
                                <p className="card-text">{U.nickname}</p><hr />
                                <h5 className="card-title">Age</h5>
                                <p className="card-text">{U.age}</p><hr />
                                <h5 className="card-title">Description</h5>
                                <p className="card-text">{U.description}</p><hr />
                                <h5 className="card-title">e-mail</h5>
                                <p className="card-text">{U.email}</p><hr />
                            </div>
                        </div>
                        <div className="col-7 px-5 py-4">
                            <div className="row p-5">
                                <div className='CenterContent'>
                                    <Image src={"https://i.imgur.com/NRx9qKw.png"} rounded width={200}></Image>
                                </div>
                            </div>
                            <div className="row">
                                <h5 className="CenterContent card-title">Books Read</h5>
                                {BookFetch.map((B) => (
                                    <div className="row py-3" key={B.id}>
                                        <div className="col ps-5">
                                            <Image src={B.photo} width={150}></Image>
                                        </div>
                                        <div className="col py-4">
                                            <div className="row">
                                                <Typography variant='h5' component="legend">
                                                    {B.title}
                                                </Typography>
                                            </div>
                                            <div className="row">
                                                <Typography component="legend">
                                                    {B.author_name} {B.author_lastname}
                                                </Typography>
                                            </div>
                                            <div className="row">
                                                <Typography component="legend">Average Score</Typography>
                                                <Rating name="read-only" value={B.avg_score} readOnly />
                                            </div>
                                            <div className="row">
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default User;