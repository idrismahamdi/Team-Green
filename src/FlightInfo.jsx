import React from 'react'

const FlightInfo = ({airport, departure, arrival, flightTime}) => {
  return (
    <div className="card w-25" >
        <div className="card-header">
            Featured
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{airport}</li>
            <li className="list-group-item">{arrival ? arrival : departure}</li>
            <li className="list-group-item">{flightTime}</li>
        </ul>
    </div>
  )
}

export default FlightInfo