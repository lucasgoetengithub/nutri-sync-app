import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Historico = () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const nomesLista = ['Torax', 'Biceps', 'Triceps'];
    const informacoesLista = [
        // Adicione suas informações aqui
        { nome: 'Torax', valor1: 10, valor2: 20, valor3: 30, valor2: 20, valor3: 30, valor2: 20, valor3: 30, valor2: 20, valor3: 30 },
        { nome: 'Biceps', valor1: 15, valor2: 25, valor3: 35, valor2: 20, valor3: 30, valor2: 20, valor3: 30, valor2: 20, valor3: 30 },
        { nome: 'Triceps', valor1: 12, valor2: 22, valor3: 32, valor2: 20, valor3: 30, valor2: 20, valor3: 30, valor2: 20, valor3: 30 },
    ];

    const handleDisclosureClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setRows(informacoesLista);
    }, []);

    return (
        <>
            <S.GlobalStyle />
            <Stack spacing={2}>
                <Box>
                    <Typography variant="h5" onClick={handleDisclosureClick} style={{ cursor: 'pointer' }}>
                        Histórico
                    </Typography>
                </Box>
                <Collapse in={open}>
                    <h1>Teste</h1>
                </Collapse>
            </Stack>
        </>
    );
};

export default Historico;