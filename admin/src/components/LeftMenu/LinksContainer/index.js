import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinksContainer = styled.div`
  padding-top: 3rem;
  padding-left: 1rem;
  position: absolute;
  top: ${props => props.theme.main.sizes.leftMenu.height};
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  background: #5d3efd;
  border-right: 0.2rem solid  #f8f8f8;
  border-radius: 5rem 5rem 0 0 ;
  height: calc(100vh - (${props => props.theme.main.sizes.leftMenu.height}));
  box-sizing: border-box;
`;

LinksContainer.defaultProps = {
  theme: {
    main: {
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

LinksContainer.propTypes = {
  theme: PropTypes.object,
};

export default LinksContainer;
