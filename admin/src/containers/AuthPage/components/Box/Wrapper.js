import styled from 'styled-components';

const Wrapper = styled.div`
  margin: -4rem auto 1rem;
  width: 37.5rem;
  padding: 1.4rem 0;
  border-radius: 1rem;
  border-top: 2px solid ${({ theme }) => theme.main.colors.mediumBlue};
  background: rgba(0,0,0, 0.38);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Wrapper;
