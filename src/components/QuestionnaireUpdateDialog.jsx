import React from 'react';
import {Glyphicon, Modal, FormGroup, Form, FormControl, Col, ControlLabel, Button } from 'react-bootstrap';


class QuestionnaireUpdateDialog extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: this.props.questionnaire.title,
      description: this.props.questionnaire.description
    }
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
      if(e.target.id === "formTitle") {
          this.setState({title: e.target.value});
      } else if (e.target.id === "formDescription") {
          this.setState({description: e.target.value});
      }
  }

  close() {
    this.setState({ showModal: false });
  }

  submit() {
      this.props.onUpdate({ id: this.props.questionnaire.id,
                            title: this.state.title,
                            description: this.state.description});
        this.setState({showModal: false});
  }

  open() {
    this.setState({ showModal: true });
  }

    render() {
        return (
      <div>
        <Button bsStyle="link" onClick={this.open}>
          <Glyphicon glyph="edit" />
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create Questionnaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
               <FormGroup controlId="formTitle">
                 <Col componentClass={ControlLabel} md={2}>
                   Title
                 </Col>
                 <Col md={10}>
                   <FormControl type="text" placeholder="Title" autoFocus
                     value={this.state.title} onChange={this.handleChange}/>
                 </Col>
               </FormGroup>

               <FormGroup controlId="formDescription">
                 <Col componentClass={ControlLabel} md={2}>
                   Description
                 </Col>
                 <Col md={10}>
                   <FormControl type="text" placeholder="Description"
                     value={this.state.description} onChange={this.handleChange}/>
                 </Col>
               </FormGroup>

               <FormGroup>
                 <Col mdPush={10} md={2} className="text-right">
                   <Button bsStyle="primary" onClick={this.submit}>Submit</Button>
                 </Col>
               </FormGroup>
             </Form>
          </Modal.Body>
        </Modal>
      </div>
        )
    }

}


export default QuestionnaireUpdateDialog;