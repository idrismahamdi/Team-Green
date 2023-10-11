import React, { useState } from 'react'
import FlightListItem from './FlightListItem'
import SelectedFlight from './SelectedFlight'
import flightData from './flight.json'


const FlightList = () => {

  const [listOfFlights, setListOfFlights] = useState(flightData);
  const [showList, setShowList] = useState(true);

    const handleClick = (e) => {
      console.log(`clicked ${e.target}`)
      setShowList(false);
      return 
    }

    
  return (
    <>
        
        {showList ? listOfFlights.map(
        flightInfo => <li key={flightInfo.id} onClick={(e) => handleClick(e)}><FlightListItem flightInfo={flightInfo}/></li>
        ) : null
      }
    </>
  )
}

export default FlightList