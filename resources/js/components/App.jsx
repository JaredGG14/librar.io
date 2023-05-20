import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AuthProvider from "./Components/AuthContext";
import NavBar from "./Main/NavBar";
import LP from "./Main/landing";
import Login from "./Main/Login";
import Register from "./Main/Register";
import Bookshelf from "./Books/Bookshelf";
import Discover from "./Books/Discover";
import Goals from "./Goals/Goals";
import User from "./Profiles/User";
import AuthProvider from "./AuthContext";
import LM from './Admin/LateralMenu';
import Author_Admin from "./Admin/Author_Admin";
import Admin_Books from "./Admin/Book_Admin";
import Genre_Admin from "./Admin/Genre_Admin";


export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/librar.io/public" element={<NavBar />} >
                            <Route index element={<LP />} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register />} />
                            <Route path="main" element={<Bookshelf />} />
                            <Route path="discover" element={<Discover />} />
                            <Route path="goal" element={<Goals />} />
                            <Route path="user" element={<User />} />
                        </Route>
                        <Route path="/librar.io/public/admin" element={<LM/>}>
                            <Route index element={<Admin_Books/>} />
                            <Route path="/librar.io/public/admin/book_admin" element={<Admin_Books/>}/>
                            <Route path="/librar.io/public/admin/genre_admin" element={<Genre_Admin/>}/>
                            <Route path="/librar.io/public/admin/author_admin" element={<Author_Admin/>}/>
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}