import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Image, Table, Button, Modal, Form, ModalDialog } from 'react-bootstrap';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function GenreStore(props) {
    const endpoint = 'http://localhost/librar.io/public/api/genre_store'
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                description: description
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Genre added")
                navigate("/librar.io/public/admin/genre_admin")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Genre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            name="dscdescription" value={description}
                            onChange={(e) => setDescription(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit' onClick={() => window.location.reload()}>Save</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GenreUpdate(props) {
    const endpoint = 'http://localhost/librar.io/public/api/genre_update'
    const [id, setId] = useState('')
    const [Description, setDescription] = useState('')
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                id: props.genre.id, description: Description
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Author updated")
                navigate("/librar.io/public/admin/genre_admin")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Genre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            name="id" value={props.genre.id}
                            onChange={(e) => setId(e.target.value)} required />
                        <Form.Label>Description:</Form.Label>
                        <Form.Control
                            name="description" value={Description} placeholder={props.genre.description}
                            onChange={(e) => setDescription(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Save</Button></Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function GenreDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost/librar.io/public/api/genre_destroy'
    const genreBook = async () => {
        await axios.post(endpoint, { id: props.genre.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            }).then(response => {
                alert("Genre deleted")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        navigate("/librar.io/public/admin/genre_admin")
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    You're going to delete the genre {props.genre.description}, are you sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteGenre(props.genre.id)} className='btn btn-danger'>Delete</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Genre_Admin() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [genreData, setGenreData] = useState({});

    function editGenre(genre) {
        setModalShow2(true)
        setGenreData(genre);
    }

    function deleteGenre(genre) {
        setModalShow3(true)
        setGenreData(genre);
    }

    const user_id = localStorage.getItem('user_id');

    if (!user_id) {
        navigate('/librar.io/public/login');
        return null;
    }

    const getGenreFetch = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/genres`);
            setGenreFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [GenreFetch, setGenreFetch] = useState([]);
    useEffect(() => {
        getGenreFetch()
    }, [])

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="card py-3">
                    <div className="row  px-5 py-3">
                        <div className="col">
                            <h1>Genres</h1>
                        </div>
                        <div className="col text-end">
                            <IconButton onClick={() => setModalShow1(true)}>
                                <AddCircleIcon color='success' sx={{ fontSize: 40 }}
                                />
                            </IconButton>
                            <GenreStore
                                show={modalShow1}
                                onHide={() => setModalShow1(false)}
                            />
                        </div>

                    </div>

                    <hr></hr>
                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {GenreFetch.map((G) => (
                                    <tr key={G.id}>
                                        <th scope="row">{G.id}</th>
                                        <td>{G.description}</td>
                                        <td>
                                            <IconButton aria-label="brush" onClick={() => editGenre(G)} >
                                                <BrushIcon color='secondary' />
                                            </IconButton>
                                            <GenreUpdate
                                                show={modalShow2}
                                                onHide={() => setModalShow2(false)}
                                                genre={genreData}
                                            />
                                            <IconButton aria-label="delete" onClick={() => deleteGenre(G)}>
                                                <DeleteIcon color="error" />

                                            </IconButton>
                                            <GenreDestroy
                                                show={modalShow3}
                                                onHide={() => setModalShow3(false)}
                                                genre={genreData}
                                            />

                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Genre_Admin;