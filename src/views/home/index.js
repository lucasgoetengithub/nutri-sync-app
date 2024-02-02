import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';


const Home = () => {

    

    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <S.Sidebar>
                <S.Logo src={logoImage}></S.Logo>
                <S.SidebarList>

                    <S.SidebarItem>
                        <Link to="/home">Home</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/paciente">Paciente</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/alimentos">Alimentos</Link>
                    </S.SidebarItem>

                </S.SidebarList>
            </S.Sidebar>
            
        </>
    )
  
  }
  
  export default Home;