import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
class Footer extends React.Component {
    constructor() {
      super();

    }

	render() {
  return (
            <div className="footer">
            <Grid>
               <Row>
                 <Col xs={12} md={6} sm={6} lg={6}>Licensed under MIT &copy; 2016 |
                    <a href="https://github.com/waltdakind/billingapp" target="_blank"> GitHub repo</a></Col>
                 <Col xs={12} md={6} sm={6} lg={6}>
                   <ul className="list-social pull-right">
                     <li>
                       <a href="https://github.com/waltdakind/billingapp" target="_blank">
                         <span className="fa-stack fa-lg">
                           <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                </ul>
              </Col>
            </Row>
            </Grid>
            </div>
		);
	}

}

export default Footer;
