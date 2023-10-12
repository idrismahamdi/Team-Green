import React, { useState, useEffect } from 'react';
import '../css/associatedLocations.css';
import axios from 'axios';

const AssociatedLocations = () => {

    const [associatedLocations, setAssociatedLocations] = useState([]);

    useEffect(() => {
        //OTZ
        axios.get('http://18.168.101.57:3005/api/recommendations?airportArrivalCode=JFK').then(data => {
            setAssociatedLocations(data.data)
        });
    }, [])

    return (
        <div className='AssociatedLocationsDiv'>
            Other destinations you may be interested in:
            <div className='AssociatedLocationsCities'>
                {associatedLocations.map(loc => (
                    <p>{loc.city}</p>
                ))}
            </div>
        </div>
    )
}

export default AssociatedLocations