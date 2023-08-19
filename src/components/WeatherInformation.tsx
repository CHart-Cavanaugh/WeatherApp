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
        <section>
          <h3 id="location-label"
            className="weather-info-label"
          >
            someLocation
          </h3>
        </section>
        <section>
          <div id="temp-info-container">
            <h4
              className="weather-info-label"
              id="current-temp"
            >
              Temperature:
            </h4>
            <div
              id="temp-unit-labels"
            >
              <p
                className="temp-unit"
                id="temp-unit-celcius"
              >
                C
              </p>
              <p
                className="temp-unit"
                id="temp-unit-celcius"
              >
                F
              </p>
            </div>
            <h1>0</h1>
          </div>
          <div id="wind-info-container">
            <h4 id="wind-dir-label"
              className="weather-info-label"
            >
              Wind Direction: <span>"E"</span>
            </h4>
            <h4 id="wind-speed-label"
              className="weather-info-label"

            >
              Wind Speed: <span>0</span> mph
            </h4>
          </div>
          <div id="displaced-labels">
            <h4
              className="weather-info-label"
              id="current-humidity"
            >
              Humidity: <span>0</span> %
            </h4>
            <h4
              className="weather-info-label"
              id="uv-index-label"
            >
              UV Index: <span>0</span>
            </h4>
            <h4
              className="weather-info-label"
              id="pressure-label"
            >
              Pressure: <span>0.00</span> in
            </h4>
            <h4
              className="weather-info-label"
              id="visibility-label"
            >
              Visibility: <span>0.0</span> mi
            </h4>
          </div>
        </section>
      </header>
      <section></section>
    </section>

  );

}