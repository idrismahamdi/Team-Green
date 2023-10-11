import React from 'react'
import flightData from './flight.json'

const SelectedFlight = ({id}) => {
    

    let data;
    for(let flight of flightData){
        if(flight.id === id) {
            data = flight;
            break;
        }
    }
    
  return (
    <div className="row">
    <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{data.departureIataCode}</h5>            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Departs at: {data.departureAt}</li>
                <li className="list-group-item">Departure Terminal: {data.departureTerminal}</li>
                <li className="list-group-item">Total flight time: {data.duration}</li>
            </ul>            
        </div>
        </div>
    </div>
    <div className="col-sm-6">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{data.arrivalIataCode}</h5>            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Arrives at: {data.arrivalAt}</li>
                <li className="list-group-item">Arrival terminal: {data.arrivalTerminal}</li>
                <li className="list-group-item">Flight class: {data.flightClass}</li>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default SelectedFlight