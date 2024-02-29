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
    const [panelHeight, setPanelHeight] = useState(200); 

    const [openMedida, setOpenMedida] = useState(false);
    const [openBioImpedancia, setOpenBioImpedancia] = useState(false);
    const [openDobras, setOpenDobras] = useState(false);

    const [rows, setRows] = useState([]);
    const [rowsBioImpedancia, setRowsBioImpedancia] = useState([]);
    const [rowsDobras, setRowsDobras] = useState([]);



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
    const dadosListaBioImpedancia = [
        { nome: 'Peso', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'IMC', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Gordura corporal', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Taxa muscular', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Massa livre de gorduras', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Gordura subcutanea', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Gordura visceral', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Àgua corporal', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Massa muscular esquelética', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Massa muscular', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Massa óssea', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Proteina', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Taxa metabolica basal', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
    ];
    const dadosListaDobras = [
        { nome: 'Tríceps', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Subescapular', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Bíceps', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Axiliar Média', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Toracica', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Supra Iliaca', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Supra Espinal', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Coxa', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
        { nome: 'Panturrilha Medial', valores: [10, 10, 10, 10, 10, 10, 10, 10, 10] },
    ];

    const handleCellEditCommit = (params: GridCellParams) => {
        
    }

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
       
    };
    

    const handleDisclosureMedidaClick = () => {
        if (!openMedida) {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = 0;
                newPanelHeight = 200 + 465;
                return newPanelHeight;
            });
        }
        setOpenMedida(!openMedida);
        
    };

    const handleDisclosureBioImpedanciaClick = () => {
        setOpenBioImpedancia(!openBioImpedancia);
    };

    const handleDisclosureDobrasClick = () => {
        setOpenDobras(!openDobras);
    };

    function montaDadosMedidas() {
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
    }

    function montaDadosBioImpedancia() {
        const rowsBioImpedancia = dadosListaBioImpedancia.map((item, index) => {
            const row = {
                id: index + 1,
                description: item.nome,
            };

            item.valores.forEach((valor, i) => {
                row[`valor${i + 1}`] = valor;
            });

            return row;
        });

        setRowsBioImpedancia(rowsBioImpedancia);
    }

    function montaDadosDobras() {
        const rowsDobras = dadosListaDobras.map((item, index) => {
            const row = {
                id: index + 1,
                description: item.nome,
            };

            item.valores.forEach((valor, i) => {
                row[`valor${i + 1}`] = valor;
            });

            return row;
        });

        setRowsDobras(rowsDobras);
    }

    useEffect(() => {
        montaDadosMedidas();
        montaDadosBioImpedancia();
        montaDadosDobras();

    }, [panelHeight]);

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

    const columnsBioImpedancia: GridColumns = [
        { field: 'description', headerName: 'Nome', width: 180 },
        ...dadosListaBioImpedancia.length > 0
            ? dadosListaBioImpedancia[0].valores.map((valor, index) => ({
                field: `valor${index + 1}`,
                headerName: `Valor ${index + 1}`,
                width: 180,
                editable: true,
            }))
            : [],
    ];

    const columnsDobras: GridColumns = [
        { field: 'description', headerName: 'Nome', width: 180 },
        ...dadosListaDobras.length > 0
            ? dadosListaDobras[0].valores.map((valor, index) => ({
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
            
        </>
    );
};

export default Historico;