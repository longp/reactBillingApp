var React = require('react');

var ConsumerInfo = React.createClass({
	render: function(){
		return (
			<div className="card">
				<div className="card-title">
					<h3 className="text-center">Consumer Info</h3>
				</div>
				<div className="card-content">
	   				<h5>Name: </h5>
	   				<h5>Address: </h5>
	   				<h5>Phone: </h5>
	   				<h5>Age: </h5>
	   				<h5>DOB: </h5>
	   				<h5>ID No: </h5>
				</div>
			</div>
		)
	}
})

module.exports = ConsumerInfo;