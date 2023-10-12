import React, { useState, useEffect } from 'react';
import '../css/associatedLocations.css';
import axios from 'axios';

const AssociatedLocations = ({ associatedLocations }) => {
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