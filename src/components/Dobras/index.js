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
                        <S.Label><h5>Triceps</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Triceps"
                            onChange={(e) => [setTriceps(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Subescapular</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Subescapular"
                            onChange={(e) => [setSubescapular(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                
                    <S.Field>
                        <S.Label><h5>Biceps</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Biceps"
                            onChange={(e) => [setBiceps(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Axiliar média</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Axiliar média"
                            onChange={(e) => [setAxiliarMedia(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                    
                    <S.Field>
                        <S.Label><h5>Toracica</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Toracica"
                            onChange={(e) => [setToracica(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Supra iliaca</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Supra iliaca"
                            onChange={(e) => [setSupraIliaca(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>
                    
                    
                    <S.Field>
                        <S.Label><h5>Supra espinhal</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Supra espinhal"
                            onChange={(e) => [setSupraEspinal(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Coxa</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Coxa"
                            onChange={(e) => [setCoxa(e.target.value), setError("")]}
                            sx={{ width: '500px' }}
                        />

                    </S.Field>

                    <S.Field>
                        <S.Label><h5>Panturrilha medial</h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Panturrilha medial"
                            onChange={(e) => [setPanturrilhaMedial(e.target.value), setError("")]}
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