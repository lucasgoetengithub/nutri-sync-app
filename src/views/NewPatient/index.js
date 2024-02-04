import React, { useEffect } from 'react';
import * as S from './styles';
import SidebarHome from '../../components/SidebarHome';
import { Stack } from '@mui/material';
import { Button } from 'react-bootstrap';


const NewPatient = () => {
     
    useEffect(() =>{
      
    });


    return (
        <>
            <S.GlobalStyle />
            <SidebarHome></SidebarHome>            
            <S.Container>
                <Stack width='600px' spacing={3.8} direction="column" margin='20px 10px 10px 40px'>
                    <S.Field>
                        <S.FieldTitle>Cadastrando novo paciente</S.FieldTitle>
                        <S.FieldButton variant="primary" type="submit">
                            Buscar
                        </S.FieldButton>
                    </S.Field>
                </Stack>
                
            </S.Container>
        </>
    )
  
}
  
export default NewPatient;