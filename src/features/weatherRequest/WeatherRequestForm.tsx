import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResponse } from '../../app/slices/apiResponsesSlice';



export function WeatherRequestForm(): JSX.Element {

  let apiResponses = useSelector((state: { apiResponses: [] }) => state.apiResponses);
  let dispatch = useDispatch();
  const handleSubmit = (e: Event) => {

    const weatherReqInput: HTMLElement | null = document.getElementById("weather-request-input");



    e.preventDefault();

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d790a10e5fe74e8db6260020231908&q=${(weatherReqInput as HTMLInputElement).value}&days=2&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((json) => {

        dispatch(addResponse(json));

      });

  };



  useEffect(() => {

    const requestForm: HTMLElement | null = document.getElementById("weather-request-form");



    requestForm?.addEventListener("submit", handleSubmit);



    return () => {

      requestForm?.removeEventListener("submit", handleSubmit);

    }

  }, []);

  useEffect(() => {

    console.clear();
    console.log(apiResponses);

  }, [apiResponses]);



  return (

    <form id="weather-request-form">
      <div>
        <input type="search" id="weather-request-input" name="city" placeholder="City or Postal Code" />
        <button>Submit</button>
      </div>
    </form>

  );

}