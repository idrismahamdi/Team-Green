import React from 'react'

const FlightInfo = ({departureIataCode, arrivalIataCode, departureAt, arrivalAt, duration}) => {
  return (
    <div className="card w-25" >
        <div className="card-header">
            Featured
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{departureIataCode ? departureIataCode: arrivalIataCode}</li>
            <li className="list-group-item">{arrivalAt ? arrivalAt : departureAt}</li>
            <li className="list-group-item">{duration}</li>
        </ul>
    </div>
  )
}

export default FlightInfo