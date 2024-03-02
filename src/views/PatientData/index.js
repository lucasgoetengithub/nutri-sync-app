import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import 'react-tabs/style/react-tabs.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import PersonalData from '../../components/PersonalData';
import Medidas from '../../components/Medidas';
import Bioimpedancia from '../../components/Bioimpedancia';
import Dobras from '../../components/Dobras';
import Dieta from '../../components/Dieta';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import api from '../../service/api';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { DataGrid, GridColumns, GridEventListener, GridCellParams } from '@mui/x-data-grid';



const PatientData = () => {

    const [value, setValue] = useState('1');
    const [panelHeight, setPanelHeight] = useState(800); 
    const [quantidadeRefeicoes, setQuantidadeRefeicoes] = useState(0);
    const [quantidadeCampos, setQuantidadeCampos] = useState(0);
    
    const [mostrarCampos, setMostrarCampos] = useState(false);

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
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight + 550;
                return newPanelHeight;
            });
        } else {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight - 550;
                return newPanelHeight;
            });
        }
        setOpenMedida(!openMedida);
        
    };

    const handleDisclosureBioImpedanciaClick = () => {
        if (!openBioImpedancia) {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight + 700;
                return newPanelHeight;
            });
        } else {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight - 700;
                return newPanelHeight;
            });
        }
        setOpenBioImpedancia(!openBioImpedancia);
    };

    const handleDisclosureDobrasClick = () => {
        if (!openDobras) {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight + 550;
                return newPanelHeight;
            });
        } else {
            setPanelHeight((prevPanelHeight) => {
                let newPanelHeight = panelHeight;
                newPanelHeight = newPanelHeight - 550;
                return newPanelHeight;
            });
        }
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

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 }];

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setOpenBioImpedancia(false);
        setOpenDobras(false);
        setOpenMedida(false);
        setValue(newValue);

        if (newValue === '1') {
            setPanelHeight(1200); 
        } else if (newValue === '2') {
            setPanelHeight(800); 
        } else if (newValue === '3') {
            setPanelHeight(2150); 
        } else if (newValue === '4') {
            setPanelHeight(1600); 
        } else if (newValue === '5') {
            setPanelHeight(2700); 
        } else if (newValue === '6') {
            setPanelHeight(350); 
        }
    };

    const handleRegister = async (event) => {
        setMostrarCampos(false);
        if (quantidadeRefeicoes && quantidadeRefeicoes >= 1) {
            setMostrarCampos(true);
            setQuantidadeCampos((prevQuantidadeCampos) => {
                const newQuantidadeCampos = parseInt(quantidadeRefeicoes);
                setPanelHeight((prevPanelHeight) => {
                    let newPanelHeight = 0;
                    newPanelHeight = 400 + newQuantidadeCampos * 465;
                    if (newQuantidadeCampos && newQuantidadeCampos > 0) {
                        newPanelHeight = 400 + (newQuantidadeCampos * 465) + 2000;
                    } 
                    
                    return newPanelHeight;
                });
                return newQuantidadeCampos;
            });
        }
    };

    

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

    
    useEffect(() => {
        if (value === '1') {
            setPanelHeight(1200);
        } 

        montaDadosMedidas();
        montaDadosBioImpedancia();
        montaDadosDobras();
    }, [panelHeight]);


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>       
            <S.Painel1 id="panel1" style={{ height: panelHeight }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <S.StyledTab label="Dados Pessoais" value="1" style={{ color: value === '1' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Medidas" value="2" style={{ color: value === '2' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Bioimpedância" value="3" style={{ color: value === '3' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Dobras cutaneas" value="4" style={{ color: value === '4' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Dieta" value="5" style={{ color: value === '5' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Historico" value="6" style={{ color: value === '6' ? '#B66DFF' : '' }}/>
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <PersonalData></PersonalData>
                        </TabPanel>
                        
                        <TabPanel value="2">
                            <Medidas></Medidas>
                        </TabPanel>
                        
                        <TabPanel value="3">
                            <Bioimpedancia></Bioimpedancia>
                        </TabPanel>

                        <TabPanel value="4">
                            <Dobras></Dobras>
                        </TabPanel> 

                        <TabPanel value="5">
                            <Dieta></Dieta>
                        </TabPanel>

                        <TabPanel value="6">
                            <S.FieldTitle>Historico</S.FieldTitle>

                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="h5" onClick={handleDisclosureMedidaClick} style={{ cursor: 'pointer' }} style={{
                                            cursor: 'pointer',
                                            backgroundColor:  '#FFE6F8',
                                        }}>
                                        Medidas
                                    </Typography>
                                </Box>
                                <Collapse in={openMedida}>
                                    <DataGrid editMode="cell" hideFooter='true' rows={rows} columns={columns} onCellEditCommit={handleCellEditCommit}  experimentalFeatures={{ newEditingApi: true } } onRowClick={handleRowClick} />
                                </Collapse>

                                <Box>
                                    <Typography variant="h5" onClick={handleDisclosureBioImpedanciaClick} style={{ cursor: 'pointer' }} style={{
                                            cursor: 'pointer',
                                            backgroundColor:  '#FFE6F8',
                                        }}>
                                        Bioimpedancia
                                    </Typography>
                                </Box>
                                <Collapse in={openBioImpedancia}>
                                    <DataGrid editMode="cell" hideFooter='true' rows={rowsBioImpedancia} columns={columnsBioImpedancia} onCellEditCommit={handleCellEditCommit}  experimentalFeatures={{ newEditingApi: true } } onRowClick={handleRowClick} />
                                </Collapse>

                                <Box>
                                    <Typography variant="h5" onClick={handleDisclosureDobrasClick} style={{ cursor: 'pointer' }} style={{
                                            cursor: 'pointer',
                                            backgroundColor:  '#FFE6F8',
                                        }}>
                                        Dobras
                                    </Typography>
                                </Box>
                                <Collapse in={openDobras}>
                                    <DataGrid editMode="cell" hideFooter='true' rows={rowsDobras} columns={columnsDobras} onCellEditCommit={handleCellEditCommit}  experimentalFeatures={{ newEditingApi: true } } onRowClick={handleRowClick} />
                                </Collapse>
                            </Stack>
                        </TabPanel>
                    </TabContext>
                </Box>
            </S.Painel1>     
        </>
    )
  
  }
  
  export default PatientData;