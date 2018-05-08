import React, {Component} from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Calendar from './UserExtra2/Calendar2';
import UserEvent from './UserExtra2/UserEvent2';
import './UserView.css';


class UserView2 extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div>
              <img className="img-responsive profile-photo center-block" src="https://image.ibb.co/krWwfH/user.png" alt="user" />
            <h1 className="text-center">Bienvenidx!</h1>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Calendar />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="card center-block space">
              <UserEvent />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }

};

export default UserView2;