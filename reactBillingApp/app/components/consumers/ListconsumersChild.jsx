import React from 'react';
import {Link} from 'react-router';
import {
  Grid,
  Row,
  Col,
  Panel,
  Pagination,
  Button,
  Well,
  Label
} from 'react-bootstrap';

class ListconsumersChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    var consumers = this.props.consumers.map((consumer) => {
      return (
        <Link
          key={consumer._id}
          to={`/consumers/${consumer._id}`}>
          <Col md={12} lg={12} sm={12} xs={12} className="products">
            <Panel header={consumer.firstname}>
              {consumer.lastname}

            </Panel>
          </Col>
        </Link>
    );});
    return (
      <div className="marginBottom">
        <Grid>
            <Row className="productList">
              <h1>consumers</h1>
              <hr></hr>
              {consumers}
              </Row>
            </Grid>
      </div>
    );
  }
}
export default ListconsumersChild;
