import React, { useState } from 'react'
import FlightListItem from './FlightListItem'
import SelectedFlight from './SelectedFlight'
import flightData from './flight.json'


const FlightList = () => {

  const [showSelected, setShowSelected] = useState(false);
  const [showList, setShowList] = useState(true);

    const handleClick = (e) => {
      console.log(`clicked ${e.target}`)
      setShowList(false);
      setShowSelected(true);
      return 
    }

    
  return (
    <>
        
        {showList ? flightData.map(
        flightInfo => <li key={flightInfo.id} onClick={(e) => handleClick(e)}><FlightListItem flightInfo={flightInfo}/></li>
        ) : null
      }
        {showSelected ? 
        <SelectedFlight />
        : null}
    </>
  )
}

export default FlightList