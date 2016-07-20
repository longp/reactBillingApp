import React from 'react';
import medicationStore from './../../stores/medicationStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getmedication() {
  return { Editmedication: medicationStore.getmedication() };
}

class Editmedication extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.history = props.history;
    medicationStore.fetchmedication(props.params.id);
    this.state = getmedication();
    
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputTimes(value) { 
 this.setState({ medication: value }); 
 }; 
 


  _formSubmit(value) {
    medicationStore.editmedication(value, value._id, this.history);
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit medication</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit}  medication={this.state.Editmedication}
              handleInputTimes = {this.handleInputTimes}  />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Editmedication;
