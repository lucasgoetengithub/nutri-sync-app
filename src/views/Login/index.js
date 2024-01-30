import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
      
    });

    function handleKeyPress(event) {
        if (event.key === "Enter") {
          handleSignin();
        }
    }

    const handleSignin = async (event) => {
      
        if (!username || !password) {
          setError("Preencha todos os campos");
          return;
        }
  
        var token = '';
        await api.post(`/api/auth/`, {
            username: username,
            password: password
        })
        .then(response => {
                    token = response.data;
        }).catch(err => {
            setError('Usuario nao encontrado')
        })        
  
        console.log(token);
        if (token) {
            //await signin(email, token);
            navigate('/home')
        }
          
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
                        <h2>Hello, lets get started </h2>
                        <h3>Sign in to continue</h3>

                        <Stack width='300%' spacing={3.8} direction="column">
                            <TextField
                                required
                                id="outlined-required"
                                label="Username"
                                onChange={(e) => [setUsername(e.target.value), setError("")]}
                            />

                            
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => [setPassword(e.target.value), setError("")]}
                                onKeyPress={(event) => handleKeyPress(event)}
                            />

                            

                        </Stack>         
                        {error && <p style={{ color: 'red' }}>{error}</p>}                   
                        
                    </S.Panel2>

                    

                    <S.Panel3>
                        <Link to="/recoverpassword">Forgot password</Link>
                    </S.Panel3>

                    <S.Panel4>
                        <Stack width='820%' spacing={3.8} direction="column">
                            
                            <Button variant="primary" type="submit" onClick={handleSignin}>Sign In</Button>

                        </Stack>     
                    </S.Panel4>

                    <S.Panel5>
                        <Link classname="create" to="/register">Don't have an account? Create</Link>
                    </S.Panel5>
                </Stack> 
            </S.Container>
        </>
    )
  
  }
  
  export default Login;