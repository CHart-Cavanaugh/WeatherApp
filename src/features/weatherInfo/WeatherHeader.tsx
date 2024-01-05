import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppState } from "../../app/store";

import { infoAccessToolkit } from "./infoAccessToolkit";



export function WeatherHeader(): JSX.Element {

  const apiResponses = useSelector((state: AppState) => state.apiResponses);
  const currentSelection: number = useSelector((state: AppState) => state.currentSelection);
  const selectedInfo = apiResponses[currentSelection];



  return (

    <header id="weather-header">
      <section id="location-info">
        <section id="city-info">
          <h3 id="city-val"
            className="info-val"
          >
            {infoAccessToolkit.getCurrentLocation(selectedInfo)}
          </h3>
        </section>
        <section id="day-info">
          <h3 id="day-val"
            className="info-val"
          >
            {infoAccessToolkit.getCurrentDay(selectedInfo)}
          </h3>
        </section>
      </section>
      <section id="main-info">
        <div id="main-col-left"
          className="main-column"
        >
          <div id="temp-info">
            {/* <h4 id="current-temp-label"
              className="info-label"
            >
              Temperature:
            </h4> */}
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
              {infoAccessToolkit.getCurrentTemp(selectedInfo)}
            </p>
          </div>
          <div id="condition-info">
            {/* <h4 id="current-condition-label"
              className="info-label"
            >
              Condition:
            </h4> */}
            <figure>
              <div className="current-condition-image">
                <img src={infoAccessToolkit.getCurrentCondition(selectedInfo).icon} alt="current condition" />
              </div>
              <figcaption id="current-condition-val"
                className="info-val"
              >
                {infoAccessToolkit.getCurrentCondition(selectedInfo).text}
              </figcaption>
            </figure>
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
              {infoAccessToolkit.getCurrentWindInfo(selectedInfo)}
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
              {infoAccessToolkit.getCurrentHumidityInfo(selectedInfo)}
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
              {infoAccessToolkit.getCurrentUV(selectedInfo)}
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
              {infoAccessToolkit.getCurrentPressureInfo(selectedInfo)}
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
              {infoAccessToolkit.getCurrentVisibilityInfo(selectedInfo)}
            </p>
          </div>
        </div>
      </section>
    </header>

  );

}