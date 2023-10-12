import React from 'react'
import FlightList from './FlightList'
import FlightSearchForm from './FlightSearchForm'
import { useState } from 'react'
import Weather from './components/Weather';
import AssociatedLocations from './components/AssociatedLocations';


const RoutesPage = () => {
  const [flightRoutes, setFlightRoutes] = useState([]);
  const [weather, setWeather] = useState();
  const [associatedLocations, setAssociatedLocations] = useState();

  return (

    <div className='d-flex grid-container'>
      <div className='w-25 m-5 position-relative item2'>
        <FlightSearchForm setFlightRoutes={setFlightRoutes} setWeather={setWeather} setAssociatedLocations={setAssociatedLocations} />
      </div>
      <div className='w-75 m-5 item3'>
        {flightRoutes.length > 0 ? <FlightList flightData={flightRoutes} /> : <h3>No flights available with selected search options.</h3>}
      </div>
      {weather && <Weather weather={weather} />}
      {associatedLocations && <AssociatedLocations associatedLocations={associatedLocations} />}
    </div>
  )
}

export default RoutesPage