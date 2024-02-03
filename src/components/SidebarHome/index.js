import React, { useState, useEffect, Component } from 'react';
import * as S from './styles';
import { Link} from "react-router-dom";
import logoImage from '../../assets/logo.jpg';


const SidebarHome = () => {
    const [isPacientesMenuOpen, setPacientesMenuOpen] = useState(false);
    const [isAlimentosMenuOpen, setAlimentosMenuOpen] = useState(false);
    const [isAgendaMenuOpen, setAgendaMenuOpen] = useState(false);
    const [isMensagensMenuOpen, setMensagensMenuOpen] = useState(false);

    const togglePacientesMenu = () => {
        setPacientesMenuOpen(!isPacientesMenuOpen);
    };

    const toggleAlimentosMenu = () => {
        setAlimentosMenuOpen(!isAlimentosMenuOpen);
    };

    const toggleAgendaMenu = () => {
        setAgendaMenuOpen(!isAgendaMenuOpen);
    };

    const toggleMensagensMenu = () => {
        setMensagensMenuOpen(!isMensagensMenuOpen);
    };

      
    useEffect(() =>{
      
    });


    return (
        <>
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

                    <S.SidebarItem onClick={toggleAgendaMenu}>
                        <Link>Agendamentos</Link>
                        {isAgendaMenuOpen && (
                            <S.CustomList>
                                <S.CustomListItem>
                                    <Link to="/novo-agendamento">Novo Agendamento</Link>
                                </S.CustomListItem>
                                
                                <S.CustomListItem>
                                    <Link to="/consultar-agendamentos">Consultar Agendamentos</Link>
                                </S.CustomListItem>
                            </S.CustomList>
                        )}
                    </S.SidebarItem>

                    <S.SidebarItem onClick={toggleMensagensMenu}>
                        <Link>Mensagens</Link>
                        {isMensagensMenuOpen && (
                            <S.CustomList>
                                <S.CustomListItem>
                                    <Link to="/enviar-mensagem">Enviar mensagem</Link>
                                </S.CustomListItem>
                                
                                <S.CustomListItem>
                                    <Link to="/consultar-mensagens">Consultar mensagens</Link>
                                </S.CustomListItem>
                            </S.CustomList>
                        )}
                    </S.SidebarItem>

                </S.SidebarList>
            </S.Sidebar>
            
        </>
    )
  
  }
  
  export default SidebarHome;