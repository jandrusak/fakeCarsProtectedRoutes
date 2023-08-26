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
// const ProtectedRoute = ({ path, element }) => {
//     if (checkAuth()) {
//         return <Route path ={path} element={element}/>
//     } else {
//         return <Navigate to="/login" />
//     }
// }

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
        checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
    )

}

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="/car/:id" element={<ProtectedRoute component={Car}/>} />
            
            {/* <Route path="/about" element={<About/>} */}
            {/* <Route> */}
            <>
            <Route path="/about" element={<ProtectedRoute component={About}/>} />
            {/* </Route> */}
            </>
        </Routes>
    );
};

export default Router;