import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
var maxDate = new Date(today.getFullYear(), today.getMonth() + 2);
var minDate= new Date(today.getFullYear(), today.getMonth(), today.getDate());
var date1 = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);


class Calendar extends Component {

  render (){
    return(
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <InfiniteCalendar className="center-block img-responsive calendar" width={300} height={220} selected={date1} disabledDays={[0,6]} minDate={lastWeek} max={maxDate} min= {minDate}/>
        </Col>
    </Row>
    );
  }
}

export default Calendar;