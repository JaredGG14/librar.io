import React from 'react'
import axios from 'axios';
import { Image } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { useState } from 'react';

export default function GoalsNew() {
    const user_id = localStorage.getItem('user_id');
    const [goal, setGoal] = useState('');

    const handleGoalKeyDown = async (event) => {
        if (event.key === 'Enter') {
            const confirmAddGoal = window.confirm('Do you want to save your goal?');
            if (confirmAddGoal) {
              const endpoint = 'http://localhost/librar.io/public/api/setGoal'
              await axios.post(endpoint, {user_id: user_id, book_goal: goal})
              console.log('Dato guardado:', goal);
              setGoal('');
            } else {
              setGoal('');
            }
          }
    };


    return (
        <>
            <div className="container p-5">
                <div className="card text-center">
                    <div className="card-body">
                        <Image src={"https://i.imgur.com/0CZBAJe.png"} rounded width={250}></Image>
                        <h5> Begin your adventure setting a goal.</h5>
                        <p> Choose how many books do you want to read this year.</p>
                        <p className='card-text'> Choose how many worlds do you want to explore.</p>
                        <TextField
                            id="goalTextField"
                            label="Books to read:"
                            variant="outlined"
                            type='number'
                            value={goal}
                            onKeyDown={handleGoalKeyDown}
                            onChange={(event) => setGoal(event.target.value)}
                            required />
                    </div>
                </div>
            </div>

        </>
    )
}
