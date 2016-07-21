import React from 'react';
import consumerStore from './../../stores/consumerStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getconsumer() {
  return { Editconsumer: consumerStore.getconsumer() };
}

class Editconsumer extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.history = props.history;
    consumerStore.fetchconsumer(props.params.id);
    this.state = getconsumer();
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
    consumerStore.editconsumer(value, value._id, this.history);
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit consumer</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit}  consumer={this.state.Editconsumer}
              handleInputFirstname = {this.handleInputFirstname} handleInputLastname = {this.handleInputLastname} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Editconsumer;
