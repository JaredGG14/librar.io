import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import AuthProvider from "./Components/AuthContext";
import NavBar from "./Main/NavBar";
import LP from "./Main/landing";
import Login from "./Main/Login";
import Register from "./Main/Register";
import MP from "./Main/main";
import BookDetail from "./Books/BookDetail";
import Bookshelf from "./Books/Bookshelf";
import Discover from "./Books/Discover";
import Goals from "./Goals/Goals";
import User from "./Profiles/User";

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                
                    <Routes>
                        <Route path="/librar.io/public" element={<NavBar />} >
                            <Route index element={<LP/>} />
                            <Route path="login" element={<Login />} />
                            <Route path="register" element={<Register/> }/>
                            <Route path="main" element={<MP /> }/>
                            <Route path="bookshelf" element={<Bookshelf/>}/>
                            <Route path="discover" element={<Discover/>}>
                                
                            </Route>
                            <Route path="goal" element={<Goals/>}/>
                            <Route path="user" element={<User/>}>
                            
                            </Route>
                        </Route>
                        
                    </Routes>
            </BrowserRouter>
        </div>
    );
}