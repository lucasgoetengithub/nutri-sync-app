import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import api from '../../service/api';


const Dobras = () => {
    const [triceps, setTriceps] = useState("");
    const [subescapular, setSubescapular] = useState("");
    const [biceps, setBiceps] = useState("");
    const [axiliarMedia, setAxiliarMedia] = useState("");
    const [toracica, setToracica] = useState(""); 
    const [supraIliaca, setSupraIliaca] = useState("");
    const [supraEspinal, setSupraEspinal] = useState("");
    const [coxa, setCoxa] = useState("");
    const [panturrilhaMedial, setPanturrilhaMedial] = useState("");
    const [error, setError] = useState("");


    useEffect(() =>{
      
    });

    const handleRegister = async (event) => {

        
    }


    return (
        <>
            <S.GlobalStyle />    
            <S.FieldTitle>Bioimpedância</S.FieldTitle>

                <Stack width='600px' spacing={5} direction="column">
                    
                    <S.Field>
                        <S.Label><h5>Peso</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Peso (kg)"
                            onChange={(e) => [setPeso(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>IMC</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="IMC"
                            onChange={(e) => [setIMC(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                
                    <S.Field>
                        <S.Label><h5>Gordura Corporal</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Gordura Corporal (%)"
                            onChange={(e) => [setGorduraCorporal(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Taxa Muscular</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Taxa Muscular (%)"
                            onChange={(e) => [setTaxaMuscular(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                    
                    <S.Field>
                        <S.Label><h5>Massa livre de gordura </h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Massa livre de gordura (Kg)"
                            onChange={(e) => [setMassaLivreDeGordura(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Gordura subcutanea</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Gordura subcutanea (%)"
                            onChange={(e) => [setGorduraSubCutanea(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                    
                    <S.Field>
                        <S.Label><h5>Gordura visceral</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Gordura visceral"
                            onChange={(e) => [setGorduraVisceral(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Água corporal</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Água corporal (%)"
                            onChange={(e) => [setAguaCorporal(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    
                
                    <S.Field>
                        <Button variant="primary" type="submit" onClick={handleRegister}>Salvar</Button>
                    </S.Field>
                </Stack>
        </>
    )
  
  }
  
  export default Dobras;