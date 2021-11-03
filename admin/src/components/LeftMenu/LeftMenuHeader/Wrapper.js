import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../../assets/images/logoWebDev.png';


export const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2FA;
  border-right: 0.1rem solid #F2F2FA;
  height: ${props => props.theme.main.sizes.leftMenu.height};
  z-index: 100;

  .leftMenuHeaderLink {
    display:flex;
    align-items: center;
    justify-content: center;
    &:hover {
      text-decoration: none;
    }
  }
`;
export const Image = styled.img`
  width: 90%;
  height: 40px;

`

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};


