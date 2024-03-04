import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import api from '../../service/api';
import Card from '../Card';


const Dieta = () => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({});

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 }
    ];

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setError("");
    }

    useEffect(() =>{
      
    });

    const handleRegister = async (event) => {

        
    }


    return (
        <>
            <S.GlobalStyle />    
                <S.FieldTitle>Dieta</S.FieldTitle>
                <Stack width='600px' spacing={5} direction="column">
                    <Stack width='100%' spacing={1} direction="row">
                        <Stack width='80%' spacing={1} direction="column">

                            <Stack width='80%' spacing={1} direction="row">
                                <S.Field>
                                    <S.Label><h5>Refeição </h5></S.Label>
                                    <TextField
                                        required
                                        id='outlined-required'
                                        label='Café da manha / almoço ...'
                                        onChange={(e) => handleInputChange(`campo${1 + 1}`, e.target.value)}
                                        sx={{ width: '335px' }}
                                    />
                                </S.Field>

                                <S.Field>
                                    <S.Label><h5>Horario </h5></S.Label>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Horário"
                                        type="time"
                                        defaultValue="00:30"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        onChange={(e) => handleInputChange(`horario`, e.target.value)}
                                        sx={{ width: '100px' }}
                                    />
                                </S.Field>
                            </Stack>
                            

                            <Stack width='600px' spacing={0.5} direction="collumn">
                                <S.Field key={1}>
                                    <S.Label><h5>Porção (g) </h5></S.Label>
                                    <TextField
                                        required
                                        id='outlined-required'
                                        label='Porção (g) '
                                        onChange={(e) => handleInputChange(`campo${1 + 1}`, e.target.value)}
                                        sx={{ width: '80px'}}
                                    />
                                </S.Field>

                                <S.FieldSelect key={1}>
                                    <S.Label><h5>Alimento </h5></S.Label>
                                    <Stack width='490px' spacing={1} direction="row">
                                        <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={top100Films}
                                        sx={{ width: '400px' }}
                                        renderInput={(params) => <TextField {...params} label="Alimento" />}
                                        />
                                        <S.Field>
                                            <Button variant="primary" type="submit" onClick={handleRegister}>Adicionar</Button>
                                        </S.Field>
                                    </Stack>
                                </S.FieldSelect>
                            </Stack>
                        </Stack>

                        <S.Field>
                            <S.Label><h5>Refeição</h5></S.Label>
                            <Stack width='700px' spacing={1} direction="row">
                                <TextField
                                    multiline
                                    rows={6} 
                                    id="outlined-multiline"
                                    label="Refeição"
                                    //onChange={(e) => [setObservation(e.target.value), setError("")]}
                                    sx={{ width: '100%' }}
                                />

                                <S.Field>
                                    <Button variant="primary" type="submit" onClick={handleRegister}>Adicionar</Button>
                                </S.Field>
                            </Stack>                                
                        </S.Field>
                    </Stack>
                    

                    

                    
                </Stack>

                <S.Label><h5>Refeições</h5></S.Label>
                <S.CardsArea >
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </S.CardsArea>
                    

                    
                <S.Field>
                    <Stack width='200px' spacing={1} direction="row">
                        <S.Field>
                            <Button variant="primary" type="submit" onClick={handleRegister}>Salvar</Button>
                        </S.Field>
                        
                        <S.Field>
                            <Button variant="primary" type="submit" onClick={handleRegister}>Salvar PDF</Button>
                        </S.Field>
                    </Stack>     

                    <S.Label><h5>Dieta</h5></S.Label>
                    <TextField
                        multiline
                        rows={80} 
                        id="outlined-multiline"
                        label="Dieta"
                        //onChange={(e) => [setObservation(e.target.value), setError("")]}
                        sx={{ width: '800px' }}
                    />
                </S.Field>
        </>
    )
  
}
  
  export default Dieta;