import styled, { createGlobalStyle } from 'styled-components';

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
  padding: 300px; 
  border-radius: 8px;
  width: 200px;
  margin: 175px auto;
  position: relative;
`;

export const Content = styled.div`
    position: absolute;
    top: 80px;
    right: 580px;
    h3 {
        position: relative;
        top: -10px;
        background: #FFF;
        font-family: 'Ubuntu',sans-serif;
        font-weight: normal;
        font-size: .9375rem;
    };
    h2 {
        font-family: 'Ubuntu',sans-serif;

        font-size: 1.13rem;
    }
    form {
        margin-top: 20px;
    }
    .formLogin{
        width: 100%;
    }
    
`
