import React from 'react'
const SelectedFlight = ({data}) => {
    
const DtimePart = data.departureAt.split("T")[1]; 
const AtimePart = data.arrivalAt.split("T")[1]; 

let time; 
let hours, minutes;
try{
const dateTimeString = data.duration
 time = dateTimeString.split('T')[1].substring(0, 5);
 hours = time[0];
 if(!isNaN(+time[2])){
  minutes = time[2] + time[3];
 }else{
  minutes= 0;
 }
}catch(e){

}


    
  return (
    
    <div className="row">

    <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{data.departureIataCode}</h5>            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Departs at: {DtimePart}</li>
                <li className="list-group-item">Departure Terminal: {data.departureTerminal}</li>
                <li className="list-group-item">Total flight time: {hours + "H " + minutes + "M"}</li>
            </ul>            
        </div>
        </div>
    </div>
    <div className="col-sm-6">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">{data.arrivalIataCode}</h5>            
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Arrives at: {AtimePart}</li>
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