import React from 'react';
import { useIntl } from 'react-intl';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';
import * as S from "./style";

import AuthLink from '../AuthLink';
import Box from '../Box';
import Input from '../Input';
import Logo from '../Logo';
import Section from '../Section';

const Login = ({ children, formErrors, modifiedData, onChange, onSubmit, requestError }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Section >
        <Logo />
        <BaselineAlignment top size="25px" >
          <Box errorMessage={get(requestError, 'errorMessage', null)}>
            <form onSubmit={onSubmit}>
              <Input
                autoFocus
                error={formErrors.email}
                label="Email"
                name="email"
                onChange={onChange}
                placeholder="Auth.form.email.placeholder"
                type="email"
                validations={{ required: true }}
                value={modifiedData.email}
              />
              <Input
                error={formErrors.password}
                label="Password"
                name="password"
                onChange={onChange}
                type="password"
                validations={{ required: true }}
                value={modifiedData.password}
              />
              <S.CheckboxText
                type="checkbox"
                message={formatMessage({ id: 'Auth.form.rememberMe.label' })}
                name="rememberMe"
                onChange={onChange}
                value={modifiedData.rememberMe}
              />
              <S.WrapperButton>
                <S.Button type="submit" >
                  Login
                </S.Button>
              </S.WrapperButton>
            </form>
            {children}
          </Box>
        </BaselineAlignment>
      <AuthLink label="Esqueceu a senha?" to="/auth/forgot-password" />
      </Section>
    </>
  );
};

Login.defaultProps = {
  children: null,
  onSubmit: e => e.preventDefault(),
  requestError: null,
};

Login.propTypes = {
  children: PropTypes.node,
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  requestError: PropTypes.object,
};

export default Login;
