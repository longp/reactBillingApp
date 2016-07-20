import React from 'react';
import loginStore from './../../stores/loginStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

class Createlogin extends React.Component {
 constructor(props) {
   super(props);
   this.history = props.history;
   this.state = {};
   this.state.login = {};
   this.state.error = '';
   this.handleInputAuth= this.handleInputAuth.bind(this);

   this._formSubmit = this._formSubmit.bind(this);
 }

handleInputAuth(value) { 
 this.setState({ login: value }); 
 }; 
 

_formSubmit(value) {
   loginStore.addlogin(value, this.history);
 }

 render() {

   return (
     <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Create login</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit} login={this.state.login}
              handleInputAuth = {this.handleInputAuth}   />
          </Col>
        </Row>
      </Grid>
   )
 }
}

export default Createlogin;
