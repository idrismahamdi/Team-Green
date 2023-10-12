import React, { useState, useEffect } from 'react';
import './css/FlightSearchForm.css';
import axios from 'axios';
import Papa from 'papaparse';
import airports from './flightdata/airports.csv';
import { Alert } from 'bootstrap';
import sunny from './svgs/day.svg';
import rainy from './svgs/rainy-6.svg';
import cloudy from './svgs/cloudy-day-1.svg';
import snowy from './svgs/snowy-5.svg';
import thunder from './svgs/thunder.svg';

const FlightSearchForm = ({ setFlightRoutes, setWeather, setAssociatedLocations }) => {
    const [airportData, setAirportData] = useState([]);
    const [fromAirport, setFromAirport] = useState('');
    const [toAirport, setToAirport] = useState('');
    const [departureDate, setDeparture] = useState('');

    const [passengers, setPassengers] = useState(1);
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [toSuggestions, setToSuggestions] = useState([]);
    const [flightClass, setFlightClass] = useState('ECONOMY');
    const [maxPrice, setMaxPrice] = useState('');
    const [fromLL, setFromLL] = useState({});
    const [toLL, setToLL] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(airports);
            const text = await response.text();
            Papa.parse(text, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: function (result) {
                    setAirportData(result.data.slice(0, -1));
                },
            });
        };
        fetchData();
    }, []);

    const handleSelection = (longitude, latitude, iata, airportName, type) => {
        if (type === 'from') {
            setFromAirport(iata);
            setFromSuggestions([]);
            setFromLL({ longitude, latitude })
        } else {
            setToAirport(iata);
            setToSuggestions([]);
            setToLL({ longitude, latitude })
        }
    };

    const handleBlur = (type) => {
        setTimeout(() => {
            if (type === 'from') {
                setFromSuggestions([]);
            } else if (type === 'to') {
                setToSuggestions([]);
            }
        }, 150); //delay
    };

    const suggest = (query, type) => {
        if (query.length > 0) {
            const suggestions = airportData
                .filter(airport => airport.airport.toLowerCase().includes(query.toLowerCase()))
                .slice(0, 5);

            if (type === 'from') {
                setFromSuggestions(suggestions);
            } else if (type === 'to') {
                setToSuggestions(suggestions);
            }
        } else {
            if (type === 'from') {
                setFromSuggestions([]);
            } else if (type === 'to') {
                setToSuggestions([]);
            }
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const fromAirportData = airportData.find(a => a.iata === fromAirport || a.airport === fromAirport);
        const toAirportData = airportData.find(a => a.iata === toAirport || a.airport === toAirport);

        const userFlightData = {
            ...fromAirportData,
            ...toAirportData,
            departure: departureDate,

            passengers: passengers,
            flightClass: flightClass,
            maxPrice: parseFloat(maxPrice) || null,
        };

        try {

            var flightReceived = false;

            const res = await axios.get(
                `http://18.168.101.57:3005/api/flightroutes?departure=${fromAirport}&arrival=${toAirport}&date=${departureDate}&noOfBookings=${passengers}&flightClass=${flightClass}&maxPrice=${maxPrice}`
            ).then(data => {
                flightReceived = true;
                setFlightRoutes(data.data)
            }).catch(function (error) {
                setFlightRoutes([])
                setAssociatedLocations(null)
                setWeather(null)
            });

            if (flightReceived) {
                axios.get(`http://18.168.101.57:3005/api/recommendations?airportArrivalCode=${toAirport}`).then(data => {
                    setAssociatedLocations(data.data)
                }).catch(function (error) {
                    setAssociatedLocations(null)
                });

                axios.get(`http://18.168.101.57:3005/weather?latitude=${toLL.latitude}&longitude=${toLL.longitude}`).then(data => {
                    const wD = data.data;
                    if (wD.maxPop > 90) {
                        wD.icon = thunder;
                    } else if (wD.maxPop > 70) {
                        wD.icon = rainy;
                    } else if (wD.maxWindSpeed > 30) {
                        wD.icon = cloudy;
                    } else if (wD.minTemp < 0) {
                        wD.icon = snowy;
                    } else {
                        wD.icon = sunny;
                    }
                    setWeather(wD)
                }).catch(function (error) {
                    setWeather(null)
                });
            }

        } catch (error) {
            // Handle error
            console.log(error)
        }
    };

    return (
        <form className="flight-search-form" onSubmit={handleFormSubmit}>
            <div className="input-wrapper">
                <label htmlFor="fromAirport">From:</label>
                <input
                    type="text"
                    id="fromAirport"
                    value={fromAirport}
                    onChange={(e) => {
                        setFromAirport(e.target.value);
                        suggest(e.target.value, 'from');
                    }}
                    onBlur={() => handleBlur('from')}
                    required
                />
                {fromSuggestions && (
                    <ul className="suggestions">
                        {fromSuggestions.map((suggestion, idx) => (
                            <li key={idx} onClick={() => handleSelection(suggestion.longitude, suggestion.latitude, suggestion.iata, suggestion.airport, 'from')}>
                                {suggestion.airport} ({suggestion.iata})
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="input-wrapper">
                <label htmlFor="toAirport">To:</label>
                <input
                    type="text"
                    id="toAirport"
                    value={toAirport}
                    onChange={(e) => {
                        setToAirport(e.target.value);
                        suggest(e.target.value, 'to');
                    }}
                    onBlur={() => handleBlur('to')}
                    required
                />
                {toSuggestions && (
                    <ul className="suggestions">
                        {toSuggestions.map((suggestion, idx) => {
                            return (<li key={idx} onClick={() => handleSelection(suggestion.longitude, suggestion.latitude, suggestion.iata, suggestion.airport, 'to')}>
                                {suggestion.airport} ({suggestion.iata})
                            </li>)
                        })}
                    </ul>
                )}
            </div>

            <label htmlFor="departure-date">Departure Date:</label>
            <input type="date" id="departure-date" value={departureDate} onChange={(e) => setDeparture(e.target.value)} required />

            <label htmlFor="passengers">Passengers:</label>
            <div className="passenger-input">
                <button type="button" onClick={() => setPassengers(prev => Math.max(prev - 1, 1))}>-</button>
                <input type="number" id="passengers" min="1" value={passengers} onChange={(e) => setPassengers(Math.max(Number(e.target.value), 1))} required />
                <button type="button" onClick={() => setPassengers(prev => prev + 1)}>+</button>
            </div>

            <label htmlFor="flightClass">Flight Class:</label>
            <select
                id="flightClass"
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}
                required>
                <option value="ECONOMY">Economy</option>
                <option value="PREMIUM_ECONOMY">Premium Economy</option>
                <option value="BUSINESS">Business</option>
                <option value="FIRST">First</option>
            </select>

            <label htmlFor="maxPrice">Maximum Price:</label>
            <input
                type="number"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Enter max price"
                step="5.00"
            />

            <button type="submit">Search</button>
        </form>
    );
};

export default FlightSearchForm;
