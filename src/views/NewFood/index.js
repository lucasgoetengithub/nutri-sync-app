import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import api from '../../service/api';
import { Link, useNavigate } from "react-router-dom";



const NewFood = () => {

    const [porcao, setPorcao] = useState("");
    const [kcal, setKcal] = useState("");
    const [carboidratos, setCarboidratos] = useState("");
    const [proteinas, setProteinas] = useState("");
    const [fibras, setFibras] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    useEffect(() =>{
      
    });

    function generateUserName(name) {
        const words = name.split(' ');
      
        if (words.length === 1) {
          return words[0].toLowerCase();
        }
      
        const firstLetter = words[0][0].toLowerCase();
        const lastWord = words[words.length - 1].toLowerCase();
      
        return `${firstLetter}${lastWord}`;
    }

    function generatePassword(dateOfBirth) {
        const numericDateOfBirth = dateOfBirth.replace(/\D/g, '');
        return numericDateOfBirth;
    }

    function convertDateFormat(inputDate) {
        const [day, month, year] = inputDate.split('/');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
      }


    const handleRegister = async (event) => {
        
    }


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>            
            <S.Container>
                <Stack width='600px' spacing={2} direction="column" margin='20px 10px 10px 40px'>
                    <S.Field>
                        <S.FieldTitle>Cadastrando novo alimento</S.FieldTitle>
                    </S.Field>

                    <Stack width='100%' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Nome </h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Nome"
                                onChange={(e) => [setName(e.target.value), setError("")]}
                                sx={{ width: '500px' }} 
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Porção (g)</h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Porção (g)"
                                onChange={(e) => [setPorcao(e.target.value), setError("")]}
                                sx={{ width: '200px' }}
                            />
                        </S.Field>
                    </Stack>
                    
                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Kcal (g)</h5></S.Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Kcal (g)"
                                onChange={(e) => [setKcal(e.target.value), setError("")]}
                                sx={{ width: '350px' }} 
                            />
                                
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Carboidratos (g)</h5></S.Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Carboidratos (g)"
                                onChange={(e) => [setCarboidratos(e.target.value), setError("")]}
                                sx={{ width: '350px' }} 
                            />
                                
                        </S.Field>

                    </Stack>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                    <S.Field>
                            <S.Label><h5>Proteinas (g)</h5></S.Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Proteinas (g)"
                                onChange={(e) => [setProteinas(e.target.value), setError("")]}
                                sx={{ width: '350px' }} 
                            />
                                
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Fibras (g)</h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Fibras (g)"
                                onChange={(e) => [setFibras(e.target.value), setError("")]}
                                sx={{ width: '350px' }}
                            />
                        </S.Field>
                    </Stack>

                    <S.Field>
                        <Button variant="primary" type="submit" onClick={handleRegister}>Cadastrar</Button>
                    </S.Field>
                </Stack>
            </S.Container>
        </>
    )
  
}
  
export default NewFood;