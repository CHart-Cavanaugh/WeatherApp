import { AppState } from '../../app/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';



type ForecastHour = number;
type ForecastHours = [

  hourOne: ForecastHour,
  hourTwo: ForecastHour,
  hourThree: ForecastHour,
  hourFour: ForecastHour,
  hourFive: ForecastHour

];



const DEFAULT_HOURLY_TIMESTAMPS: ForecastHours = [1, 2, 3, 4, 5];




export function HourlyForecast(): JSX.Element {

  function getTimeZone(selectedInfo: any): string {

    return selectedInfo ? (selectedInfo as { location: { tz_id: string } }).location.tz_id : "Europe/London";

  }

  function getCurrentHour(selectedInfo: any, currentDate: Date): number {

    return selectedInfo ? currentDate.getHours() : 0;

  }

  function getCurrentDate(timeZone: string): Date {

    const localDate: Date = new Date();
    const currentDate = new Date(localDate.toLocaleString("en-US", { timeZone: timeZone }))



    return currentDate;

  }



  function getUpdatedHours(selectedInfo: any): ForecastHours {

    const currentHour: number = getCurrentHour(selectedInfo, getCurrentDate(getTimeZone(selectedInfo)));
    const updatedHours: ForecastHours = DEFAULT_HOURLY_TIMESTAMPS;



    for (let i = 0; i < updatedHours.length; i++)
      updatedHours[i] = (

        currentHour + i < 12 ? currentHour + i
          : currentHour + i < 24 ? currentHour + i - 12
            : currentHour + i - 24

      );



    return updatedHours;

  }

  function getForecastDays(selectedInfo: any): { date: string }[] {

    return !selectedInfo ? []
      : (selectedInfo as { forecast: { forecastday: { date: string }[] } }).forecast.forecastday;

  }




  function isBeforeMidday(selectedInfo: any, hourOffset: number = 0): boolean {

    let currentHour: number = getCurrentHour(selectedInfo, getCurrentDate(getTimeZone(selectedInfo)));



    currentHour = currentHour < 24 ? currentHour : currentHour - 24;



    return currentHour < 12;

  }

  function getHourlyForecasts(selectedInfo: any, timestamps: ForecastHours): JSX.Element {

    const currentDate = getCurrentDate(getTimeZone(selectedInfo));
    const currentHour: number = getCurrentHour(selectedInfo, currentDate);
    const selectedForecastDays: { date: string }[] = getForecastDays(selectedInfo);
    const forecastDaysObj: { [index: number]: {} } = {};



    for (let i = 0; i < 2; i++)
      forecastDaysObj[currentDate.getDate() + i] = selectedForecastDays[i];



    return (

      <>
        {timestamps.map((val, index) => {

          const hourlyForecastDay = getCurrentDate(getTimeZone(selectedInfo));
          const forecastHour = currentHour + index < 24 ? currentHour + index : currentHour + index - 24;
          let temp: number = 0;
          let humidity: number = 0;
          let wind_dir: string = "N";
          let wind_mph: number = 0;



          hourlyForecastDay.setHours(forecastHour);



          temp = !selectedInfo ? 0 : (
            forecastDaysObj[hourlyForecastDay.getDate()] as { hour: { temp_f: number }[] }
          ).hour[forecastHour].temp_f;
          humidity = !selectedInfo ? 0 : (
            forecastDaysObj[hourlyForecastDay.getDate()] as { hour: { humidity: number }[] }
          ).hour[forecastHour].humidity;
          wind_dir = !selectedInfo ? "N" : (
            forecastDaysObj[hourlyForecastDay.getDate()] as { hour: { wind_dir: string }[] }
          ).hour[forecastHour].wind_dir;
          wind_mph = !selectedInfo ? 0 : (
            forecastDaysObj[hourlyForecastDay.getDate()] as { hour: { wind_mph: number }[] }
          ).hour[forecastHour].wind_mph;




          return (

            <div key={`hour-forecast-${index}`}>
              <section key="hourly-condition" className="hourly-info hourly-condition">
              </section>
              <section key="hourly-temperature" className="hourly-info hourly-temperature">
                <h4>Temperature:</h4>
                <p>{temp} <b>F</b></p>
              </section>
              <section key="hourly-humidity" className="hourly-info hourly-humidity">
                <h4>Humidity:</h4>
                <p>{humidity} %</p>
              </section>
              <section key="hourly-wind" className="hourly-info hourly-wind">
                <h4>Wind:</h4>
                <p>
                  <span>{wind_dir}</span> - <span>{wind_mph}</span> mph
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



  const apiResponses: {}[] = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];
  const [forecastTimestamps, setForecastTimestamps]: [ForecastHours, Function] = useState(getUpdatedHours(selectedInfo));



  return (

    <section id="weather-hourly-forecast">
      <section id="hourly-forecast-container">
        {getHourlyForecasts(selectedInfo, forecastTimestamps)}
      </section>
    </section>


  );

}

