import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

const mainColor = 'indianred'

const CtaStyledLink = styled(Link)`
  color: ${props => props.color ||  'goldenrod'}
`;

class CtaLink extends React.Component {
  render() {
    return (
      <CtaStyledLink color={mainColor} className="btns" to={this.props.to}>
        {this.props.children}
      </CtaStyledLink>
    );
  }
}

CtaLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CtaLink;
