import React from 'react';
import {Grid, Row, Col, Button, Input, ButtonInput} from 'react-bootstrap';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.history = props.history;
    this.handleInputAuth= this.handleInputAuth.bind(this);

    this._formSubmit = this._formSubmit.bind(this);
  }

   handleInputAuth(e) { 
 this.props.login.auth = e.target.value; 
 this.props.handleInputAuth(this.props.login); 
 } 
 

  _formSubmit(e) {
    e.preventDefault();
    this.props.formSubmit(this.props.login);
  }

  render() {
    var login = this.props.login;
    return (
        <Grid >
          <Row>
            <Col md={12}>
              <form onSubmit={this._formSubmit}>
                <Input type="text" value={login.auth} label="Auth" required onChange={this.handleInputAuth} placeholder="Enter login Auth" /> 

                <ButtonInput type="submit" value="Submit Button" bsStyle="primary"/>
              </form>
            </Col>
          </Row>
        </Grid>
      );
  }
  }

export default Form;
