import { useSelector } from 'react-redux';


export function WeatherRequestHistory(): JSX.Element {

  const apiResponses: any[] = useSelector((state: { apiResponses: [] }) => state.apiResponses)

  return (

    <div id="weather-request-history">
      <ul id="request-history-list">
        {apiResponses.map((value, index) => {

          const city = apiResponses[index].location.name;
          let country = apiResponses[index].location.country;



          country = country === "United States of America" ? "USA" : country;



          return (
            <li key={"request-" + (index + 1)}>
              {`${city}, ${country}`}
            </li>
          );

        })}
      </ul>
    </div>

  );

}