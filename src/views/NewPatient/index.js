import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import InputMask from 'react-input-mask';


const NewPatient = () => {

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
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>            
            <S.Container>
                <Stack width='600px' spacing={2} direction="column" margin='20px 10px 10px 40px'>
                    <S.Field>
                        <S.FieldTitle>Cadastrando novo paciente</S.FieldTitle>
                    </S.Field>

                    <Stack width='600px' spacing={5} direction="row" margin='20px 10px 10px 40px'>
                        <S.Field>
                            <S.Label><h5>Nome </h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Nome"
                                onChange={(e) => [setName(e.target.value), setError("")]}
                                sx={{ width: '500px' }}  // Adicione esta linha para definir a largura
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Gênero</h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Gênero"
                                onChange={(e) => [setGender(e.target.value), setError("")]}
                                sx={{ width: '200px' }}  // Adicione esta linha para definir a largura
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
                                sx={{ width: '500px' }}  // Adicione esta linha para definir a largura
                            />
                                
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Contato</h5></S.Label>
                            <InputMask
                                mask="(00) 00000-0000"
                                label="(00) 00000-0000"
                                maskPlaceholder="_"
                                value={dateBirth}
                                onChange={(e) => [setDateBirth(e.target.value), setError("")]}
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
                                sx={{ width: '200px' }}  // Adicione esta linha para definir a largura
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
                                sx={{ width: '500px' }}  // Adicione esta linha para definir a largura
                            />
                        </S.Field>

                        <S.Field>
                            <S.Label><h5>Cidade </h5></S.Label>
                            
                            <TextField
                                required
                                id="outlined-required"
                                label="Cidade"
                                onChange={(e) => [setCidade(e.target.value), setError("")]}
                                sx={{ width: '200px' }}  // Adicione esta linha para definir a largura
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
                            sx={{ width: '500px' }}  // Adicione esta linha para definir a largura
                        />
                    </S.Field>

                    <S.Field>
                        <Button variant="primary" type="submit" >Cadastrar</Button>
                    </S.Field>
                    
                </Stack>
                
            </S.Container>
        </>
    )
  
}
  
export default NewPatient;