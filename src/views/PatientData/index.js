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
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import Autocomplete from '@mui/material/Autocomplete';
import api from '../../service/api';
import { useHistory } from 'react-router-dom';



const PatientData = () => {

    const [value, setValue] = useState('1');
    const [panelHeight, setPanelHeight] = useState(800); 
    const [quantidadeRefeicoes, setQuantidadeRefeicoes] = useState(0);
    const [quantidadeCampos, setQuantidadeCampos] = useState(0);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({});
    const [mostrarCampos, setMostrarCampos] = useState(false);

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 }];

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
            setPanelHeight(400); 
        }
    };

    const handleRegister = async (event) => {
        setMostrarCampos(false);
        if (quantidadeRefeicoes && quantidadeRefeicoes >= 1) {
            setMostrarCampos(true);
            setQuantidadeCampos((prevQuantidadeCampos) => {
                const newQuantidadeCampos = parseInt(quantidadeRefeicoes);
                setPanelHeight((prevPanelHeight) => {
                    const newPanelHeight = 400 + newQuantidadeCampos * 465;
                    return newPanelHeight;
                });
                return newQuantidadeCampos;
            });
        }
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setError("");
    }

    
    useEffect(() => {
        if (value === '1') {
            setPanelHeight(1200);
        }
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
                            <S.FieldTitle>Dieta</S.FieldTitle>

                            <Stack width='600px' spacing={5} direction="column">
                                
                                    <S.Field>
                                        <S.Label><h5>Quantidade de refeiçoes</h5></S.Label>
                                        <Stack width='600px' spacing={5} direction="row">
                                            <TextField
                                                required
                                                id='outlined-required'
                                                label='Quantidade de refeiçoes'
                                                onChange={(e) => [setQuantidadeRefeicoes(e.target.value), setError("")]}
                                                sx={{ width: '500px' }}
                                            />
                                            <S.Field>
                                                <Button variant="primary" type="submit" onClick={handleRegister}>Montar dieta</Button>
                                            </S.Field>
                                        </Stack>
                                    </S.Field>

                                    
                                
                                
                                {mostrarCampos &&  (
                                    [...Array(quantidadeCampos)].map((_, index) => (
                                        
                                    <>
                                        <Stack width='80%' spacing={1} direction="column">
                                            <S.Field key={index}>
                                                
                                                <S.Label><h5>Refeição </h5></S.Label>
                                                <TextField
                                                    required
                                                    id='outlined-required'
                                                    label='Café da manha / almoço ...'
                                                    onChange={(e) => handleInputChange(`campo${index + 1}`, e.target.value)}
                                                    sx={{ width: '500px' }}
                                                />

                                                
                                            </S.Field>

                                            <Stack width='600px' spacing={1} direction="collumn">
                                                <S.Field key={index}>
                                                    
                                                    <S.Label><h5>Porção (g) </h5></S.Label>
                                                    <TextField
                                                        required
                                                        id='outlined-required'
                                                        label='Porção (g) '
                                                        onChange={(e) => handleInputChange(`campo${index + 1}`, e.target.value)}
                                                        sx={{ width: '100px'}}
                                                    />

                                                    
                                                </S.Field>

                                                <S.FieldSelect key={index}>
                                                    <S.Label><h5>Alimento </h5></S.Label>
                                                    <Stack width='490px' spacing={1} direction="row">
                                                        <Autocomplete
                                                        disablePortal
                                                        id="combo-box-demo"
                                                        options={top100Films}
                                                        sx={{ width: '650px' }}
                                                        renderInput={(params) => <TextField {...params} label="Alimento" />}
                                                        />
                                                        <S.Field>
                                                            <Button variant="primary" type="submit" onClick={handleRegister}>Adicionar</Button>
                                                        </S.Field>
                                                    </Stack>
                                                </S.FieldSelect>
                                            </Stack>
                                            

                                            <S.Field>
                                                <S.Label><h5>Refeição</h5></S.Label>
                                                <TextField
                                                    multiline
                                                    rows={5} 
                                                    id="outlined-multiline"
                                                    label="Refeição"
                                                    //onChange={(e) => [setObservation(e.target.value), setError("")]}
                                                    sx={{ width: '800px' }}
                                                />
                                            </S.Field>
                                            
                                        </Stack>
                                        

                                    </>
                                        

                                        
                                    ))
                                )}

                                <S.Field>
                                    <Button variant="primary" type="submit" onClick={handleRegister}>Salvar</Button>
                                </S.Field>
                            </Stack>
                        </TabPanel>

                        <TabPanel value="6">
                            Item Three
                        </TabPanel>
                    </TabContext>
                </Box>
            </S.Painel1>     
        </>
    )
  
  }
  
  export default PatientData;