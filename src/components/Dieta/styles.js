import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2EDF3;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu',sans-serif;
  }
`;

export const Field = styled.div`
  margin: 90px 20px 90px 40px; /* Ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  button {
    background: linear-gradient(90deg,#da8cff,#9a55ff);
    height: 50px;
    color: white;
    padding: 11px 15px;
    border-radius: .1875rem;
    border:none;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: background-color 0.3s ease;
    font-size: .875rem;
    font-weight: 700;
    font-family: Ubuntu,sans-serif;
    &:hover {
      background: linear-gradient(90deg, #c987ff, #8760ff);
    };
  };

  TextField {

  }
`;

export const Label = styled.h5`
  margin: 0px 00px 00px 00px;
  font-family: 'Ubuntu',sans-serif;
  font-weight: 400;
  font-size: .875rem;
  text-shadow: none;
  box-sizing: border-box;
  color: #343a40;
  line-height: 1;
`;

export const FieldTitle = styled.h2`
  margin-bottom: 20px; 
  font-size: 1.125rem;
  font-weight: 500;
  font-family: Ubuntu,sans-serif;
}
`;

export const FieldSelect = styled.div`
  margin: 90px 20px 90px 40px; /* Ajuste conforme necessário */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
`;

export const CardsArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    
`;