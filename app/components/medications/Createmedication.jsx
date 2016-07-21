import React from 'react';
import medicationStore from './../../stores/medicationStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

class Createmedication extends React.Component {
 constructor(props) {
   super(props);
   this.history = props.history;
   this.state = {};
   this.state.medication = {};
   this.state.error = '';
   this.handleInputTimes= this.handleInputTimes.bind(this);

   this._formSubmit = this._formSubmit.bind(this);
 }

handleInputTimes(value) { 
 this.setState({ medication: value }); 
 }; 
 

_formSubmit(value) {
   medicationStore.addmedication(value, this.history);
 }

 render() {

   return (
     <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create medication</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} medication={this.state.medication}
              handleInputTimes = {this.handleInputTimes}   />
          </Col>
        </Row>
      </Grid>
   )
 }
}

export default Createmedication;
