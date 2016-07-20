import React from 'react';
import loginStore from './../../stores/loginStore.jsx';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import auth from './../../services/Authentication';
import ViewloginChild from './ViewloginChild.jsx';

function getlogin() {
  return { login: loginStore.getlogin() };
}

class Viewlogin extends React.Component {
  constructor(props, context) {
    super(props, context);
    loginStore.fetchlogin(props.params.id);
    this.state = {};
    this.state.login = {};
    this.state.loggedIn = auth.loggedIn();
    this._onChange = this._onChange.bind(this);
    this.deletelogin = this.deletelogin.bind(this);
  }

  componentWillMount() {
    loginStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    loginStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getlogin());
  }

  deletelogin(loginId) {
    loginStore.deletelogin(loginId, this.props.history);
  }

  render() {
    return (
    <ViewloginChild loggedIn={this.state.loggedIn} loginId= {this.props.params.id}
       login = {this.state.login} deletelogin = {this.deletelogin} />
    );
  }
}

export default Viewlogin;
