import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link} from "react-router-dom";
import logoImage from '../../assets/logo.jpg';
import SidebarHome from '../../components/SidebarHome';


const Home = () => {
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>            
        </>
    )
  
  }
  
  export default Home;