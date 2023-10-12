import React, { useEffect, useState } from 'react'
import FlightListItem from './FlightListItem'
import SelectedFlight from './SelectedFlight'
import './login.css'



const FlightList = ({ flightData }) => {

  const [selectedId, setSelectedId] = useState(0);
  const [showList, setShowList] = useState(true);


  const handleClick = (e, flightIndex) => {
    setShowList(false);
    setSelectedId(flightIndex);
    return
  }

  const handleBack = (e) => {
    setSelectedId(0);
    setShowList(true);
  }

  return (
    <div className='flight-list-container'>
      {showList ? flightData.map(flightInfo => {
        let index = flightData.indexOf(flightInfo) + 1;
        return <li key={index} onClick={(e) => handleClick(e, index)}><FlightListItem flightInfo={flightInfo} /></li>
      }
      ) : null
      }
      {selectedId ?
        <div>
          <SelectedFlight data={flightData[selectedId - 1]} />
          <a className="btn btn-primary m-4" onClick={(e) => handleBack(e)}>Go back</a>
        </div>
        : null}
    </div>
  )
}

export default FlightList