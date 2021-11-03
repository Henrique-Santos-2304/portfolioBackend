import styled from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  align-self: center;
  width: 70%;
  text-transform: ${({ textTransform }) => textTransform};
`;

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  textTransform: 'none',
};

export default Button;
