var React = require('react');

var EmployeeInfo = React.createClass({
	render: function(){
		return (
			<div className="card">
   				<div className="card-image">
   					<img src="/../img/example-profile.jpg" />
   					<span className="card-title"><h3>John Doe</h3></span>
   				</div>
   				<div className="card-content">
   					<h5>Check in time: </h5>
   					<h5>Current time: </h5>
   				</div>
   				<div className="card-action">
   					<a className="waves-effect waves-light btn-large" onClick={this._handleClick}>CHECKOUT</a>
   				</div>	
   			</div>
		)
	}
})

module.exports = EmployeeInfo;