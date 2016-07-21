import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.handleInputTimes= this.handleInputTimes.bind(this);

    this._formSubmit = this._formSubmit.bind(this);
  }

   handleInputTimes(e) { 
 this.props.medication.times = e.target.value; 
 this.props.handleInputTimes(this.props.medication); 
 } 
 

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.props.medication);
  }

  render() {
    var medication = this.props.medication;
    return (
        <Grid >
          <Row>
            <Col md={12}>
              <form onSubmit={this._formSubmit}>
                <Input type="text" value={medication.times} label="Times" required onChange={this.handleInputTimes} placeholder="Enter medication Times" /> 

                <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
              </form>
            </Col>
          </Row>
        </Grid>
      );
  }
  }

export default Form;
