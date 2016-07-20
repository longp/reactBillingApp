// On Click
import React from "react";

class Click extends React.Component {

	handleClick(arg) {
		console.log("click is working!");
		console.log(arg) // log argument value
	}

	render() {
		return(
			<div onClick={this.handleClick.bind(this, arg)}>
				click m3!!
			</div>
		)
	}
}}