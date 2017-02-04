import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class Header extends React.Component {
  render () {
    return (
      <Jumbotron>
        <h1>{this.props.title}</h1>
        <h3>Version: {this.props.version}</h3>
      </Jumbotron>
    )
  }
}

Header.defaultProps = {
  title: 'Flashcard Client with react',
  version: 1
};

export default Header;