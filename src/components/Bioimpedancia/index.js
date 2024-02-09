import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import api from '../../service/api';


const Bioimpedancia = () => {
    const [peso, setPeso] = useState("");
    const [imc, setIMC] = useState("");
    const [gorduraCorporal, setGorduraCorporal] = useState("");
    const [taxaMuscular, setTaxaMuscular] = useState("");
    const [massaLivreDeGordura, setMassaLivreDeGordura] = useState(""); 
    const [gorduraSubCutanea, setGorduraSubCutanea] = useState("");
    const [gorduraVisceral, setGorduraVisceral] = useState("");
    const [aguaCorporal, setAguaCorporal] = useState("");
    const [massaMuscularEsqueletica, setMassaMuscularEsqueletica] = useState("");
    const [massaMuscular, setMassaMuscular] = useState("");
    const [massaOssea, setMassaOssea] = useState("");
    const [proteina, setProteina] = useState("");
    const [taxaMetabolicaBasal, setTaxaMetabolicaBasal] = useState("");
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
                        <S.Label><h5>Massa muscular esquelética</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Massa muscular esquelética (%)"
                            onChange={(e) => [setMassaMuscularEsqueletica(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Massa muscular</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Massa muscular (kg)"
                            onChange={(e) => [setMassaMuscular(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Massa óssea</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Massa óssea (%)"
                            onChange={(e) => [setMassaOssea(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Proteina</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Proteina (%)"
                            onChange={(e) => [setProteina(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Taxa metabolica basal</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Taxa metabolica basal (kcal)"
                            onChange={(e) => [setTaxaMetabolicaBasal(e.target.value), setError("")]}
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
  
  export default Bioimpedancia;