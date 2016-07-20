import React from 'react';
import loginStore from './../../stores/loginStore.jsx';
import ListloginsChild from './ListloginsChild.jsx';

function getloginList() {
  return { logins: loginStore.getloginList() };
}

class loginList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    loginStore.fetchloginList();
    this.state = {};
    this.state.logins = [];
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    loginStore.onChange(this._onChange);
  }

  componentWillUnmount() {
    loginStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getloginList());
  }

  render() {
    return (
    <ListloginsChild logins= {this.state.logins} />
  );
  }
  }
export default loginList;
