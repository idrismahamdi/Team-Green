import React from 'react'
import FlightList from './FlightList'
import FlightSearchForm from './FlightSearchForm'
import {useState} from 'react'

const RoutesPage = () => {
  const [flightRoutes, setFlightRoutes] = useState([]);
  return (
    <div className='d-flex'>
      <div className='w-25 m-5 position-relative'>
        <FlightSearchForm setFlightRoutes = {setFlightRoutes} />
      </div><div className='w-75 m-5'>
        <FlightList flightData={flightRoutes}/>
      </div>
    </div>
  )
}

export default RoutesPage