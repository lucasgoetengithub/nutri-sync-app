import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import api from '../../service/api';


const PersonalData = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [contato, setContato] = useState("");
    const [gender, setGender] = useState("");
    const [cidade, setCidade] = useState("");
    const [cargo, setCargo] = useState("");
    const [observation, setObservation] = useState("");

    function convertDateFormat(inputDate) {
        const [day, month, year] = inputDate.split('/');
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }

    const handleRegister = async (event) => {
        
        let datevar = convertDateFormat(dateBirth);

        // await api.post(`/api/patients/`, {
        //     "username": username,
        //     "name": name,
        //     "email": email,
        //     "password": password,
        //     "age": age,
        //     "dateOfBirth": datevar,
        //     "address": address,
        //     "city": cidade,
        //     "occupation": cargo,
        //     "obs": observation,
        //     "phoneContact": contato,
        //     "gender": gender,
        //     "nutriID":1
        // })
        // .then(response => {
            
        // })
        // .catch(err => {
        //     console.log(err)
        // })    
    }
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
                <Stack width='600px' spacing={2} direction="column" margin='00px 10px 10px 40px'>
                    
                    <S.FieldTitle>Dados do paciente</S.FieldTitle>

                    <Stack width='600px' spacing={5} direction="row" margin='0px 0px 0px 40px'>
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
                            <S.Label><h5>Gênero</h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Gênero"
                                onChange={(e) => [setGender(e.target.value), setError("")]}
                                sx={{ width: '200px' }} 
                            />
                        </S.Field>
                    </Stack>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Email </h5></S.Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                                sx={{ width: '500px' }}
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Contato</h5></S.Label>
                            <InputMask
                                mask="(99) 99999-9999"
                                label="(99) 99999-9999"
                                maskChar="_"
                                value={contato}
                                onChange={(e) => setContato(e.target.value)}
                            >
                                {(inputProps) => <TextField {...inputProps} sx={{ width: '200px' }} />}
                            </InputMask>
                        </S.Field>
                    </Stack>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Data de nascimento </h5></S.Label>

                            <InputMask
                                mask="99/99/9999"
                                label="00/00/0000"
                                maskPlaceholder="_"
                                value={dateBirth}
                                onChange={(e) => [setDateBirth(e.target.value), setError("")]}
                            >
                                {(inputProps) => <TextField {...inputProps} sx={{ width: '500px' }} />}
                            </InputMask>
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Idade </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Idade"
                                onChange={(e) => [setAge(e.target.value), setError("")]}
                                sx={{ width: '200px' }} 
                            />
                        </S.Field>
                    </Stack>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Endereço </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Endereço"
                                onChange={(e) => [setAddress(e.target.value), setError("")]}
                                sx={{ width: '500px' }} 
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Cidade </h5></S.Label>

                            <TextField
                                required
                                id="outlined-required"
                                label="Cidade"
                                onChange={(e) => [setCidade(e.target.value), setError("")]}
                                sx={{ width: '200px' }} 
                            />
                        </S.Field>
                    </Stack>

                    <S.Field>
                        <S.Label><h5>Emprego / Cargo </h5></S.Label>

                        <TextField
                            required
                            id="outlined-required"
                            label="Emprego / Cargo "
                            onChange={(e) => [setCargo(e.target.value), setError("")]}
                            sx={{ width: '500px' }} 
                        />
                    </S.Field>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Observação</h5></S.Label>
                            <TextField
                                multiline
                                rows={9} 
                                id="outlined-multiline"
                                label="Observação"
                                onChange={(e) => [setObservation(e.target.value), setError("")]}
                                sx={{ width: '800px' }}
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
  
  export default PersonalData;