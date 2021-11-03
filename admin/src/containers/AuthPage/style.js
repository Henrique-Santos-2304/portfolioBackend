import styled, {keyframes} from 'styled-components';
const animateGradientFull = keyframes`
  from {
    background-position: 0 0;
  } to{
    background-position: 100% 100%;
  }
`;
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
        to right,
        #75dcc6,
        #486afe 48%
    );
  background-size: 200% 200%;
  animation: ${animateGradientFull} 4s linear infinite;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;



`
