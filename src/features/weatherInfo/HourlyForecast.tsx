import { AppState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ForecastHours, infoAccessToolkit } from './infoAccessToolkit';



export function HourlyForecast(): JSX.Element {

  const apiResponses: {}[] = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];
  const [forecastHours, setForecastHours]: [ForecastHours, Function] = useState(infoAccessToolkit.getUpdatedHours(selectedInfo));



  return (

    <section id="weather-hourly-forecast">
      <section id="hourly-forecast-container">
        {infoAccessToolkit.getHourlyForecasts(selectedInfo, forecastHours)}
      </section>
    </section>


  );

}

