import React from 'react';
import loginStore from './../../stores/loginStore.jsx';
import {Grid, Row, Col} from 'react-bootstrap';
import Form from './Form.jsx';

function getlogin() {
  return { Editlogin: loginStore.getlogin() };
}

class Editlogin extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
    this.history = props.history;
    loginStore.fetchlogin(props.params.id);
    this.state = getlogin();
    
    this._formSubmit = this._formSubmit.bind(this);
  }

  handleInputAuth(value) { 
 this.setState({ login: value }); 
 }; 
 


  _formSubmit(value) {
    loginStore.editlogin(value, value._id, this.history);
  }

  render() {
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12}>
            <h2>
              <b>Edit login</b>
            </h2>
            <hr></hr>
            <Form formSubmit={this._formSubmit}  login={this.state.Editlogin}
              handleInputAuth = {this.handleInputAuth}  />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Editlogin;
