import { useEffect, useState } from 'react';
import '../css/weather.css';
import sunny from '../svgs/day.svg';
import rainy from '../svgs/rainy-6.svg';
import cloudy from '../svgs/cloudy-day-1.svg';
import snowy from '../svgs/snowy-5.svg';
import thunder from '../svgs/thunder.svg';
import weatherSag from '../svgs/weather_sagittarius.svg';
import weatherMaybe from '../svgs/weather.svg';
import axios from 'axios';

const Weather = ({ weather }) => {

    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        axios.get('http://18.168.101.57:3005/weather?latitude=51.5072&longitude=0.1276').then(data => {

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

            setWeatherData(wD)

        });
    }, [])

    return (
        <div className="WeatherDiv">
            {weatherData && (
                <>
                    <div id="weatherIconTemp">
                        <img src={weatherData.icon} />
                        <h4 id="tempText">{weatherData.maxTemp}</h4>
                    </div>
                    <div id="weatherExtraInfo">
                        <p id="extraInfoText">Precipitation:&nbsp;{weatherData.maxPop}%</p>
                        <p id="extraInfoText">Wind Speed: {weatherData.maxWindspeed}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Weather;