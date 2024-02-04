import styled, { createGlobalStyle } from 'styled-components';
import { Button } from 'react-bootstrap';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2EDF3;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu',sans-serif;
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 60%;
  margin: 90px auto;
  margin-left: 20%;
  position: relative;
  height: 500px;
  display: flex;
  justify-content: flex-start;
`;

export const Field = styled.div`
margin: 90px 20px 90px 40px; /* Ajuste conforme necessário */
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
`;

export const FieldTitle = styled.h2`
  margin-bottom: 20px; /* Adicionando margem abaixo do título */
`;

export const FieldButton = styled(Button)`
  margin-top: 20px; /* Adicionando margem acima do botão */
`;