import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import api from '../../service/api';
import SidebarHome from '../../components/SidebarHome';


const FoodsList = () => {

    const [rows, setRows] = useState([]);
    const [name, setName] = useState([]);

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        
        
    };

    
    useEffect(() =>{
        // api.get(`api/patients/?nutriID=1&name=teste teste`, {})
        api.get(`api/patients/?nutriID=1`, {})
        .then(response => {
            console.log(response.data);
            var rowsAllocation = [];
            
            response.data.forEach(element => {
                console.log(element.id);
                rowsAllocation.push({
                    id: element.id,
                    nome: element.name,
                    email: element.email,
                    telefone: element.phoneContact
                });
            });

            setRows(rowsAllocation);
        })
        .catch(err => {
            console.log(err)
        })      
    });

    function handleKeyPress(event) {
        if (event.key === "Enter") {
        //   handleSignin();
        }
    }

    const handleSignin = async (event) => {
      
        
          
    };  
    
    
      
    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>
                
            <S.Painel1>
                
                <Stack width='80%' spacing={1} direction="column">
                    <h2>Filter patient by </h2>
                    <Stack width='70%' spacing={3.8} direction="row">
                        <S.StyledTextField
                            required
                            id="outlined-required"
                            label="Nome"
                            onChange={(e) => [setName(e.target.value)]}
                        />

                        <Button variant="primary" type="submit" onClick={handleSignin}>Buscar</Button>

                    </Stack>
                </Stack>
                
            </S.Painel1>

            <S.Painel2>
                <S.DataGridContainer>
                    <thead>
                        <S.TableRow>
                            <S.TableHeader width="80px">id</S.TableHeader>
                            <S.TableHeader width="430px">Nome</S.TableHeader>
                            <S.TableHeader width="430px">E-mail</S.TableHeader>
                            <S.TableHeader width="200px">Telefone</S.TableHeader>
                        </S.TableRow>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => (
                        <S.TableRow key={index} even={index % 2 === 0}>
                            <S.TableCell width="80px">{item.id}</S.TableCell>
                            <S.TableCell width="430px">{item.nome}</S.TableCell>
                            <S.TableCell width="430px">{item.email}</S.TableCell>
                            <S.TableCell width="200px">{item.telefone}</S.TableCell>
                        </S.TableRow>
                        ))}
                    </tbody>
                </S.DataGridContainer>
            </S.Painel2>
            
        </>
    )
  
  }
  
  export default FoodsList;