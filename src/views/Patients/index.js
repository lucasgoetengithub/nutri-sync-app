import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';


const Patients = () => {

    
    useEffect(() =>{
      
    });

    function handleKeyPress(event) {
        if (event.key === "Enter") {
        //   handleSignin();
        }
    }

    const handleSignin = async (event) => {
      
        // if (!username || !password) {
        //   setError("Preencha todos os campos");
        //   return;
        // }
  
        // var token = '';
        // await api.post(`/api/auth/`, {
        //     username: username,
        //     password: password
        // })
        // .then(response => {
        //             token = response.data;
        // }).catch(err => {
        //     setError('Usuario nao encontrado')
        // })        
  
        // console.log(token);
        // if (token) {
        //     //await signin(email, token);
        //     navigate('/home')
        // }
          
    };  
    
    
      
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
                        <Link to="/pacientes">Pacientes</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/alimentos">Alimentos</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/agenda">Agenda</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/mensagens">Mensagens</Link>
                    </S.SidebarItem>

                </S.SidebarList>
            </S.Sidebar>
        </>
    )
  
  }
  
  export default Patients;