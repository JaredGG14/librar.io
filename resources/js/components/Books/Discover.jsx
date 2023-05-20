import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel, Image, Button } from 'react-bootstrap';


function Discover() {
    const user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();

    const getLastBookAdded = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/lastBookAdded`);
            setLastBookAdded(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [LastBookAdded, setLastBookAdded] = useState([]);
    useEffect(() => {
        getLastBookAdded()
    }, [])

    const getMostRated = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/MostRated`);
            setMostRated(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [MostRated, setMostRated] = useState([]);
    useEffect(() => {
        getMostRated()
    }, [])




    return (
        <>
            <div className="container p-5">
                <div className="row">
                    <h4>Last Books Added</h4>
                    {LastBookAdded.map((LBA) => (
                        <div className="col" key={LBA.id}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <Image src={LBA.photo} width={150} title={LBA.synopsis} />
                                </div>
                                <div className="card-footer">
                                    <h6>{LBA.title}</h6>
                                    <p>{LBA.author.name} {LBA.author.last_name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <h5>Most Rated</h5>
                    {MostRated.map((MR) => (
                        <div className="col" key={MR.id}>
                            <div className="card">
                                <div className="card-body text-center">
                                    <Image src={MR.photo} width={150} title={MR.synopsis} />
                                </div>
                                <div className="card-footer">
                                    <h6>{MR.title}</h6>
                                    <p>{MR.author.name} {MR.author.last_name}</p>
                                    <p>{MR.avg_score}</p>
                                    <Button variant='outline-success'>Add to bookshelf</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );

}
export default Discover;