var React = require('react');

var Medications = React.createClass({
	render: function(){
		return (
			<div className="card">
				<div className="card-title">
					<h4 className="text-center">Medications</h4>
				</div>
				<div className="card-content">
					<ul>
						<li>Med 1</li>
						<li>Med 2</li>
						<li>Med 3</li>
					</ul>
				</div>
			</div>
		)
	}
})

module.exports = Medications;