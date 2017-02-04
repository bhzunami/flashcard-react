import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
  render () {
    return ( <Row>
      <Col xs={4}>&copy; {this.props.copyright}</Col>
      <Col xs={4} xsOffset={4} className="text-right">{this.props.qs}</Col>
    </Row>
    )
  }
 
}

Footer.defaultProps = {
  copyright: 'The FHNW Team',
};

export default Footer;