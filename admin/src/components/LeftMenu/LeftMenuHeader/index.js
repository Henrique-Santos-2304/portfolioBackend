import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/images/logoWebDev.png";

import * as S from './Wrapper';

const LeftMenuHeader = () => (
  <S.Wrapper>
    <Link to="/" className="leftMenuHeaderLink">
      <S.Image src={Logo} />
    </Link>
  </S.Wrapper>
);

export default LeftMenuHeader;
