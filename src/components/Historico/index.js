import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { DataGrid, GridColumns, GridEventListener, GridCellParams } from '@mui/x-data-grid';


const columns: GridColumns = [
    { 
        field: "description", 
        headerName: "Alocação", 
        width: 180, 
        editable: true 
    },
];

const Historico = () => {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const dadosLista = [
        { nome: 'Ombro', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Torax', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Braço', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Antebraço', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Cintura', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Quadril', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Coxa', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Panturrilha', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] }
    ];

    const handleCellEditCommit = (params: GridCellParams) => {
        
    }

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
       
    };
    

    const handleDisclosureClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const rowsAllocation = dadosLista.map((item, index) => {
            const row = {
                id: index + 1,
                description: item.nome,
            };

            item.valores.forEach((valor, i) => {
                row[`valor${i + 1}`] = valor;
            });

            return row;
        });

        setRows(rowsAllocation);
    }, []);

    const columns: GridColumns = [
        { field: 'description', headerName: 'Nome', width: 180 },
        ...dadosLista.length > 0
            ? dadosLista[0].valores.map((valor, index) => ({
                field: `valor${index + 1}`,
                headerName: `Valor ${index + 1}`,
                width: 180,
                editable: true,
            }))
            : [],
    ];

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
                    <DataGrid editMode="cell" hideFooter='true' rows={rows} columns={columns} onCellEditCommit={handleCellEditCommit}  experimentalFeatures={{ newEditingApi: true } } onRowClick={handleRowClick} />
                </Collapse>
            </Stack>
        </>
    );
};

export default Historico;