import React, { useState, useEffect, Component } from 'react'
import * as S from './styles';
import { Form, FormControl, Button } from 'react-bootstrap';


const Login = () => {

    useEffect(() =>{
      
    });
    
      
    return (
        <>
            <S.GlobalStyle />
            <S.Container>
                <S.Content>
                    <h2>Hello, lets get started </h2>
                    <h3>Sign in to continue</h3>

                    <Form>
                        <Form.Group controlId="formLogin">
                        <Form.Control type="text" placeholder="Enter your login" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                        <Form.Control type="password" placeholder="Enter your password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Sign In
                        </Button>
                    </Form>
                </S.Content>
                
            </S.Container>
        </>
    )
  
  }
  
  export default Login;