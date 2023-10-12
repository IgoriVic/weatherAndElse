import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import axios from 'axios';
import { WeatherData } from '../Interfaces/interfaces';
import PlanetsDropdown from '../FuncComponents/PlanetsDropdown/PlanetDropdown';

// add an images for weather

interface DataItem {
  answer: string;
  image: string;
}

const MainPage: React.FC = () => {
  const [apiData, setApiData] = useState<DataItem | null>(null);
  const [weathData, setWeathData] = useState<WeatherData | null>(null);

  const sunriseF = weathData?.sys.sunrise;
  const sunsetS = weathData?.sys.sunset;

  const sunriseTime = sunriseF && new Date(sunriseF * 1000).toLocaleTimeString();
  const sunsetTime = sunsetS && new Date(sunsetS * 1000).toLocaleTimeString();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const resp = await axios.get<WeatherData>(
          'https://api.openweathermap.org/data/2.5/weather?lat=47.0122&lon=28.8605&appid=e0d10aa9cbd0d357f14d7c072a50aba2'
        );

        const respData: WeatherData = resp.data;
        setWeathData(respData);

        const localWeatherData = respData;
        localStorage.setItem("WeatherDataChisinau", JSON.stringify(localWeatherData));

      } catch (error) {
        alert('Request Error');
      }
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem>('https://yesno.wtf/api');
        const responceData: DataItem = response.data;
        setApiData(responceData);
      } catch (error) {
        alert('Request Error');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='data-wrapper'>
      {/* <div className='main-div'>
        <h1>My Data:</h1> */}
        {/* {apiData && (
          <div className='answer'>
            <p>Answer: {apiData.answer}</p>
            <img src={apiData.image} alt='gif'></img>
          </div>
        )} */}
      {/* </div> */}
      <div className='weather-wrapper'>
        {weathData && (
          <div className='weather-response'>
            <h1>Wheather Data</h1>
            <p>Country: {weathData.sys.country}</p>
            <p>City: {weathData.name}</p>
            <p>Clouds Info: {weathData.clouds.all}</p>
            <p>Wind Speed: {weathData.wind.speed}</p>
            <p>Feels Like: {weathData.main.feels_like}</p>
            <p>Atmosphere Pressure: {weathData.main.pressure}</p>
            <p>Temprerature: {weathData.main.temp}</p>
            <p>Sunrise Time: {sunriseTime}</p>
            <p>Sunset Time: {sunsetTime}</p>
          </div>
        )}
      </div>
      <>
          <PlanetsDropdown />
      </>
    </div>
  );
};

export default MainPage;
