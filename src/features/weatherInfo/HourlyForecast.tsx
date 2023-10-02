import { AppState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';



type ForecastInfoType = number;
type HourForecasts = [

  hourOne: ForecastInfoType,
  hourTwo: ForecastInfoType,
  hourThree: ForecastInfoType,
  hourFour: ForecastInfoType,
  hourFive: ForecastInfoType

];



const DEFAULT_HOURLY_TIMESTAMPS: HourForecasts = [1, 2, 3, 4, 5];




export function HourlyForecast(): JSX.Element {

  function getUpdatedHours(selectedInfo: any): HourForecasts {

    const timeZone = selectedInfo ? (selectedInfo as { location: { tz_id: string } }).location.tz_id : "Europe/London";
    const localDate: Date = new Date();
    const currentDate = new Date(localDate.toLocaleString("en-US", { timeZone: timeZone }))
    const currentHour: number = selectedInfo ? currentDate.getHours() : 0;
    const updatedHours: HourForecasts = DEFAULT_HOURLY_TIMESTAMPS;



    for (let i = 0; i < updatedHours.length; i++)
      updatedHours[i] = (

        currentHour + i < 12 ? currentHour + i
          : currentHour + i < 24 ? currentHour + i - 12
            : currentHour + i - 24

      );



    return updatedHours;

  }

  function isBeforeMidday(selectedInfo: any, hourOffset: number = 0): boolean {

    const timeZone = selectedInfo ? (selectedInfo as { location: { tz_id: string } }).location.tz_id : "Europe/London";
    const localDate: Date = new Date();
    const currentDate = new Date(localDate.toLocaleString("en-US", { timeZone: timeZone }))
    let currentHour: number = (selectedInfo ? currentDate.getHours() : 0) + hourOffset;

    currentHour = currentHour < 24 ? currentHour : currentHour - 24;


    return currentHour < 12;

  }

  function getHourlyForecasts(timestamps: HourForecasts): JSX.Element {

    return (

      <>
        {timestamps.map((val, index) => {

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
              <footer className="hourly-info hourly-timestamp">
                <h4>
                  {
                    val === 0 && isBeforeMidday(selectedInfo, index) ? <span>Midnight</span>
                      : val === 0 && !isBeforeMidday(selectedInfo, index) ? <span>Noon</span>
                        : <span><span>{val}</span> <span>{isBeforeMidday(selectedInfo, index) ? "AM" : "PM"}</span></span>
                  }
                </h4>
              </footer>
            </div>

          )

        })}
      </>

    );

  }



  const apiResponses = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];
  const [forecastTimestamps, setForecastTimestamps]: [HourForecasts, Function] = useState(getUpdatedHours(selectedInfo));



  return (

    <section id="weather-hourly-forecast">
      <section id="hourly-forecast-container">
        {getHourlyForecasts(forecastTimestamps)}
      </section>
    </section>


  );

}

