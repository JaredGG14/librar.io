import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, ListGroup, Image } from 'react-bootstrap';
import { Button } from '@mui/material';
import GoalsNew from './GoalsNew';
import GoalsOnGoing from './GoalsOnGoing';
import GoalsEnding from './GoalsEnding';



function Goals() {
    const user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();

    if (!user_id) {
        navigate('/librar.io/public/login');
        return null;
    }


    const getUserGoal = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/user_goal/${user_id}`);
            setUserFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [UserFetch, setUserFetch] = useState([]);
    useEffect(() => {
        getUserGoal()
    }, [])

    const getCheckingGoal = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/checking_goal/${user_id}`);
            setCheckingGoal(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [CheckingGoal, setCheckingGoal] = useState([]);
    useEffect(() => {
        getCheckingGoal()
    }, [])

    return (
        <div>
            {CheckingGoal === "On going" ? (
                <GoalsOnGoing></GoalsOnGoing>
            ) : CheckingGoal === "Finished" ? (
                <GoalsEnding></GoalsEnding>
            ) : CheckingGoal === "New" ? (
                <GoalsNew></GoalsNew>
            ) : null}
        </div>
    );
}

export default Goals;