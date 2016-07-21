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

class ListloginsChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    var logins = this.props.logins.map((login) => {
      return (
        <Link
          key={login._id}
          to={`/logins/${login._id}`}>
          <Col md={12} lg={12} sm={12} xs={12} className="products">
            <Panel header={login.auth}>
              {login.}

            </Panel>
          </Col>
        </Link>
    );});
    return (
      <div className="marginBottom">
        <Grid>
            <Row className="productList">
              <h1>logins</h1>
              <hr></hr>
              {logins}
              </Row>
            </Grid>
      </div>
    );
  }
}
export default ListloginsChild;
