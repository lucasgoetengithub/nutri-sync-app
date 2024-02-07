import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import 'react-tabs/style/react-tabs.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import styled, { createGlobalStyle } from 'styled-components';


const PatientData = () => {

    const [value, setValue] = useState('1');
    const [panelHeight, setPanelHeight] = useState(800); 


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);

        if (newValue === '1') {
            setPanelHeight(800); 
        } else if (newValue === '2') {
            setPanelHeight(1000); 
        } else if (newValue === '3') {
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
                                <S.StyledTab label="Item One" value="1" style={{ color: value === '1' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Item Two" value="2" style={{ color: value === '2' ? '#B66DFF' : '' }}/>
                                <S.StyledTab label="Item Three" value="3" style={{ color: value === '3' ? '#B66DFF' : '' }}/>
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            Item One
                        </TabPanel>
                        
                        <TabPanel value="2">
                            Item Two
                        </TabPanel>
                        
                        <TabPanel value="3">
                            Item Three
                        </TabPanel>
                    </TabContext>
                </Box>
            </S.Painel1>     
        </>
    )
  
  }
  
  export default PatientData;