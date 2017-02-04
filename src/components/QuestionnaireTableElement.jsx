import React from 'react';
import {Glyphicon, Button} from 'react-bootstrap';
import QuestionnaireShowDialog from './QuestionnaireShowDialog';
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog';

const actionStyle = {
  width: '20px'
};

const textStyle = {
  verticalAlign: 'middle'
};

export default class QuestionnaireTableElement extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      delete: this.props.delete,
    }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    this.props.delete(this.props.questionnaire.id);
  }

  render() {
    return <tr>
      <td colSpan="1" style={textStyle}>
        {this.props.questionnaire.id}
      </td>
      <td colSpan="3" style={textStyle}>
        {this.props.questionnaire.title}
      </td>
      <td colSpan="10" style={textStyle}>
        {this.props.questionnaire.description}
      </td>
      <td colSpan="1" style={actionStyle}>
        <QuestionnaireShowDialog questionnaire={this.props.questionnaire}/>
        </td>
        <td colSpan="1" style={actionStyle}>
        <QuestionnaireUpdateDialog questionnaire={this.props.questionnaire} onUpdate={this.props.update}/> 
      </td>
      <td colSpan="1" style={actionStyle} >
      <Button bsStyle="link" onClick={this.onDelete}>
       <Glyphicon glyph="remove" />
       </Button>
      </td>
    </tr>
  }
}
