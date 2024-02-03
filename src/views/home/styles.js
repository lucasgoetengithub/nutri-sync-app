import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2EDF3;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu',sans-serif;
  }
`;

export const Sidebar = styled.div`
  background-color: #FFFFFF;
  color: white;
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  a{
    font-family: 'Ubuntu',sans-serif;
    font-weight: normal;
    font-size: .9375rem;
    color: #576371
  }
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  margin-bottom: 40px; /* Espaçamento vertical entre os itens */
  color: ${(props) => (props.isMenuOpen ? '#suaCorAqui' : '#576371')};
  
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 10px;
`

export const CustomList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0 0 0;
`;

export const CustomListItem = styled.li`
  margin-bottom: 30px;
  position: relative;
  left: 35px;
  &:before {
    content: '➔';  
    color: #576371;
    font-size: 14px;
    margin-right: 10px;  
    position: absolute;
    left: -25px;
  }
`;