import '../css/weather.css';

const Weather = ({ weather }) => {
    return (
        <div className="WeatherDiv">
            {weather && (
                <>
                    <div>
                        <h4>Today's Weather in Destination:</h4>
                    </div>
                    <div id="weatherIconTemp">
                        <img src={weather.icon} />
                        <h4 id="tempText">{weather.maxTemp}&deg;C</h4>
                    </div>
                    <div id="weatherExtraInfo">
                        <p id="extraInfoText">Precipitation:&nbsp;{weather.maxPop}%</p>
                        <p id="extraInfoText">Wind Speed: {weather.maxWindspeed} km/h</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Weather;