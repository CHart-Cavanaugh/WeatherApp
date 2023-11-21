import { AppState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { ForecastHours, infoAccessToolkit } from './infoAccessToolkit';



export function HourlyForecast(): JSX.Element {

  const refreshCount: number = useSelector((state: AppState) => state.refreshCount)
  const apiResponses: {}[] = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];
  const [forecastHours, setForecastHours]: [ForecastHours, Function] = useState(infoAccessToolkit.getUpdatedHours(selectedInfo));



  useEffect(() => {

    const currentTime = new Date();
    const timeStamp = (
      "[" +
      (currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()) +
      ":" +
      (currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()) +
      "]"
    );



    console.log(`${timeStamp} Hourly Forecasts Refreshed!`);

  }, [refreshCount]);



  return (

    <section id="weather-hourly-forecast">
      <section id="hourly-forecast-container">
        {infoAccessToolkit.getHourlyForecasts(selectedInfo, forecastHours)}
      </section>
    </section>


  );

}

