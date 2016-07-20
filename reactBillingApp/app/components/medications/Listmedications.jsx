import React from 'react';
import medicationStore from './../../stores/medicationStore.jsx';
import ListmedicationsChild from './ListmedicationsChild.jsx';

function getmedicationList() {
  return { medications: medicationStore.getmedicationList() };
}

class medicationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    medicationStore.fetchmedicationList();
    this.state = {};
    this.state.medications = [];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    medicationStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    medicationStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getmedicationList());
  }

  render() {
    return (
    <ListmedicationsChild medications= {this.state.medications} />
  );
  }
  }
export default medicationList;
