import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link} from "react-router-dom";
import logoImage from '../../assets/logo.jpg';


const Home = () => {
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <S.Sidebar>
                <S.Logo src={logoImage}></S.Logo>
                <S.SidebarList>

                    <S.SidebarItem>
                        <Link to="/home">Home</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/pacientes">Pacientes</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/alimentos">Alimentos</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/agenda">Agenda</Link>
                    </S.SidebarItem>

                    <S.SidebarItem>
                        <Link to="/mensagens">Mensagens</Link>
                    </S.SidebarItem>

                </S.SidebarList>
            </S.Sidebar>
            
        </>
    )
  
  }
  
  export default Home;