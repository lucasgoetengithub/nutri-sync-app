import React, { useEffect, useState } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const PatientData = () => {

    const [tabIndex, setTabIndex] = useState(0);
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>       
            <S.Painel1>
                
            </S.Painel1>     
        </>
    )
  
  }
  
  export default PatientData;