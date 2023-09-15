import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppState } from "../../app/store";

import { infoAccessToolkit } from "./infoAccessToolkit";



export function WeatherHeader(): JSX.Element {

  function getCurrentLocation(selectedInfo: any): string {

    const getSelectedLocation: () => string = () => (

      (selectedInfo as { location: { name: string } }).location.name +
      ", " +
      (selectedInfo as { location: { country: string } }).location.country

    );
    const currLocation = selectedInfo ? getSelectedLocation() : "someCity, someCountry";


    return currLocation;

  }

  function getCurrentTemp(selectedInfo: any): number {

    const getSelectedTemp: () => number = () => (selectedInfo as { current: { temp_f: number } }).current.temp_f;
    const currentTemp: number = selectedInfo ? getSelectedTemp() : 0;



    return currentTemp;

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



  const apiResponses = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];



  return (

    <header id="weather-header">
      <section id="location-info">
        <h3 id="location-val"
          className="info-label"
        >
          {getCurrentLocation(selectedInfo)}
        </h3>
      </section>
      <section id="main-info">
        <div id="main-col-left"
          className="main-column"
        >
          <div id="temp-info">
            <h4 id="current-temp-label"
              className="info-label"
            >
              Temperature:
            </h4>
            <div id="temp-unit-labels">
              <p id="temp-unit-celcius"
                className="temp-unit"
              >
                C
              </p>
              <p id="temp-unit-fahrenheit"
                className="temp-unit"
              >
                F
              </p>
            </div>
            <p id="current-temp-val"
              className="info-val"
            >
              {getCurrentTemp(selectedInfo)}
            </p>
          </div>
        </div>
        <div id="main-col-right"
          className="main-column"
        >
          <div id="wind-info">
            <h4 id="wind-label"
              className="info-label"
            >
              Wind:
            </h4>
            <p id="wind-val"
              className="info-val"
            >
              {getCurrentWindInfo(selectedInfo)}
            </p>
          </div>
          <div id="humidity-info">
            <h4 id="humidity-label"
              className="info-label"
            >
              Humidity:
            </h4>
            <p id="humidity-val"
              className="info-val"
            >
              {getCurrentHumidityInfo(selectedInfo)}
            </p>
          </div>
          <div id="uv-index-info">
            <h4 id="uv-index-label"
              className="info-label"
            >
              UV Index:
            </h4>
            <p id="uv-index-val"
              className="info-val"
            >
              {getCurrentUV(selectedInfo)}
            </p>
          </div>
          <div id="pressure-info">
            <h4 id="pressure-label"
              className="info-label"
            >
              Pressure:
            </h4>
            <p id="pressure-val"
              className="info-val"
            >
              {getCurrentPressureInfo(selectedInfo)}
            </p>
          </div>
          <div id="visibility-info">
            <h4 id="visibility-label"
              className="info-label"
            >
              Visibility:
            </h4>
            <p id="visibility-val"
              className="info-val"
            >
              {getCurrentVisibilityInfo(selectedInfo)}
            </p>
          </div>
        </div>
      </section>
    </header>

  );

}