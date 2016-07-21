var React = require('react');

var EmployeeInfo = require('./employeeinfo.jsx'),
 	ConsumerInfo = require('./consumerInfo.jsx'),
	 Medications = require('./medications.jsx'),
 		   Notes = require('./notes.jsx'),
 		  Search = require('./search.jsx');

var topMargin = {
	marginTop: "20px"
}
var medStyle = {
		paddingLeft: "0px"
	}
var noteStyle = {
	paddingRight: "0px"
}

var Employee = React.createClass({
	_handleClick: function(){
		alert("you clicked a button!");
	},
	_addNote: function(x){
		$('#notes ul').append($('#noteContent').val()).append('<br>');
		$('#noteContent').val('');
	},
  render: function () {
    return (
        	<div className="row">
	        	<div className="col m12" style={topMargin}>
	        		<Search />
	       		</div>
	       		<div className="col m3 s12">
		       		<EmployeeInfo />
	       		</div>
	       		<div className="col m9 s12">
       				<ConsumerInfo />
       				<div className="row">
       					<div className="col m3" style={medStyle}>
       						<Medications />
       					</div>
       					<div className="col m9" style={noteStyle}>
       						<Notes />
       					</div>

       				</div>
	       		</div>
       		</div>
    );
  }
});

module.exports = Employee;