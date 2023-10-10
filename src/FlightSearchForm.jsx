import React, { useState } from 'react';
import './css/FlightSearchForm.css';

const FlightSearchForm = () => {
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState(1);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //placeholder for the form submit
    };

    return (
        <form className="flight-search-form" onSubmit={handleFormSubmit}>
            <label htmlFor="fromAirport">From:</label>
            <input type="text" id="fromAirport" value={fromAirport} onChange={(e) => setFromAirport(e.target.value)} required />

            <label htmlFor="toAirport">To:</label>
            <input type="text" id="toAirport" value={toAirport} onChange={(e) => setToAirport(e.target.value)} required />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

            <label htmlFor="passengers">Passengers:</label>
            <div className="passenger-input">
                <button type="button" onClick={() => setPassengers(prev => Math.max(prev - 1, 1))}>-</button>
                <input type="number" id="passengers" min="1" value={passengers} onChange={(e) => setPassengers(Math.max(Number(e.target.value), 1))} required />
                <button type="button" onClick={() => setPassengers(prev => prev + 1)}>+</button>
            </div>

            <button type="submit">Search</button>
        </form>
    );
};

export default FlightSearchForm;
