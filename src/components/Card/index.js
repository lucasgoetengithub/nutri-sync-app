import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../service/api.js';
import Stack from '@mui/material/Stack';


function Card() {
  const [ganhos, setGanhos] = useState();
  const [investimentos, setInvestimentos] = useState();
  const [despesas, setDespesas] = useState();
  const [referenceLabel, setReferenceLabel] = useState();

  useEffect(() =>{


  }, [])

    return (
        <S.Container>
          <S.TopCard>
            <h3>teste</h3>
          </S.TopCard>

          <S.BottomCard>

            <S.GanhoLabel>
              <Stack spacing={2} direction="column">
                
              </Stack>  
            </S.GanhoLabel>

            <S.InvestimentoLabel>
              <Stack spacing={2} direction="column">
                
                
              </Stack>
            </S.InvestimentoLabel>

            <S.DespesasLabel>
              <Stack spacing={2} direction="column">

              </Stack>
            </S.DespesasLabel>
          </S.BottomCard>
        </S.Container>
    )
}

export default Card;