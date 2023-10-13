import React from 'react'

const FlightInfo = ({ departureIataCode, arrivalIataCode, departureAt, arrivalAt, duration, grandtotal }) => {
  let time;
  let hours, minutes;
  try {
    const dateTimeString = duration
    time = dateTimeString.split('T')[1].substring(0, 5);
    hours = time[0];
    if (!isNaN(+time[2])) {
      minutes = time[2] + time[3];
    } else {
      minutes = 0;
    }
  } catch (e) {

  }

  const aDate = new Date(arrivalAt);
  const dDate = new Date(departureAt);



  return (
    <div className="card w-25" >
      <div className="card-header">
        {departureIataCode ? <p className='m-0'>Departure</p> : <p className='m-0'>Arrival</p>}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Airport: {departureIataCode ? departureIataCode : arrivalIataCode}</li>
        <li className="list-group-item">Time: {arrivalAt ? (aDate.getMinutes() < 10) ? aDate.getHours() + ":0" + aDate.getMinutes() : aDate.getHours() + ":" + aDate.getMinutes() : (dDate.getMinutes() < 10) ? dDate.getHours() + ":0" + dDate.getMinutes() : dDate.getHours() + ":" + dDate.getMinutes()}</li>
        <li className="list-group-item">{duration ? hours + "H " + minutes + "M" : "£" + grandtotal}</li>

      </ul>
    </div>
  )
}

export default FlightInfo