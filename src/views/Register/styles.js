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
  margin: 80px auto;
  position: relative;
  height: 190px;
`;

export const Panel1 = styled.div`
  position: absolute;
  top: 50px;
  right: 517px;
  width : 30%;
`

export const Panel2 = styled.div`
    position: absolute;
    top: 130px;
    right: 460px;
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
    
`

export const Panel3 = styled.div`
    position: absolute;
    top: 640px;
    right: 650px;
    button {
        background-color: #B66DFF;
        height: 50px;
        color: white;
        padding: 11px 15px;
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
`

export const Panel4 = styled.div`
position: absolute;
top: 710px;
right: 505px;
`
