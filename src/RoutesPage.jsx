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
        {flightRoutes.length > 0 ? <FlightList flightData={flightRoutes}/> : <h3>No flights available with selected search options.</h3> }
      </div>
    </div>
  )
}

export default RoutesPage