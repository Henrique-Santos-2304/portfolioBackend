import styled from 'styled-components';
import { Inputs } from '@buffetjs/custom';


export const Wrapper = styled.div`
width: max-content;
height: max-content;
  margin: 0 auto ;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
`;
export const Label = styled.label`
  color: white;
  font-size: 1.6rem;
  margin: 0;
`;

export const Input = styled(Inputs)`
  margin-top: -2.5rem;
  margin-bottom: 1.7rem;
  border-radius: 2.1rem;
  width: 22rem;
`;

