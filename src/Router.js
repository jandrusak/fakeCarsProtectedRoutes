import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies.loggedIn === 'true'
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ path, element }) => {
    if (checkAuth()) {
        return <Route path ={path} element={element}/>
    } else {
        return <Navigate to="/login" />
    }
}



const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <ProtectedRoute path="/about" element={<About/>} />
            <ProtectedRoute path="/car/:id" element={<Car/>} />
        </Routes>
    );
};

export default Router;