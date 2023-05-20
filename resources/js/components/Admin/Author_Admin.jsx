import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Image, Table, Button, Modal, Form, ModalDialog } from 'react-bootstrap';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AuthorStore(props) {
    const endpoint = 'http://localhost/librar.io/public/api/author_store'
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                name: name, last_name: lastName
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Book added")
                navigate("/librar.io/public/admin/author_admin")
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
                    Add Author
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            name="name" value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name:</Form.Label>

                        <Form.Control name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group>
                        <Button type='submit'>Save</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function AuthorUpdate(props) {
    const endpoint = 'http://localhost/librar.io/public/api/author_update'
    const [id, setId] = useState('')
    const [Name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                id: props.author.id, name: Name, last_name: lastName
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Author updated")
                navigate("/librar.io/public/admin/author_admin")
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
                    Update Author
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            name="id" value={props.author.id}
                            onChange={(e) => setId(e.target.value)} required />
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            name="name" value={Name} placeholder={props.author.name}
                            onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name:</Form.Label>

                        <Form.Control name="lastName" placeholder={props.author.last_name} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
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

function AuthorDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost/librar.io/public/api/author_destroy'
    const deleteBook = async () => {
        await axios.post(endpoint, { id: props.author.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Author deleted")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        navigate("/librar.io/public/admin/author_admin")
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
                    You're going to delete the author {props.author.name} {props.author.last_name}, are you sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteBook(props.author.id)} className='btn btn-danger'>Delete</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Author_Admin() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [authorData, setAuthorData] = useState({});

    function editAuthor(author) {
        setModalShow2(true)
        setAuthorData(author);
    }

    function deleteAuthor(author) {
        setModalShow3(true)
        setAuthorData(author);
    }

    const user_id = localStorage.getItem('user_id');

    if (!user_id) {
        navigate('/librar.io/public/login');
        return null;
    }

    const getAuthorFetch = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/authors`);
            setAuthorFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [AuthorFetch, setAuthorFetch] = useState([]);
    useEffect(() => {
        getAuthorFetch()
    }, [])

    return (
        <div className='container py-5'>
            <div className="row">
                <div className="card py-3">
                    <div className="row  px-5 py-3">
                        <div className="col">
                            <h1>Authors</h1>
                        </div>
                        <div className="col text-end">
                            <IconButton onClick={() => setModalShow1(true)}>
                                <AddCircleIcon color='success' sx={{ fontSize: 40 }}
                                />
                            </IconButton>
                            <AuthorStore
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AuthorFetch.map((A) => (
                                    <tr key={A.id}>
                                        <th scope="row">{A.id}</th>
                                        <td>{A.name}</td>
                                        <td>{A.last_name}</td>
                                        <td>
                                            <IconButton aria-label="brush" onClick={() => editAuthor(A)} >
                                                <BrushIcon color='secondary' />

                                            </IconButton>
                                            <AuthorUpdate
                                                show={modalShow2}
                                                onHide={() => setModalShow2(false)}
                                                author={authorData}
                                            />
                                            <IconButton aria-label="delete" onClick={() => deleteAuthor(A)}>
                                                <DeleteIcon color="error" />

                                            </IconButton>
                                            <AuthorDestroy
                                                show={modalShow3}
                                                onHide={() => setModalShow3(false)}
                                                author={authorData}
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

export default Author_Admin;