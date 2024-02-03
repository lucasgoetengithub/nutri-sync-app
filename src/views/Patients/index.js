import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logoImage from '../../assets/logo.jpg';
import api from '../../service/api';
// import { DataGrid, GridColumns, GridEventListener, GridCellParams } from '@mui/x-data-grid';
// import { StyledEngineProvider } from '@mui/material/styles';

// const columns: GridColumns = [
//     { 
//         field: "description", 
//         headerName: "Alocação", 
//         width: 180, 
//         editable: true 
//     },
//     { 
//         field: "percentage", 
//         headerName: "Porcentagem %", 
//         type: "number", 
//         width: 180, 
//         editable: true 
//     },
//     {
//       field: "maxAmount",
//       headerName: "Quantidade",
//       type: "number",
//       width: 150,
//       editable: true
//     }
// ];

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
            <S.Sidebar>
                <S.Logo src={logoImage}></S.Logo>
                <S.SidebarList>

                    <S.SidebarItem>
                        <Link to="/home">Home</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/pacientes">Pacientes</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/alimentos">Alimentos</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/agenda">Agenda</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/mensagens">Mensagens</Link>
                    </S.SidebarItem>

                </S.SidebarList>
            </S.Sidebar>
                
            <S.Painel1>
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
                        label="Outro Campo"
                        onChange={(e) => [setName(e.target.value)]}
                    />

                    <Button variant="primary" type="submit" onClick={handleSignin}>Buscar</Button>

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