import styled, { createGlobalStyle } from 'styled-components';
import Tab from '@mui/material/Tab';

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
  width: 60%;
  margin: 90px auto;
  margin-left: 30%;
  position: relative;
  height: 800px;
  display: flex;
  justify-content: center;
`;


export const StyledTab = styled(Tab)`
&.Mui-selected {
    border-bottom: 2px solid #B66DFF;
}
`;
