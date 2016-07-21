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

class ListmedicationsChild extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
  }

  render() {
    var medications = this.props.medications.map((medication) => {
      return (
        <Link
          key={medication._id}
          to={`/medications/${medication._id}`}>
          <Col md={12} lg={12} sm={12} xs={12} className="products">
            <Panel header={medication.times}>
              {medication.drugname}

            </Panel>
          </Col>
        </Link>
    );});
    return (
      <div className="marginBottom">
        <Grid>
            <Row className="productList">
              <h1>medications</h1>
              <hr></hr>
              {medications}
              </Row>
            </Grid>
      </div>
    );
  }
}
export default ListmedicationsChild;
