import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';


const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
      
    });

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleRegister();
        }
    }

    const handleRegister = async (event) => {
      
        if (password != confirmPassword) {
            setError("As senhas devem ser iguais");
            return;
        }

        if (!username) {
            setError("O campo username é obrigatório");
            return;
        }
  
        if (!password) {
            setError("O campo password é obrigatório");
            return;
        }

        if (!confirmPassword) {
            setError("O campo confirmPassword é obrigatório");
            return;
        }

        if (!name) {
            setError("O campo name é obrigatório");
            return;
        }
        
        await api.post(`/api/auth/`, {
            username: username,
            password: password
        })
        .then(response => {
                    
            setError('Usuario nao encontrado')
        })        
  
        // console.log(token);
        // if (token) {
        //     //await signin(email, token);
        //     navigate('/home')
        // }
          
    };  
    
    
      
    return (
        <>
            <S.GlobalStyle />
            
            <S.Container>
                <Stack width='300%' spacing={3.8} direction="column">
                    <S.Panel1>
                        <img
                            src={logoImage}
                            alt="Descrição da imagem"
                            style={{ width: '50%', marginBottom: '0px' }} // Ajuste o estilo conforme necessário
                        />
                    </S.Panel1>
                    
                    <S.Panel2>
                        <h2>New here? </h2>
                        <h3>Signing up is easy. It only take a few steps</h3>

                        <Stack width='246%' spacing={3.8} direction="column">
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                onChange={(e) => [setUsername(e.target.value), setError("")]}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                onChange={(e) => [setName(e.target.value), setError("")]}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="email"
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                            />

                            
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => [setPassword(e.target.value), setError("")]}
                            />

                            <TextField
                                required
                                id="outlined-password-input"
                                label="Confirm password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => [setConfirmPassword(e.target.value), setError("")]}
                            />

                        </Stack>                        
                        
                    </S.Panel2>

                    <S.Panel3>
                        <Stack width='820%' spacing={3.8} direction="column">
                            
                            <Button variant="primary" type="submit" onClick={handleRegister}>Sign In</Button>

                        </Stack>     
                    </S.Panel3>

                    <S.Panel4>
                        <Link classname="login" to="/login">Already have an account? Login</Link>
                    </S.Panel4>

                </Stack> 
                
            </S.Container>
        </>
    )
  
  }
  
  export default Register;