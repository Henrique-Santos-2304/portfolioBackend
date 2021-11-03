import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  background: rgba(0,0,0,0.91);
  p,
  span {
    font-family: Lato;
  }

  .adminPageRightWrapper {
    width: ${props => `calc(100% - ${props.theme.main.sizes.leftMenu.width})`};
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      sizes: {
        leftMenu: {},
      },
    },
  },
};

export default Wrapper;
