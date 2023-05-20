import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { TextField } from '@mui/material';
import { Image } from 'react-bootstrap';

export default function GoalsOnGoing() {
    const user_id = localStorage.getItem('user_id');
    const [goal, setGoal] = useState();

    const getUserGoal = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/user_goal/${user_id}`);
            setUserGoal(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [UserGoal, setUserGoal] = useState([]);
    useEffect(() => {
        getUserGoal()
    }, [])

    const getBooksRead = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/getReadBooksByYear/${user_id}`);
            setBooksRead(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [BooksRead, setBooksRead] = useState([]);
    useEffect(() => {
        getBooksRead()
    }, [])

    return (
        <>
            <div className="container p-5" style={{ width: 900 }}>
                <div className="card text-center">
                    <div className="card-body">
                        <Image src={"https://i.imgur.com/0CZBAJe.png"} rounded width={250}></Image>
                        <h5> Your adventure just started!</h5>
                        <p> This is how your goal is...</p>
                        {UserGoal.map((UG) => (
                            <div className="row m-5" key={UG.id}>
                                <div className="col-sm-6">
                                    <TextField
                                        id="goalTextField"
                                        label="Books read:"
                                        variant="outlined"
                                        type='number'
                                        value={UG.current_books}
                                        disabled />
                                </div>
                                <div className="col-sm-6">
                                    <TextField
                                        id="goalTextField"
                                        label="Books to read:"
                                        variant="outlined"
                                        type='number'
                                        value={UG.book_goal}
                                        disabled />
                                </div>
                            </div>
                        ))}



                    </div>
                </div>
                {BooksRead.length === 0 ? (
                    <h5>There's no books read in the year</h5>
                ) : null}

                {BooksRead.map((BR) => (
                    <h5>Books Read</h5>
                ))}
                
            </div>

        </>
    )
}
