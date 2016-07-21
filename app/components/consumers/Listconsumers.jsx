import React from 'react';
import consumerStore from './../../stores/consumerStore.jsx';
import ListconsumersChild from './ListconsumersChild.jsx';

function getconsumerList() {
  return { consumers: consumerStore.getconsumerList() };
}

class consumerList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    consumerStore.fetchconsumerList();
    this.state = {};
    this.state.consumers = [];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    consumerStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    consumerStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getconsumerList());
  }

  render() {
    return (
    <ListconsumersChild consumers= {this.state.consumers} />
  );
  }
  }
export default consumerList;
