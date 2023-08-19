import { useEffect } from 'react';



export function InterfaceSidebar(): JSX.Element {

  let responseJSON: null | JSON = null;
  const handleSubmit = (e: Event) => {

    const weatherReqInput: HTMLElement | null = document.getElementById("weather-request-input");

    e.preventDefault();

    fetch(`http://api.weatherapi.com/v1/current.json?key=d790a10e5fe74e8db6260020231908&q=${(weatherReqInput as HTMLInputElement).value}&aqi=no`)
      .then((response) => response.json())
      .then((json) => {

        console.log(json);
        responseJSON = json;

      });

  };



  useEffect(() => {

    const requestForm: HTMLElement | null = document.getElementById("weather-request-form");



    requestForm?.addEventListener("submit", handleSubmit);



    return () => {

      requestForm?.removeEventListener("submit", handleSubmit);

    }

  }, []);



  return (

    <aside id="weather-request-sidebar">
      <form id="weather-request-form">
        <div>
          <input type="search" id="weather-request-input" name="city" placeholder="City or Postal Code" />
          <button>Submit</button>
        </div>
      </form>
      <div id="weather-request-history"></div>
    </aside>

  );

}