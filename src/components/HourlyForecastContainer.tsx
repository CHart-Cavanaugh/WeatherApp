import { useState } from 'react';



type ForecastInfoType = number;
type HourForecasts = [

  hourOne: ForecastInfoType,
  hourTwo: ForecastInfoType,
  hourThree: ForecastInfoType,
  hourFour: ForecastInfoType,
  hourFive: ForecastInfoType

];


const TEMP_FORECASTS: HourForecasts = [1, 2, 3, 4, 5];



const TEMP_FORECAST_REFRESH: ((val: number) => number) = (

  (val: number) => val === 12 ? 0 : val + 1

);




export function HourlyForecastContainer(): JSX.Element {

  const [forecasts, setForecasts]: [HourForecasts, Function] = useState(TEMP_FORECASTS);



  function refreshHourForecasts(refreshMethod: (val: ForecastInfoType) => ForecastInfoType): void {

    //Notes:
    /*

      - Create a copy of forecasts and store it in a temporary array.
      - Update each of the values in the temporary array using the refresh method.
      - Update forecasts using the updated temporary array.

    */

  }



  return (
    <section id="hourly-forecast-container">

    </section>
  );

}

