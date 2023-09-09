import { useSelector } from 'react-redux';


export function WeatherRequestHistory(): JSX.Element {

  const apiResponses: any[] = useSelector((state: { apiResponses: [] }) => state.apiResponses);
  const testSubmissions: string[] = useSelector((state: { testSubmissions: string[] }) => state.testSubmissions);

  function handleClick(e: any): void {

    const currSelection: any = document.getElementsByClassName("selected")[0];
    const newSelection: any = e.target;



    if (newSelection !== currSelection) {

      newSelection.className = "selected";
      currSelection.className = "";

    }


  }

  function getListItems(): JSX.Element[] {

    /* Get List Items Based On API Responses
    */
    return apiResponses.map((value, index) => {

      const city = apiResponses[index].location.name;
      let country = apiResponses[index].location.country;



      country = country === "United States of America" || country === "USA United States of America" ? "USA" : country;



      return (
        <li
          key={"request-" + (index + 1)}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          {`${city}, ${country}`}
        </li>
      );

    })



    /* Get List Items Based On Form Submissions

      return testSubmissions.map((value, index) => {

        return (

          <li
            key={"request-" + (index + 1)}
            onClick={(e) => {
              handleClick(e);
            }}
            className={index === 0 ? "selected" : ""}
          >
            {(index + 1) + ") " + testSubmissions[index]}
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