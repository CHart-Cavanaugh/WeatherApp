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
      {forecasts.map((val, index) => {

        return (

          <div key={`hour-forecast-${index}`}>
            <section key="hourly-temperature" className="hourly-info hourly-temperature">
              <h4>Temperature:</h4>
              <p>0</p>
            </section>
            <section key="hourly-humidity" className="hourly-info hourly-humidity">
              <h4>Humidity:</h4>
              <p>0 %</p>
            </section>
            <section key="hourly-wind" className="hourly-info hourly-wind">
              <h4>Wind:</h4>
              <p>
                <span>"N"</span> - <span>0</span> mph
              </p>
            </section>
            <footer className="hourly-info hourly-hour">
              <h4>
                {
                  index === 0 ? <span>Now</span> :
                    index === 12 ? <span>Noon</span> :
                      <span><span>{index}</span> <span>AM</span></span>
                }
              </h4>
            </footer>
          </div>

        )

      })}
    </section>
  );

}

