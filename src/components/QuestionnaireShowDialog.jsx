import React from 'react';
import {Glyphicon, Modal, FormGroup, Form, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';


class QuestionnaireShowDialog extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

    render() {
        return (
            <div>
                <Button bsStyle="link" onClick={this.open}>
                    <Glyphicon glyph="zoom-in" />
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Show Questionnaire</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formTitle">
                                <Col componentClass={ControlLabel} md={2}>
                                    Title
                                </Col>
                                <Col md={10}>
                                    <FormControl.Static> {this.props.questionnaire.title}
                                    </FormControl.Static>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formDescription">
                                <Col componentClass={ControlLabel} md={2}>
                                    Description
                                </Col>
                                <Col md={10}>
                                    <FormControl.Static>
                                        {this.props.questionnaire.description}
                                    </FormControl.Static>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col mdPush={10} md={2} className="text-right">
                                    <Button bsStyle="default" onClick={this.close}>Close</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }


}


export default QuestionnaireShowDialog;