import React, { useState } from 'react'
import FlightListItem from './FlightListItem'
import SelectedFlight from './SelectedFlight'
import flightData from './flight.json'


const FlightList = () => {

  const [selectedId, setSelectedId] = useState(0);
  const [showList, setShowList] = useState(true);

  
    const handleClick = (e, flightId) => {   
      setShowList(false);
      setSelectedId(flightId);      
      return 
    }

    
  return (
    <>
        
        {showList ? flightData.map(
        flightInfo => <li key={flightInfo.id} onClick={(e) => handleClick(e, flightInfo.id)}><FlightListItem flightInfo={flightInfo}/></li>
        ) : null
      }
        {selectedId ? 
        <SelectedFlight id={selectedId}/>
        : null}
    </>
  )
}

export default FlightList