export function WeatherInterface() {

  return (

    <main id="weather-interface">
      <WeatherRequestForm />
      <WeatherInformation />
      {window.innerWidth < 768 ? <InterfaceTabs /> : null}
    </main>

  );

}