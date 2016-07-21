import React from 'react';
import medicationStore from './../../stores/medicationStore.jsx';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import auth from './../../services/Authentication';
import ViewmedicationChild from './ViewmedicationChild.jsx';

function getmedication() {
  return { medication: medicationStore.getmedication() };
}

class Viewmedication extends React.Component {
  constructor(props, context) {
    super(props, context);
    medicationStore.fetchmedication(props.params.id);
    this.state = {};
    this.state.medication = {};
    this.state.loggedIn = auth.loggedIn();
    this._onChange = this._onChange.bind(this);
    this.deletemedication = this.deletemedication.bind(this);
  }

  componentWillMount() {
    medicationStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    medicationStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getmedication());
  }

  deletemedication(medicationId) {
    medicationStore.deletemedication(medicationId, this.props.history);
  }

  render() {
    return (
    <ViewmedicationChild loggedIn={this.state.loggedIn} medicationId= {this.props.params.id}
       medication = {this.state.medication} deletemedication = {this.deletemedication} />
    );
  }
}

export default Viewmedication;
