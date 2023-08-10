import { InterfaceSidebar } from "./InterfaceSidebar";
import { WeatherInformation } from "./WeatherInformation";
import { InterfaceTabs } from "./InterfaceTabs";



export function WeatherInterface(): JSX.Element {

  return (

    <main id="weather-interface">
      <InterfaceSidebar />
      <WeatherInformation />
      {window.innerWidth < 768 ? <InterfaceTabs /> : null}
    </main>

  );

}