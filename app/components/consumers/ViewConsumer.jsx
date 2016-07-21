import React from 'react';
import consumerStore from './../../stores/consumerStore.jsx';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import auth from './../../services/Authentication';
import ViewconsumerChild from './ViewconsumerChild.jsx';

function getconsumer() {
  return { consumer: consumerStore.getconsumer() };
}

class Viewconsumer extends React.Component {
  constructor(props, context) {
    super(props, context);
    consumerStore.fetchconsumer(props.params.id);
    this.state = {};
    this.state.consumer = {};
    this.state.loggedIn = auth.loggedIn();
    this._onChange = this._onChange.bind(this);
    this.deleteconsumer = this.deleteconsumer.bind(this);
  }

  componentWillMount() {
    consumerStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    consumerStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getconsumer());
  }

  deleteconsumer(consumerId) {
    consumerStore.deleteconsumer(consumerId, this.props.history);
  }

  render() {
    return (
    <ViewconsumerChild loggedIn={this.state.loggedIn} consumerId= {this.props.params.id}
       consumer = {this.state.consumer} deleteconsumer = {this.deleteconsumer} />
    );
  }
}

export default Viewconsumer;
