import React from 'react'
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Home } from './pages/Home';
import { Header, Footer} from './layouts/layout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import NewProject from './pages/NewProject';
import MyCart from './pages/MyCart';

export const Routez = () => {
    return (
        <>
            <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                    <Route path="/newproject" element={<NewProject/>}></Route>
                    <Route path="/mycart" element={<MyCart/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}