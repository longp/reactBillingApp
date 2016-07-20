import React from 'react';
import consumerStore from './../../stores/consumerStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

class Createconsumer extends React.Component {
 constructor(props) {
   super(props);
   this.history = props.history;
   this.state = {};
   this.state.consumer = {};
   this.state.error = '';
   this.handleInputFirstname= this.handleInputFirstname.bind(this);
   this.handleInputLastname= this.handleInputLastname.bind(this);
   this._formSubmit = this._formSubmit.bind(this);
 }

handleInputFirstname(value) { 
 this.setState({ consumer: value }); 
 }; 
 
handleInputLastname(value) { 
 this.setState({ consumer: value }); 
 }; 
 

_formSubmit(value) {
   consumerStore.addconsumer(value, this.history);
 }

 render() {

   return (
     <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create consumer</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} consumer={this.state.consumer}
              handleInputFirstname = {this.handleInputFirstname} handleInputLastname = {this.handleInputLastname}  />
          </Col>
        </Row>
      </Grid>
   )
 }
}

export default Createconsumer;
