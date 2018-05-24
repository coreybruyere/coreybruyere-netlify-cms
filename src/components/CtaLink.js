import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import theme from '../theme-settings';

const CtaLinkStyled = styled(Link)`
  color: ${theme.colors.primary.dark}

  &:hover {
    color: ${theme.colors.primary.base};
  }
`;

class CtaLink extends React.Component {
  render() {
    return (
      <CtaLinkStyled to={this.props.to}>
        {this.props.children}
      </CtaLinkStyled>
    );
  }
}

CtaLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CtaLink;
