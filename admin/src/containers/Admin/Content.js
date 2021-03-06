import styled from 'styled-components';
import PropTypes from 'prop-types';

const Content = styled.div`
  min-height: calc(100vh - ${props => props.theme.main.sizes.header.height});
  width: calc(100vw - ${props => props.theme.main.sizes.leftMenu.width});
  margin-top: ${props => props.theme.main.sizes.header.height};
  margin-left: ${props => props.theme.main.sizes.leftMenu.width};
  background: #5d3efd;
  border-radius: 5rem 5rem 0 0;

  `

Content.defaultProps = {
  theme: {
    main: {
      colors: {
        content: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Content.propTypes = {
  theme: PropTypes.object,
};

export default Content;
