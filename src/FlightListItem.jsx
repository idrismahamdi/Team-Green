import React from 'react'
import FlightInfo from './FlightInfo'

const FlightListItem = () => {
    

  return (
    <div className='d-flex justify-content-evenly'>
        <FlightInfo airport="Edinburgh" departure="Diparture Time: 11:40"/>
        <div className="w-25">
        <img src="./aeroplane.png" alt='aeroplane image'/>
        </div>
        <FlightInfo airport="New York" flightTime="5h 26m" arrival="Arrival Time: 17:09"/>
    </div>
  )
}

export default FlightListItem