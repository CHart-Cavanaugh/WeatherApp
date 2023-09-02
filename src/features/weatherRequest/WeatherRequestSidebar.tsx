import { WeatherRequestForm } from './WeatherRequestForm';
import { WeatherRequestHistory } from './WeatherRequestHistory';



export function WeatherRequestSidebar(): JSX.Element {

  return (

    <aside id="weather-request-sidebar">
      <WeatherRequestForm />
      <WeatherRequestHistory />
    </aside>

  );

}