import { AppState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { ForecastHours, infoAccessToolkit } from './infoAccessToolkit';
import { updateRefreshCount } from '../../app/slices/refreshCountSlice';



export function HourlyForecast(): JSX.Element {

  const dispatch = useDispatch();

  const refreshCount: number = useSelector((state: AppState) => state.refreshCount)
  const apiResponses: {}[] = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);

  const selectedInfo = apiResponses[currentSelection];
  const [forecastHours, setForecastHours]: [ForecastHours, Function] = useState(infoAccessToolkit.getUpdatedHours(selectedInfo));



  useEffect(() => {

    const currentDate = new Date();
    const modifiedDate = (() => {

      const currentDate = new Date();

      currentDate.setHours(currentDate.getHours() + 1);
      currentDate.setMinutes(0);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);

      return currentDate;

    })();



    setTimeout(() => {

      dispatch(updateRefreshCount());



      setInterval(() => {

        dispatch(updateRefreshCount());

      }, 60 * 60 * 1000);

    }, (modifiedDate.getTime() - currentDate.getTime()));

  }, []);



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

