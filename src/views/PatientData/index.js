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



const PatientData = () => {

    const [value, setValue] = useState('1');
    const [panelHeight, setPanelHeight] = useState(800); 


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        if (newValue === '1') {
            setPanelHeight(1200); 
        } else if (newValue === '2') {
            setPanelHeight(800); 
        } else if (newValue === '3') {
            setPanelHeight(2150); 
        } else if (newValue === '4') {
            setPanelHeight(1200); 
        } else if (newValue === '5') {
            setPanelHeight(1200); 
        }
    };

    
    
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>       
            <S.Painel1 style={{ height: panelHeight }}>
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
                            Item Three
                        </TabPanel>

                        <TabPanel value="5">
                            Item Three
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