import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Image, Table, Button, Modal, Form, ModalDialog } from 'react-bootstrap';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function BookStore(props) {
    const endpoint = 'http://localhost/librar.io/public/api/book_store'
    const [title, setTitle] = useState('')
    const [author_id, setAuthor_id] = useState('');
    const [genre_id, setGenre_id] = useState('');
    const [avg_score, setAvg_score] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [photo, setPhoto] = useState('');
    const [physical_link, setPhysical_link] = useState('');
    const [digital_link, setDigital_link] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                title: title, author_id: author_id, genre_id: genre_id,
                avg_score: avg_score, synopsis: synopsis,
                photo: photo, physical_link: physical_link,
                digital_link
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Book added")
                navigate("/librar.io/public/admin/book_admin")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
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

    const [AuthorFetch, setAuthorFetch] = useState([])
    useEffect(() => {
        getAuthorFetch()
    }, [])

    const getGenreFetch = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/genres`);
            setGenreFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [GenreFetch, setGenreFetch] = useState([])
    useEffect(() => {
        getGenreFetch()
    }, [])



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={store}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            name="title" value={title}
                            onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author ID</Form.Label>

                        <Form.Select name="author_id" value={author_id} onChange={(e) => setAuthor_id(e.target.value)} required>
                            <option value="">Select an Author</option>
                            {AuthorFetch.map((A) => (
                                <option value={A.id} key={A.id}>{A.name} {A.last_name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Genre ID</Form.Label>

                        <Form.Select name="genre_id" value={genre_id} onChange={(e) => setAuthor_id(e.target.value)} required>
                            <option value="">Select an Genre</option>
                            {GenreFetch.map((G) => (
                                <option value={G.id} key={G.id}>{G.description}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Average Score:</Form.Label>
                        <Form.Control
                            name="avg_score" value={avg_score}
                            onChange={(e) => setAvg_score(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Synopsis:</Form.Label>
                        <Form.Control
                            name="synopsis" value={synopsis}
                            onChange={(e) => setSynopsis(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo (Link):</Form.Label>
                        <Form.Control
                            name="photo" value={photo}
                            onChange={(e) => setPhoto(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Physical Link:</Form.Label>
                        <Form.Control
                            name="physical_link" value={physical_link}
                            onChange={(e) => setPhysical_link(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Digital Link:</Form.Label>
                        <Form.Control
                            name="digital_link" value={digital_link}
                            onChange={(e) => setDigital_link(e.target.value)} required />
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

function BookUpdate(props) {
    const endpoint = 'http://localhost/librar.io/public/api/book_update'
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [author_id, setAuthor_id] = useState('');
    const [genre_id, setGenre_id] = useState('');
    const [avg_score, setAvg_score] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [photo, setPhoto] = useState('');
    const [physical_link, setPhysical_link] = useState('');
    const [digital_link, setDigital_link] = useState('');
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        await axios.post(endpoint,
            {
                id: props.book.id, title: title, author_id: author_id, genre_id: genre_id,
                avg_score: avg_score, synopsis: synopsis,
                photo: photo, physical_link: physical_link,
                digital_link
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Book updated")
                navigate("/librar.io/public/admin/book_admin")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
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

    const [AuthorFetch, setAuthorFetch] = useState([])
    useEffect(() => {
        getAuthorFetch()
    }, [])

    const getGenreFetch = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/genres`);
            setGenreFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [GenreFetch, setGenreFetch] = useState([])
    useEffect(() => {
        getGenreFetch()
    }, [])


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID:</Form.Label>
                        <Form.Control
                            name="id" value={props.book.id}
                            onChange={(e) => setId(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            name="title" value={title} placeholder={props.book.title}
                            onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Author ID</Form.Label>
                        <Form.Select name="author_id" value={author_id}
                            onChange={(e) => setAuthor_id(e.target.value)} required>
                            <option value="">Select an Author</option>
                            {AuthorFetch.map((A) => (
                                <option value={A.id} key={A.id}>{A.name} {A.last_name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Label>Genre ID</Form.Label>
                    <Form.Select name="genre_id" value={genre_id} onChange={(e) => setAuthor_id(e.target.value)} required>
                        <option value="">Select an Genre</option>
                        {GenreFetch.map((G) => (
                            <option value={G.id} key={G.id}>{G.description}</option>
                        ))}
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Average Score:</Form.Label>
                        <Form.Control
                            name="avg_score" value={avg_score} placeholder={props.book.avg_score}
                            onChange={(e) => setAvg_score(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Synopsis:</Form.Label>
                        <Form.Control
                            name="synopsis" value={synopsis} placeholder={props.book.synopsis}
                            onChange={(e) => setSynopsis(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo (Link):</Form.Label>
                        <Form.Control
                            name="photo" value={photo} placeholder={props.book.photo}
                            onChange={(e) => setPhoto(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Physical Link:</Form.Label>
                        <Form.Control
                            name="physical_link" value={physical_link} placeholder={props.book.physical_link}
                            onChange={(e) => setPhysical_link(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Digital Link:</Form.Label>
                        <Form.Control
                            name="digital_link" value={digital_link} placeholder={props.book.digital_link}
                            onChange={(e) => setDigital_link(e.target.value)} required />
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

function BookDestroy(props) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    const endpoint = 'http://localhost/librar.io/public/api/book_destroy'
    const deleteBook = async () => {
        await axios.post(endpoint, { id: props.book.id },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                alert("Book deleted")
            }).catch(error => {
                console.log("error");
                console.log(error.response.data);
            })
        navigate("/librar.io/public/admin/book_admin")
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
                    You're going to delete {props.book.title}, are you sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalDialog>
                    <button onClick={() => deleteBook(props.book.id)} className='btn btn-danger'>Delete</button>
                </ModalDialog>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => window.location.reload()}>Done</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Admin_Books() {
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);
    const [bookData, setBookData] = useState({});
    const navigate = useNavigate();

    function editBook(book) {
        setModalShow2(true)
        setBookData(book);
    }

    function deleteBook(book) {
        setModalShow3(true)
        setBookData(book);
    }

    const user_id = localStorage.getItem('user_id');

    if (!user_id) {
        navigate('/librar.io/public/login');
        return null;
    }

    const getBookshelfFetch = async () => {
        try {
            const response = await axios.get(`http://localhost/librar.io/public/api/bookshelf/${user_id}`);
            setBookshelfFetch(response.data);
        } catch (error) {
            // Manejar el error de solicitud GET
            console.error(error);
        }
    }

    const [BookshelfFetch, setBookshelfFetch] = useState([]);
    useEffect(() => {
        getBookshelfFetch()
    }, [])


    return (
        <div className='container py-5'>
            <div className="row">
                <div className="card py-3">
                    <div className="row  px-5 py-3">
                        <div className="col">
                            <h1>Books</h1>
                        </div>
                        <div className="col text-end">
                            <IconButton onClick={() => setModalShow1(true)}>
                                <AddCircleIcon color='success' sx={{ fontSize: 40 }}
                                />
                            </IconButton>
                            <BookStore
                                show={modalShow1}
                                onHide={() => setModalShow1(false)}
                            />
                        </div>

                    </div>

                    <div className="card-body">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Started At</th>
                                    <th scope="col">Finished At</th>
                                    <th scope="col">Links</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {BookshelfFetch.map((B) => (
                                    <tr key={B.id}>
                                        <th scope="row">{B.id}</th>
                                        <td><Image src={B.book.photo} width={100} title={B.book.synopsis}></Image></td>
                                        <td className='text-break' width={80}>{B.book.title}</td>
                                        <td>{B.book.author.name} {B.book.author.last_name}</td>
                                        <td>{B.book.genre.description}</td>
                                        <td>{B.score}</td>
                                        <td>{B.status.description}</td>
                                        <td className='text-break'>{B.started_at}</td>
                                        <td className='text-break'>{B.finished_at}</td>
                                            <td className='text-break'><a href={B.book.physical_link}>Physical Link</a> <a href={B.book.digital_link}>Digital Link</a></td>
                                        <td>
                                            <IconButton aria-label="brush" onClick={() => editBook(B)} >
                                                <BrushIcon color='secondary' />

                                            </IconButton>
                                            <BookUpdate
                                                show={modalShow2}
                                                onHide={() => setModalShow2(false)}
                                                book={bookData}
                                            />
                                            <IconButton aria-label="delete" onClick={() => deleteBook(B)}>
                                                <DeleteIcon color="error" />

                                            </IconButton>
                                            <BookDestroy
                                                show={modalShow3}
                                                onHide={() => setModalShow3(false)}
                                                book={bookData}
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

export default Admin_Books;