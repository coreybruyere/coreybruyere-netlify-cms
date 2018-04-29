import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <header className="hero">
        <h1>{this.props.heading}</h1>
        {this.props.children}
      </header>
    );
  }
}

export default Hero;
