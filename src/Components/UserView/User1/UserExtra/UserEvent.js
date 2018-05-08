import React, {Component} from 'react';
import { render } from 'react-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import events from './../../../Data/events.json';


class UserEvent extends Component {

  render(){

    const event = events.events[0]
     return(
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img src={event.imgEvent} className="img-responsive center-block imgEvent" alt="Img-Event" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
            <h2 className="text-center">{event.name}</h2>
            <p>Fecha: {event.date}</p>
            <p>Hora: {event.hour}</p>
            <p>Lugar: {event.location}</p>
            </Col>
          </Row>
        </Grid>
      )
  }
}


export default UserEvent;