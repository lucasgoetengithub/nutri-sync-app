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

export const Painel1 = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 70%;
  margin: 50px auto;
  margin-left: 450px;
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 150px;
    background-color: #B66DFF;
    height: 50px;
    color: white;
    padding: 8px 8px;
    border-radius: .1875rem;
    border:none;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    font-size: .875rem;
    font-weight: 700;
    font-family: Ubuntu,sans-serif;
    &:hover {
      background-color: #A347FF;
    }
  }
  h2 {
    font-family: 'Ubuntu',sans-serif;

    font-size: 1.0rem;
  }
  
`;

export const Painel2 = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 70%;
  margin-left: 450px;
  position: relative;
  height: 500px;
  font-family: Ubuntu,sans-serif;
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
  width: 500px;
  margin-right: 20px;
`;