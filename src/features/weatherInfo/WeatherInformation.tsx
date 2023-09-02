import { WeatherHeader } from './WeatherHeader';
import { HourlyForecast } from './HourlyForecast';


//Weather Information Notes
/*

  Weather Information Header

    0) [START]
    1) Content:

      0) [START]
      1) Location (City, State/Province/Null, Country)
      2) Current Temperature (C/F)
      3) High / Low Temperature (C/F)
      4) Wind Speed
      5) UV Index
      6) Humidity
      n) [END]

    n) [END]

  Weather Information Hourly Forecast

    0) [START]
    1) Content:

      0) [START]
      n) [END]

    n) [END]

  END

*/



export function WeatherInformation(): JSX.Element {

  return (

    <section id="weather-info">
      <WeatherHeader />
      <HourlyForecast />
    </section>

  );

}