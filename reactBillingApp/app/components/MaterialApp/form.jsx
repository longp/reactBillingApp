
//onSubmit

// * Binds a forms submitted value to state.
// * event.preventDefault() - prevents a page from refreshing on submit.

// EX:
// ---
handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.inputValue);
}

<form className="form" role="search" onSubmit={this.handleSubmit.bind(this)}>
    <div className="form-group">
        <input type="text" className="form-control" placeholder="Begin news search..." value={this.state.inputValue} onChange={this.onChange.bind(this)} />
    </div>
    <button type="submit" className="btn btn-default">Search</button>
</form>


// =------=
// onChange
// =------=
// * Allows a value's state to be updated dynamically while the user types.

//                             =-------------------------=
//                            |  BIND INPUT DATA TO STATE |
//                             =-------------------------=

// * Demonstrates a NavBar component with a text input.
// * Data for an input must be bound to the state.
// * onChange necessary to dynamically update the state of the input value.

// EX:
// ---

import React from "react";
import ReactDOM from "react-dom";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: []
		}
	}

	componentDidMount() {
		console.log("home page component mounted!");
	}

	onChange(e) {
		this.setState({ inputValue: e.target.value });
		console.log(this.state.inputValue);
		console.log(this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	render() {

		return (

		<div>

            <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Begin news search..." value={this.state.inputValue} onChange={this.onChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
            </form>

        </div>

		);
	};
}

export default NavBar;