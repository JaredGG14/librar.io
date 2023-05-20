import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Groups3Icon from '@mui/icons-material/Groups3';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function LateralMenu() {

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("user_name");
        localStorage.removeItem("user_email")
        alert("Logout successfully")
    }
    return (
        <>
            <div className='container-flex'>
                <div className="row px-5 py-3 MenuColor">
                    <div className="col">
                        <Image src={"https://static.vecteezy.com/system/resources/previews/011/381/995/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"} width={125}></Image>
                    </div>
                    <div className="col pt-4">
                        <Button variant='outline-light' as={Link} to="/librar.io/public/admin/author_admin"><LocalLibraryIcon></LocalLibraryIcon> Author</Button>
                    </div>
                    <div className="col pt-4">
                        <Button variant='outline-light' as={Link} to="/librar.io/public/admin/book_admin"><MenuBookIcon></MenuBookIcon> Book</Button>
                    </div>
                    <div className="col pt-4">
                        <Button variant='outline-light' as={Link} to="/librar.io/public/admin/genre_admin"><TheaterComedyIcon></TheaterComedyIcon> Genre</Button>
                    </div>
                    <div className="col pt-4">
                        <Button variant='outline-light' as={Link} to="/librar.io/public/login" onClick={() => logout()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-power" viewBox="0 0 16 16">
                                <path d="M7.5 1v7h1V1h-1z" />
                                <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                            </svg> Logout
                        </Button>
                    </div>

                </div>
                <div className='row'>
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div >

        </>
    );
}

export default LateralMenu;