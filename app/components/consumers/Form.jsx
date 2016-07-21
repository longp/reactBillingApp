import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.handleInputFirstname= this.handleInputFirstname.bind(this);
   this.handleInputLastname= this.handleInputLastname.bind(this);
    this._formSubmit = this._formSubmit.bind(this);
  }

   handleInputFirstname(e) { 
 this.props.consumer.firstname = e.target.value; 
 this.props.handleInputFirstname(this.props.consumer); 
 } 
 handleInputLastname(e) { 
 this.props.consumer.lastname = e.target.value; 
 this.props.handleInputLastname(this.props.consumer); 
 } 
 

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.props.consumer);
  }

  render() {
    var consumer = this.props.consumer;
    return (
        <Grid >
          <Row>
            <Col md={12}>
              <form onSubmit={this._formSubmit}>
                <Input type="text" value={consumer.firstname} label="Firstname" required onChange={this.handleInputFirstname} placeholder="Enter consumer Firstname" /> 
<Input type="text" value={consumer.lastname} label="Lastname" required onChange={this.handleInputLastname} placeholder="Enter consumer Lastname" /> 
                <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
              </form>
            </Col>
          </Row>
        </Grid>
      );
  }
  }

export default Form;
