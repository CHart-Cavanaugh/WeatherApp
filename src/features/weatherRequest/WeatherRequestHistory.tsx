import { useSelector } from 'react-redux';


export function WeatherRequestHistory(): JSX.Element {

  const apiResponses: any[] = useSelector((state: { apiResponses: [] }) => state.apiResponses);
  const testSubmissions: string[] = useSelector((state: { testSubmissions: string[] }) => state.testSubmissions);
  function getListItems(): JSX.Element[] {

    return testSubmissions.map((value, index) => {

      return (

        <li key={"request-" + (index + 1)}>
          {(index + 1) + ") " + testSubmissions[index]}
        </li>

      );

    })



    /* Get List Items Based On API Responses
  
      return apiResponses.map((value, index) => {
  
        const city = apiResponses[index].location.name;
        let country = apiResponses[index].location.country;
  
  
  
        country = country === "United States of America" ? "USA" : country;
  
  
  
        return (
          <li key={"request-" + (index + 1)}>
            {`${city}, ${country}`}
          </li>
        );
  
      })
  
    */

  }



  return (

    <div id="weather-request-history">
      <ul id="request-history-list">
        {getListItems()}
      </ul>
    </div>

  );

}