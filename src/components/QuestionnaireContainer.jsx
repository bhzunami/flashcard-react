import React from 'react';
import QuestionnaireTable from './QuestionnaireTable'
import { Grid, Row, Col } from 'react-bootstrap';
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'

class QuestionnaireContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnaires: this.props.qs,
      url: this.props.url,
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(response => response.json() )
      .then(json => {
        this.setState({ questionnaires: json });
      })
      .catch(error => {
      console.error("Error in Request", error);
    })

  }

  create(questionnaire) {
    let qs = this.state.questionnaires;
    var request = new Request(this.state.url, { 
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(questionnaire)
    });
    fetch(request)
    .then(response => {
      //if(response.status == 200) {
        return response.json();
      //} else {
        //console.log(response.statusText);
        //throw response.statusText;
      //}
    })
    .then(json => {
      console.log("Parse json");
      qs.push(json);
      this.setState({
        questionnaires: qs
      })
    })
    .catch(error => {
      alert(error);
      console.error("Error: ", error);
    })
    
  }

  update(questionnaire) {
    let qs = this.state.questionnaires;
    var request = new Request(this.state.url+questionnaire.id, { 
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(questionnaire)
    });
    fetch(request)
    .then(response => response.json() )
    .then(json => { 
      let tmp = qs.find(question => question.id === json.id);
      tmp.title = json.title;
      tmp.description = json.description;
      this.setState({
        questionnaires: qs
      })
    })
    .catch(error => {
      console.log("ERROR IN CATCHING:", error);
      console.error("Error: ", error);
    })
    
  }

  delete(id) {
    let qs = this.state.questionnaires;
    //this.state.questionnaires = this.state.questionnaires.filter(q => q.id != id);
    var request = new Request(this.state.url+id, { 
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: null
    });
    fetch(request)
    .then(response => { 
      qs = qs.filter(q => q.id !== id );
      console.log(qs);
      this.setState({ questionnaires: qs });
      })
    .catch(error => {
      console.error("Could not delete: ", id +" cause: ", error);
    })
    
  }

  render() {
    const rowStyle = {
      pasingTop: '10px'
    };

    return (
      <Grid>
      <Row>
       <Col mdPush={11} md={1} className="text-right">
            <QuestionnaireCreateDialog
              onCreate={this.create}
              />
          </Col>
      </Row>
      <br />
        <Row style={rowStyle}>
          <Col md={12}>
            <QuestionnaireTable
              questionnaires={this.state.questionnaires}
              update={this.update}
              delete={this.delete} />
          </Col>
        </Row>
      </Grid>
    )
  }

}



export default QuestionnaireContainer;