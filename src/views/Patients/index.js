import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';
import SidebarHome from '../../components/SidebarHome';

const Patients = () => {

    const [rows, setRows] = useState([]);
    const [name, setName] = useState([]);

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        // setFocusedInvest(params.row.id);
        // setFocusedInvestMaxAmount(params.row.maxAmount);

        // api.get(`/DistributionWhereInvest/` + whereInvestId, { 'headers': { 'Authorization': token } })
        // .then(response=> {
        //     var rowsAllocation = [];
        //     var totalUsado = 0;
        //     if (response.data.jsonDistributionWhereInvests) {
        //         response.data.jsonDistributionWhereInvests.forEach(element => {
        //             if (element.idWhereInvestAllocation === params.row.id) {
        //                 totalUsado = totalUsado + element.amountUsed;
        //                 rowsAllocation.push({
        //                     id: element.id,
        //                     description: element.description,
        //                     amount: element.amount,
        //                     amountUsed: element.amountUsed,
        //                     investExpense: element.investExpense,
        //                     idWhereInvestAllocation: element.idWhereInvestAllocation
        //                   })
        //             }
                    
        //         });
        //     }

        //     if (totalUsado > params.row.maxAmount) {
        //         setMessageDistribution('Cuidado! Seus gastos estão excedendo os valores do seu planejamento para esta alocação ');
        //     } else {
        //         setMessageDistribution('');
        //     }

        //     setRowsAllocation(rowsAllocation);
        // })
        
    };

    
    useEffect(() =>{
      
    });

    function handleKeyPress(event) {
        if (event.key === "Enter") {
        //   handleSignin();
        }
    }

    const handleSignin = async (event) => {
      
        // if (!username || !password) {
        //   setError("Preencha todos os campos");
        //   return;
        // }
  
        // var token = '';
        // await api.post(`/api/auth/`, {
        //     username: username,
        //     password: password
        // })
        // .then(response => {
        //             token = response.data;
        // }).catch(err => {
        //     setError('Usuario nao encontrado')
        // })        
  
        // console.log(token);
        // if (token) {
        //     //await signin(email, token);
        //     navigate('/home')
        // }
          
    };  
    
    
      
    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>
                
            <S.Painel1>
                
                <Stack width='80%' spacing={1} direction="column">
                <h2>Filter patient by </h2>
                <Stack width='80%' spacing={3.8} direction="row">
                    <S.StyledTextField
                        required
                        id="outlined-required"
                        label="Nome"
                        onChange={(e) => [setName(e.target.value)]}
                    />

                    <S.StyledTextField
                        required
                        id="outlined-required"
                        label="CPF"
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
                            <S.TableHeader width="800px">Nome</S.TableHeader>
                            <S.TableHeader>Data de Nascimento</S.TableHeader>
                            <S.TableHeader>CPF</S.TableHeader>
                            <S.TableHeader>Telefone</S.TableHeader>
                        </S.TableRow>
                    </thead>
                    <tbody>
                        {rows.map((item, index) => (
                        <S.TableRow key={index} even={index % 2 === 0}>
                            <S.TableCell width="800px">{item.nome}</S.TableCell>
                            <S.TableCell >{item.dataNascimento}</S.TableCell>
                            <S.TableCell >{item.cpf}</S.TableCell>
                            <S.TableCell >{item.telefone}</S.TableCell>
                        </S.TableRow>
                        ))}
                    </tbody>
                </S.DataGridContainer>
            </S.Painel2>
            
        </>
    )
  
  }
  
  export default Patients;