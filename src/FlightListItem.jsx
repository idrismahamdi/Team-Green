import React from 'react'
import FlightInfo from './FlightInfo'
import logo from './planeicon.png'

const FlightListItem = ({flightInfo}) => {
    

  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
        <FlightInfo 
        departureIataCode={flightInfo.departureIataCode} 
        departureAt={flightInfo.departureAt} 
        grandtotal={flightInfo.grandtotal}/>
        <div className="w-25 ">
        <div style={{ display: 'inline-block', textAlign: 'center', height:'20%' }}>

        <img src={logo}  className="centered-image"  alt='aeroplane image'    style={{ width: '100%', height: '150px', verticalAlign: 'middle' }}/>
        </div>
        </div>
        <FlightInfo 
        arrivalIataCode={flightInfo.arrivalIataCode} 
        duration={flightInfo.duration} 
        arrivalAt={flightInfo.arrivalAt}/>
    </div>
  )
}

export default FlightListItem