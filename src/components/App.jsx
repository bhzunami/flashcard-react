import React, { Component } from 'react';
//import logo from './logo.svg';
import '../css/App.css';
import Header from './Header'
import Footer from './Footer'
import QuestionnaireContainer from './QuestionnaireContainer'
var Loader = require('halogen/PulseLoader');


class App extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    fetch("application.json")
    .then(response => {
      if (!response.ok) {
        console.log("ERROR");
        throw Error(response.statusText);
      }
      return response.json() 
    })
    .then(json => {      
      this.setState({ url: json.url });
      console.log(this.state.url);
    })
    .catch(error => {
     console.error("Error in Request", error);
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          title="React"
          version="2"/>          

          {(this.state.url !== '') ? (
           <QuestionnaireContainer qs={this.props.qs} url={this.state.url}/>
           ) :  <Loader color="#26A65B" size="16px" margin="40px"/>}
        <Footer copyright="Nicolas Mauchle" qs={this.props.qs.length} />
      </div>
    );
  }
}

App.defaultProps = {
  qs:[
    {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
    {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
    {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
    {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
    {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
  ] 
}

export default App;
