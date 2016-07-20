import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ViewmedicationChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.deletemedication = this.deletemedication.bind(this);
  }

  deletemedication() {
    this.props.deletemedication(this.props.medicationId);
  }

  render() {
    var medication = this.props.medication;
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h1>{medication.times}</h1>
            <hr></hr>
          </Col>
          <Col md={8} lg={8} sm={8} xs={8}>
            <h3>{medication.dosage}</h3>
          </Col>
          <Col md={4} lg={4} sm={4} xs={4}>
            {this.props.loggedIn && <div className="pull-right">
              <LinkContainer className="editBtnCSS" to={`/medications/edit/${medication._id}`}>
                <Button bsStyle="primary">Edit</Button>
              </LinkContainer>
              <Button onClick={this.deletemedication} bsStyle="danger">Delete</Button>
            </div>
}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ViewmedicationChild;
