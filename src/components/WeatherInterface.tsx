import { WeatherRequestForm } from "./WeatherRequestForm";
import { WeatherInformation } from "./WeatherInformation";
import { InterfaceTabs } from "./InterfaceTabs";



export function WeatherInterface() {

  return (

    <main id="weather-interface">
      <WeatherRequestForm />
      <WeatherInformation />
      {window.innerWidth < 768 ? <InterfaceTabs /> : null}
    </main>

  );

}