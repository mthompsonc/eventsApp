import React, { Component } from 'react';
//import propTypes from 'prop-types';
import { Row, Col, Grid } from 'react-bootstrap';
import Navbar from './../Navbar/Navbar';
import Upcomingevents from './../Upcoming/Upcomingevents';
import './style.css';


const categories = ['UX', 'Mujeres', 'Programación'];

const menu = {
  appName: 'Events App',
  logoImage: 'http://4.bp.blogspot.com/-d3Lc_Bpm1y4/VKidtotyyEI/AAAAAAAAH68/glouCyRYlts/s1600/eventbrite-thumbnail.png'
}

class Home extends Component {

  constructor(props) {
    super();
    this.state = categories;
  }

  render() {
    let listCategories = this.state.map((name, index) => {
        return <Col xs={12} sm={6} md={4} key={index} className={`categories ${name}`}  alt={name} onClick={this.getresults}><span className="title">{name}</span></Col>
      });
    return (
      <Grid fluid className="space">
      <Row className="content">
        <h3>Proximos Eventos</h3>
        <Upcomingevents />
      </Row>
      </Grid>);
    }
  }

export default Home;
      

