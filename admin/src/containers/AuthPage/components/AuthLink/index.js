import React from 'react';
import { Text } from '@buffetjs/core';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';
import Section from '../Section';
import Link from './Link';
import * as S from './Wrapper';

const AuthLink = ({ children, label, to }) => {


  return (
      <S.Wrapper>
          <Link to={to}>
            {children || <S.Text  >{label}</S.Text>}
          </Link>
      </S.Wrapper>
  );
};

AuthLink.defaultProps = {
  children: null,
};

AuthLink.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AuthLink;
