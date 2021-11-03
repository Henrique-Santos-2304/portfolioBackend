import React from 'react';
import { useIntl } from 'react-intl';
import { Padded } from '@buffetjs/core';
import PropTypes from 'prop-types';
import { BaselineAlignment } from 'strapi-helper-plugin';
import AuthLink from '../AuthLink';
import Input from '../Input';
import Logo from '../Logo';
import Section from '../Section';
import Box from '../Box';
import * as S from "./style"

const ForgotPassword = ({ formErrors, modifiedData, onChange, onSubmit }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Section >
        <Logo />
        {/* FIXME IN BUFFET.JS */}
        <BaselineAlignment top size="20px">
          <Padded top size="xs">
            <Box>
              <form onSubmit={onSubmit}>
                <Input
                  autoFocus
                  error={formErrors.email}
                  label="email"
                  name="email"
                  onChange={onChange}
                  placeholder="Auth.form.email.placeholder"
                  type="email"
                  validations={{ required: true }}
                  value={modifiedData.email}
                />
                <BaselineAlignment top size="3px" />


              </form>
          <S.Button type="submit" >
            {formatMessage({ id: 'Auth.form.button.forgot-password' })}
          </S.Button>
            </Box>
          </Padded>
        </BaselineAlignment>
        <AuthLink label="Voltar para Login" to="/auth/login" />
      </Section>
    </>
  );
};

ForgotPassword.defaultProps = {
  onSubmit: e => e.preventDefault(),
};

ForgotPassword.propTypes = {
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

export default ForgotPassword;
