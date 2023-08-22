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
      <header>
        <section id="location-info">
          <h3 id="location-val"
            className="info-label"
          >
            someLocation
          </h3>
        </section>
        <section id="main-info">
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
              <p id="temp-unit-celcius"
                className="temp-unit"
              >
                F
              </p>
            </div>
            <p id="current-temp-val"
              className="info-val"
            >
              0
            </p>
          </div>
          <div id="wind-info">
            <div id="wind-dir-info">
              <h4 id="wind-dir-label"
                className="info-label"
              >
                Wind Direction:
              </h4>
              <p id="wind-dir-val"
                className="info-val"
              >
                "E"
              </p>
            </div>
            <div id="wind-speed-info">
              <h4 id="wind-speed-label"
                className="info-label"
              >
                Wind Speed:
              </h4>
              <p id="wind-speed-val"
                className="info-val"
              >
                <span>0</span> <span>mph</span>
              </p>
            </div>
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
              <span>0</span> <span>%</span>
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
              0
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
              <span>0.00</span> <span>in</span>
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
              <span>0.0</span> <span>mi</span>
            </p>
          </div>
        </section>
      </header>
      <section></section>
    </section>

  );

}