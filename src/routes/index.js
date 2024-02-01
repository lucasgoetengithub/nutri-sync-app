import React, {Fragment} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/home';

const Private = ({ Item }) => {
    // const user = JSON.parse(localStorage.getItem("user_token"));    

    // const { signed } = useAuth();
    // var logado = false;
    // if (user != null) {
    //     logado = true;
    // } else {
    //     logado = signed;
    // }
    
    // return logado ? <Item/> : <Login/>
    return true;
}

export default function Routers() {
    return (
        <BrowserRouter>
        <Fragment>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
        </Fragment>
        </BrowserRouter>
    )
}