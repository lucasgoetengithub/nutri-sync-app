import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link} from "react-router-dom";
import logoImage from '../../assets/logo.jpg';


const Home = () => {
    const [isPacientesMenuOpen, setPacientesMenuOpen] = useState(false);
    const [isAlimentosMenuOpen, setAlimentosMenuOpen] = useState(false);

    const togglePacientesMenu = () => {
        setPacientesMenuOpen(!isPacientesMenuOpen);
    };
    const toggleAlimentosMenu = () => {
        setAlimentosMenuOpen(!isAlimentosMenuOpen);
    };

      
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

                    <S.SidebarItem onClick={togglePacientesMenu}>
                        <Link>Pacientes</Link>
                        {isPacientesMenuOpen && (
                            <S.CustomList>
                                <S.CustomListItem>
                                    <Link to="/novo-paciente">Novo Paciente</Link>
                                </S.CustomListItem>
                                
                                <S.CustomListItem>
                                    <Link to="/consultar-pacientes">Consultar Pacientes</Link>
                                </S.CustomListItem>
                            </S.CustomList>
                        )}
                    </S.SidebarItem>

                    <S.SidebarItem onClick={toggleAlimentosMenu}>
                        <Link>Alimentos</Link>
                        {isAlimentosMenuOpen && (
                            <S.CustomList>
                                <S.CustomListItem>
                                    <Link to="/novo-alimento">Novo Alimento</Link>
                                </S.CustomListItem>
                                
                                <S.CustomListItem>
                                    <Link to="/consultar-alimentos">Consultar Alimentos</Link>
                                </S.CustomListItem>
                            </S.CustomList>
                        )}
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