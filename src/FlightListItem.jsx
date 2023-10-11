import React from 'react'
import FlightInfo from './FlightInfo'
import logo from './aeroplane.png'

const FlightListItem = ({flightInfo}) => {
    

  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
        <FlightInfo 
        departureIataCode={flightInfo.departureIataCode} 
        departureAt={flightInfo.departureAt}/>
        <div className="w-25">
        <img src={logo} alt='aeroplane image'/>
        </div>
        <FlightInfo 
        arrivalIataCode={flightInfo.arrivalIataCode} 
        duration={flightInfo.duration} 
        arrivalAt={flightInfo.arrivalAt}/>
    </div>
  )
}

export default FlightListItem