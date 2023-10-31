export type ForecastHour = number;
export type ForecastHours = [

  hourOne: ForecastHour,
  hourTwo: ForecastHour,
  hourThree: ForecastHour,
  hourFour: ForecastHour,
  hourFive: ForecastHour

];



interface Condition {

  text: string,
  icon: string,

};



const DEFAULT_FORECAST_HOURS: ForecastHours = [1, 2, 3, 4, 5];



function getCurrentLocation(selectedInfo: any): string {

  const getSelectedLocation: () => string = () => {

    const cityName: string = (selectedInfo as { location: { name: string } }).location.name;
    // let countryName: string = (selectedInfo as { location: { country: string } }).location.country;



    // if (countryName.includes("USA") || countryName.includes("United States of America"))
    //   countryName = "USA";
    // else if (countryName.includes("UK") || countryName.includes("United Kingdom"))
    //   countryName = "UK";



    return `${cityName}`;

  };
  const DEFAULT_LOCATION = "someCity";
  const currLocation = selectedInfo ? getSelectedLocation() : DEFAULT_LOCATION;



  return currLocation;

}

function getCurrentDay(selectedInfo: any): string {

  const DEFAULT_RETURN: string = "";
  const DAYS_OF_WEEK: { [index: number]: string } = {

    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"


  };



  let currentDate: null | Date = null;
  let currentDay: string = "";



  if (selectedInfo) {

    currentDate = new Date((selectedInfo as { location: { localtime: string } }).location.localtime);
    currentDay = DAYS_OF_WEEK[currentDate.getDay()];



    return currentDay;

  }



  return DEFAULT_RETURN;

}

function getCurrentTemp(selectedInfo: any): number {

  const getSelectedTemp: () => number = () => (selectedInfo as { current: { temp_f: number } }).current.temp_f;
  const currentTemp: number = selectedInfo ? getSelectedTemp() : 0;



  return currentTemp;

}

function getCurrentCondition(selectedInfo: any): Condition {

  const getSelectedCondition: () => Condition = () => selectedInfo.current.condition;



  const DEFAULT_CONDITION: Condition = {

    text: "clear",
    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",

  };
  const currentCondition: Condition = selectedInfo ? getSelectedCondition() : DEFAULT_CONDITION;



  return currentCondition;

}

function getCurrentWindInfo(selectedInfo: any): string {

  const getSelectedWindInfo: () => string = () => (

    `${(selectedInfo as { current: { wind_dir: string } }).current.wind_dir} - ` +
    `${(selectedInfo as { current: { wind_mph: number } }).current.wind_mph} mph`

  );
  const currWindInfo: string = selectedInfo ? getSelectedWindInfo() : `"N" - 0 mph`;





  return currWindInfo;

}

function getCurrentHumidityInfo(selectedInfo: any): string {

  const getSelectedHumidity: () => string = () => `${(selectedInfo as { current: { humidity: number } }).current.humidity} %`;
  const currHumidity: string = selectedInfo ? getSelectedHumidity() : "0 %";



  return currHumidity;

}

function getCurrentUV(selectedInfo: any): number {

  const getSelectedUV: () => number = () => (selectedInfo as { current: { uv: number } }).current.uv;
  const currentUV: number = selectedInfo ? getSelectedUV() : 0;



  return currentUV;

}

function getCurrentPressureInfo(selectedInfo: any): string {

  const getSelectedPressure: () => string = () => `${(selectedInfo as { current: { pressure_in: number } }).current.pressure_in} in`;
  const currPressure: string = selectedInfo ? getSelectedPressure() : "0.00 in";



  return currPressure;

}

function getCurrentVisibilityInfo(selectedInfo: any): string {

  const getSelectedVisibility: () => string = () => `${(selectedInfo as { current: { vis_miles: number } }).current.vis_miles} mi`;
  const currVisibility: string = selectedInfo ? getSelectedVisibility() : "0.0 mi";



  return currVisibility;

}



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
  const updatedHours: ForecastHours = DEFAULT_FORECAST_HOURS;



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

  let currentHour: number = getCurrentHour(selectedInfo, getCurrentDate(getTimeZone(selectedInfo))) + hourOffset;



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



export {

  //CONSTANTS
  DEFAULT_FORECAST_HOURS,



  //CURRENT WEATHER INFO FUNCTIONS
  getCurrentLocation,
  getCurrentDay,
  getCurrentTemp,
  getCurrentCondition,
  getCurrentWindInfo,
  getCurrentHumidityInfo,
  getCurrentUV,
  getCurrentPressureInfo,
  getCurrentVisibilityInfo,



  //HOURLY FORECAST INFO FUNCTIONS
  getTimeZone,
  getCurrentHour,
  getCurrentDate,
  getUpdatedHours,
  getForecastDays,
  isBeforeMidday,
  getHourlyForecasts,

};

export * as infoAccessToolkit from './infoAccessToolkit';