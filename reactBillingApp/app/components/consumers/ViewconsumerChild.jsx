import React from 'react';
import {
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class ViewconsumerChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.deleteconsumer = this.deleteconsumer.bind(this);
  }

  deleteconsumer() {
    this.props.deleteconsumer(this.props.consumerId);
  }

  render() {
    var consumer = this.props.consumer;
    return (
      <Grid className="marginBottom">
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h1>{consumer.firstname}</h1>
            <hr></hr>
          </Col>
          <Col md={8} lg={8} sm={8} xs={8}>
            <h3>{consumer.lastname}</h3>
          </Col>
          <Col md={4} lg={4} sm={4} xs={4}>
            {this.props.loggedIn && <div className="pull-right">
              <LinkContainer className="editBtnCSS" to={`/consumers/edit/${consumer._id}`}>
                <Button bsStyle="primary">Edit</Button>
              </LinkContainer>
              <Button onClick={this.deleteconsumer} bsStyle="danger">Delete</Button>
            </div>
}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ViewconsumerChild;
