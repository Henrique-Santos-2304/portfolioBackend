/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo } from 'react';
import Dev from "../../assets/images/henriqueDev.png"
import * as S from "./style";

const HomePage = ({ history: { push } }) => {

  return (
    <>
      <S.Container >
        <S.Wrapper>

        <S.Imagedev src={Dev}/>
        <S.ContentText>
          <S.Text>Desenvolvedor de Sites e Aplicativos</S.Text>
        </S.ContentText>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default memo(HomePage);
