import styled from "styled-components";
import { Checkbox } from '@buffetjs/core';



export const WrapperButton = styled.div`
  margin: 1.3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  `
export const Button = styled.button`
  margin: 0.6rem auto 2.1rem;
  width: max-content;
  background: rgba(0,0,0,0.25);
  padding: 0.6rem 6rem;
  border-radius: 1rem;
  cursor: pointer;
  color: white;

  transition: all .4s ease-in-out;

  &:hover{
    filter: brightness(.8);
    border: 0.1rem solid white;

  }
`
export const CheckboxText = styled(Checkbox)`
display: flex;
align-items: center;
justify-content: center;
input{
  margin-top: -0.3rem;
}
label{
  margin-bottom: -1rem;
  color: white;
}

`
