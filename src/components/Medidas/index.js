import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import api from '../../service/api';


const Medidas = () => {
    const [ombro, setOmbro] = useState("");
    const [torax, setTorax] = useState("");
    const [cintura, setCintura] = useState("");
    const [quadril, setQuadril] = useState("");
    const [braco, setBraco] = useState("");
    const [antebraco, setAntebraco] = useState("");
    const [coxa, setCoxa] = useState("");
    const [panturrilha, setPanturrilha] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (event) => {

        
    }
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
                <S.FieldTitle>Medidas do paciente</S.FieldTitle>

                <Stack width='600px' spacing={5} direction="column" margin='0px 0px 0px 40px'>
                    <Stack width='600px' spacing={5} direction="row">
                        <S.Field>
                            <S.Label><h5>Ombro </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Ombro (cm)"
                                onChange={(e) => [setTorax(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Torax </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Torax (cm)"
                                onChange={(e) => [setTorax(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>
                    </Stack>
                    
                    <Stack width='600px' spacing={5} direction="row">
                        <S.Field>
                            <S.Label><h5>Braco </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Braco (cm)"
                                onChange={(e) => [setBraco(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Antebraço </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Antebraço (cm)"
                                onChange={(e) => [setAntebraco(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>
                    </Stack>
                    
                    <Stack width='600px' spacing={5} direction="row">
                        <S.Field>
                            <S.Label><h5>Cintura </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Cintura (cm)"
                                onChange={(e) => [setCintura(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Quadril </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Quadril (cm)"
                                onChange={(e) => [setQuadril(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>
                    </Stack>
                    
                    <Stack width='600px' spacing={5} direction="row">
                        <S.Field>
                            <S.Label><h5>Coxa </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Coxa (cm)"
                                onChange={(e) => [setCoxa(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Panturrilha </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Panturrilha (cm)"
                                onChange={(e) => [setPanturrilha(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />

                        </S.Field>
                    </Stack>
                
                    <S.Field>
                        <Button variant="primary" type="submit" onClick={handleRegister}>Salvar</Button>
                    </S.Field>
                </Stack>

                
                    
        </>
    )
  }
  
  export default Medidas;