import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import api from '../../service/api';
import { Link, useNavigate } from "react-router-dom";



const NewScheduling = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [address, setAddress] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [contato, setContato] = useState("");
    const [gender, setGender] = useState("");
    const [cidade, setCidade] = useState("");
    const [cargo, setCargo] = useState("");
    const [observation, setObservation] = useState("");
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
        let usernamevar = generateUserName(name);
        let passwordvar = generatePassword(dateBirth);
        let datevar = convertDateFormat(dateBirth);

        await api.post(`/api/patients/`, {
            "username": usernamevar,
            "name": name,
            "email": email,
            "password": passwordvar,
            "age": age,
            "dateOfBirth": datevar,
            "address": address,
            "city": cidade,
            "occupation": cargo,
            "obs": observation,
            "phoneContact": contato,
            "gender": gender,
            "nutriID":1
        })
        .then(response => {
            navigate('/home')
        })
        .catch(err => {
            console.log(err)
        })    
    }


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>            
            <S.Container>
                <Stack width='600px' spacing={2} direction="column" margin='20px 10px 10px 40px'>
                    <S.Field>
                        <S.FieldTitle>Agendamento</S.FieldTitle>
                    </S.Field>

                    <Stack width='100%' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Nome paciente</h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Nome paciente"
                                onChange={(e) => [setName(e.target.value), setError("")]}
                                sx={{ width: '500px' }} 
                            />
                        </S.Field>

                        
                    </Stack>
                    
                    <Stack width='600px' spacing={1} direction="row" margin='0px 0px 0px 0px'>
                        <S.Field>
                            <S.Label><h5>Data </h5></S.Label>
                            <TextField
                                required
                                id="outlined-required"
                                label="Data"
                                onChange={(e) => [setEmail(e.target.value), setError("")]}
                                sx={{ width: '200px' }} 
                            />
                                
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Hora</h5></S.Label>
                            
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
                                //onChange={(e) => handleInputChange(`horario`, e.target.value)}
                                sx={{ width: '100px' }}
                            />
                        </S.Field>

                    </Stack>

                    

                    <S.Field>
                        <Button variant="primary" type="submit" onClick={handleRegister}>Salvar agendamento</Button>
                    </S.Field>
                    
                </Stack>
                
            </S.Container>
        </>
    )
  
}
  
export default NewScheduling;