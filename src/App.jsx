import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Current from "./components/current";
import Forecast from "./Components/Forecast.";
import '../node_modules/bootstrap/dist/js/bootstrap'

function App() {
  const [city, setCity] = useState();
  const [clickedCity,setClickedCity]=useState();

  const [citysuggestion, setCitySuggestion] = useState([]);
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompURL =
    "https://api.weatherapi.com/v1/search.json?key=7668132597234e5aa2b174312241510&q=";

  const WeatherURL = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=7668132597234e5aa2b174312241510&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchAutoCompAPI();
    }
  }, [city]);
  const fetchAutoCompAPI = async () => {
    try {
      const response = await axios.get(autoCompURL + city);
      const resp = response.data;
      console.log(resp);
      const cityData = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      });
      setCitySuggestion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSeletedCity = (city) => {
    console.log("clicked city", city);
    try {
      setClickedCity(city)
      fetchWeatherAPI(city);
      setCitySuggestion([]);
    } catch (e) {
      console.log("weather API error", e);
    }
  };

  const fetchWeatherAPI = async () => {
    const response = await axios.get(WeatherURL(city));
    const resp = response.data;
    console.log(resp);
    setCurrentWeather(resp.current);
    setForecast(resp.forecast);
    setLocation(resp.location);
  };
  return (
    <div className="container bg-primary p-5 rounded mt-5">
      <h3 className="text-center text-white mb-3">Weather forecasting</h3>
      <input
        type="text"
        placeholder="Enter city name"
        value={clickedCity}
        className="form-control"
        onChange={(e) => {
          setCity(e.target.value);
          if(e.target.value==="")
          {
            setCurrentWeather();
            setForecast();
            setLocation();
            setClickedCity();
          }
        }}
      />

      {citysuggestion &&
        citysuggestion.map((data, index) => {
          return (
            <div
              key={index}
              className="text-center bg-info rounded p-1 bg-opacity-10 border border-info border-opacity-25 text-white"
              style={{ cursor: "pointer" }}
              onClick={() => handleSeletedCity(data)}
            >
              {data}
            </div>
          );
        })}
      {currentWeather && (
        <Current currentWeather={currentWeather} location={location} />
      
      )}
      {forecast && <Forecast forecast={forecast} location={location}/>}
    </div>

  );
}

export default App;
