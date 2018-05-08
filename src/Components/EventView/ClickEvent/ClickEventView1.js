import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { render } from 'react-dom';
import events from './../../Data/events.json';
import './ClickEventView.css';

class ClickEventView1 extends Component {
  constructor(){
    super();
  }

  render(){
    
    const event = events.events[0]
     return(
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <h2 className="text-center title">{event.name}</h2>
              <hr className="line" />
              <div className="alert">
                <h3 className="text-center"><strong>Te has inscrito en el evento</strong> {event.name}</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img src={event.imgEvent} className="img-responsive center-block" alt="Img-Event" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className="places">
                <h5 className="text-center"><strong>Cupos: {event.places -1} </strong></h5>
              </div>
              <h4 className="description text-center">{event.description}</h4>
              <Row>
                <div className="boxDetails">
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <p><strong>· Fecha:</strong> {event.date}</p>
                    <p><strong>· Hora:</strong> {event.hour}</p>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6}>
                    <p className="location"><strong>· Lugar: </strong>{event.location}</p>
                  </Col>
                </div>
              </Row>
              <Row>
                <button className="center-block">Ya no quiero asistir!</button>
              </Row>
            </Col>
          </Row>
        </Grid>
      )
  }
}

export default ClickEventView1;