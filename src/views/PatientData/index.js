import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const PatientData = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [value, setValue] = React.useState(0);

    const handleTabChange = (index) => {
      setTabIndex(index);
    };

    
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>       
            <S.Painel1>
                <Tabs selectedIndex={tabIndex} onSelect={handleTabChange} width={'100%'}>
                    <TabList>
                        <Tab>Dados Pessoais</Tab>
                        <Tab>Medidas</Tab>
                        <Tab>Bioimpedancia</Tab>
                    </TabList>

                    <TabPanel>
                        <h1>Teste 1</h1>
                    </TabPanel>
                    
                    <TabPanel>
                        <h1>Teste 2</h1>
                    </TabPanel>

                    <TabPanel>
                        <h1>Teste 3</h1>
                    </TabPanel>
                </Tabs>
            </S.Painel1>     
        </>
    )
  
  }
  
  export default PatientData;