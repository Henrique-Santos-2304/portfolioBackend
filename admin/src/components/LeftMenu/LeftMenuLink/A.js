import styled from 'styled-components';

const A = styled.a`;
  display: flex;
  position: relative;
  padding: 1rem 0 0.2rem 1.6rem;
  min-height: 3.6rem;
  line-height: 1.8rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: #f8f8f8;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background: #f8f8f8;
    text-decoration: none;
    color: #1e1e1e;
    svg{
      color: #1e1e1e
    }
  }

  &:focus {
    color:  #f8f8f8;
    text-decoration: none;
  }

`;

export default A;
