var React = require('react');

var Search = React.createClass({
	
	render: function(){
		return (
			<div>
        		<input className="input-field col m9" type="text"/>
       			<a className="waves-effect waves-light btn col m3">SEARCH</a>
   			</div>
		)
	}
})

module.exports = Search;