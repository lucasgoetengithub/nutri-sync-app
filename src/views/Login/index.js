import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';


const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    useEffect(() =>{
      
    });

    function handleKeyPress(event) {
        console.log(event.key);
        if (event.key === "Enter") {
          //handleSignin();
        }
      }
    
    
      
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
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                            />

                            
                            <TextField
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(e) => [setSenha(e.target.value), setError("")]}
                                onKeyPress={(event) => handleKeyPress(event)}
                            />

                        </Stack>                            
                        
                    </S.Panel2>

                    <S.Panel3>
                        <Link to="/recoverpassword">Forgot password</Link>
                    </S.Panel3>

                    <S.Panel4>
                        <Stack width='820%' spacing={3.8} direction="column">
                            
                            <Button variant="primary" type="submit">Sign In</Button>

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