import React from 'react';
import LogoStrapi from '../../../../assets/images/logoWebDev.png';
import * as S from "./Img"
const Logo = () =>
 <S.WrapperLogo>
  <S.Img src={LogoStrapi} alt="strapi-logo" />
</S.WrapperLogo> ;

export default Logo;
