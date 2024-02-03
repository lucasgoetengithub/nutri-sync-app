import styled, { createGlobalStyle } from 'styled-components';
import TextField from '@mui/material/TextField';

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
  margin-bottom: 30px; /* Espaçamento vertical entre os itens */
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 10px;
`

export const Painel1 = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 70%;
  margin: 50px auto;
  margin-left: 450px;
  position: relative;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Painel2 = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 70%;
  margin: 150px auto;
  margin-left: 450px;
  position: relative;
  height: 200px;
`;

export const DataGridContainer = styled.div`
  width: 100%;
  margin: 50px;
  border-collapse: collapse;
  
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: transparent;
  border: none;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
      background-color: ${(props) => (props.even ? '#ffffff' : '#f2f2f2')};
    }
`;

export const TableCell = styled.td`
  border: none;
  padding: 12px;
  
`;

export const StyledTextField = styled(TextField)`
  width: 500px;  // Ajuste o valor conforme necessário
  margin-right: 20px;  // Ajuste o valor conforme necessário
`;