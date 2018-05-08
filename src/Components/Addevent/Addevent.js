import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Row, Col, Grid } from 'react-bootstrap';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import firebase from './../firebase.js';
import './Addevent.css';

class Addevent extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      description: '',
      hour: '',
      id: '',
      imgEvent: '',
      location: '',
      name: '',
      places: '',
      url: '',
      events: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const eventsRef = firebase.database().ref('events');
    const event = {
      date: this.state.date,
      description: this.state.description,
      hour: this.state.hour,
      id: this.state.id,
      imgEvent: this.state.imgEvent,
      location: this.state.location,
      name: this.state.name,
      places: this.state.places,
      url: this.state.url
    }
    eventsRef.push(event);
    this.setState({
      date: '',
      description: '',
      hour: '',
      id: '',
      imgEvent: '',
      location: '',
      name: '',
      places: '',
      url: ''
    });
  }
  componentDidMount() {
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', (snapshot) => {
      let events = snapshot.val();
      let newState = [];
      for (let event in events) {
        newState.push({
          date: events[event].date,
          description: events[event].description,
          hour: events[event].hour,
          id: event,
          name: events[event].name,
          imgEvent: events[event].imgEvent,
          location: events[event].location,
          name: events[event].name,
          places: events[event].places,
          url: events[event].url
        });
      }
      this.setState({
        events: newState
      });
    });
  }
  removeItem(eventId) {
    const eventRef = firebase.database().ref(`/events/${eventId}`);
    eventRef.remove();
  }
  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1 className="add-event-title">Añadir Evento</h1>
                             
            </div>
        </header>
        <div className='container'>
          <Col xs={12} className='add-event'>
                <form onSubmit={this.handleSubmit}>
                  <ControlLabel>Título:</ControlLabel>
                  <FormControl type="text" name="name" placeholder="Titulo" onChange={this.handleChange} value={this.state.name} />
                  <ControlLabel>Fecha:</ControlLabel>
                  <FormControl type="text" name="date" placeholder="DD/MM/AAAA" onChange={this.handleChange} value={this.state.date} />
                  <ControlLabel>Horario:</ControlLabel>
                  <FormControl type="text" name="hour" placeholder="HH:MMM" onChange={this.handleChange} value={this.state.hour} />
                  <ControlLabel>Descripción del evento:</ControlLabel>
                  <FormControl componentClass="textarea" name="description" placeholder="Descripcion" onChange={this.handleChange} value={this.state.description} />
                  <ControlLabel>Afiche:</ControlLabel>
                  <FormControl type="text" name="imgEvent" placeholder="http://www.direccion/afiche-evento.jpg" onChange={this.handleChange} value={this.state.imgEvent} />
                  <ControlLabel>Ubicación:</ControlLabel>
                  <FormControl type="text" name="location" placeholder="Ubicacion" onChange={this.handleChange} value={this.state.location} />
                  <ControlLabel>Cupos:</ControlLabel>
                  <FormControl type="text" name="places" placeholder="Cupos" onChange={this.handleChange} value={this.state.places} />
                  <ControlLabel>Página oficial del Evento:</ControlLabel>
                  <FormControl type="text" name="url" placeholder="http://www.google.cl" onChange={this.handleChange} value={this.state.url} />

                  <button className="btn-add">Añadir</button>
                </form>
          </Col>
          <section className='display-event'>
              <div className="wrapper">
              <h4>Eventos Agendados</h4>
                <ul>
                  {this.state.events.map((event) => {
                    return (
                      <li key={event.id}>
                        <h5 className="title">{event.name}</h5>
                        <p>Fecha: {event.date}</p>
                        <p>
                          <button onClick={() => this.removeItem(event.id)}>Cancelar Evento</button>
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Addevent;