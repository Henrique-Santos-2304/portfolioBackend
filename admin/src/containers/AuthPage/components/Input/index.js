import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import * as S from "./input"

const Input = ({ error, label, placeholder, ...rest }) => {
  const { formatMessage } = useIntl();
  const labelMessage = formatMessage({ id: label, style: {color: "white"} });
  const placeholderMessage = placeholder ? formatMessage({ id: placeholder }) : '';
  let errorMessage = error;

  if (error) {
    errorMessage = formatMessage(error);
  }

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} error={errorMessage}  placeholder={placeholderMessage} color="white" marg/>
    </S.Wrapper>
  );
};

Input.defaultProps = {
  error: null,
  placeholder: null,
};

Input.propTypes = {
  error: PropTypes.object,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
