import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addResponse } from '../../app/slices/apiResponsesSlice';
import { selectFirst } from '../../app/slices/currentSelectionSlice';
import { addSubmission } from '../../app/slices/testSubmissionsSlice';



export function WeatherRequestForm(): JSX.Element {

  let apiResponses = useSelector((state: { apiResponses: [] }) => state.apiResponses);
  let testSubmissions = useSelector((state: { testSubmissions: string[] }) => state.testSubmissions)
  let dispatch = useDispatch();
  const handleSubmit = (e: any) => {

    const weatherReqInput: HTMLElement | null = document.getElementById("weather-request-input");
    let currSelection: null | Element;
    let newSelection: Element;



    e.preventDefault();

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=d790a10e5fe74e8db6260020231908&q=${(weatherReqInput as HTMLInputElement).value}&days=2&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((json) => {

        const responseCity = json.location.name;
        function hasName(element: any): boolean {

          return element.location.name === responseCity;

        }

        if (!apiResponses.some(hasName)) {

          dispatch(addResponse(json));
          dispatch(selectFirst(null));

        }

      });

    /* 1. Add submission to testSubmissions

      if (testSubmissions.indexOf((weatherReqInput as HTMLInputElement).value) === -1) {

        dispatch(addSubmission((weatherReqInput as HTMLInputElement).value));


        if (testSubmissions.length !== 0) {

          currSelection = document.getElementsByClassName("selected")[0];
          newSelection = (document.getElementById("request-history-list") as Element).children[0];



          newSelection.className = "selected";
          if (currSelection && currSelection !== newSelection)
            currSelection.className = "";

        }

      }

    */

  };



  // MOVE "useEffect" CALLS THAT LOG DATA TO "WeatherInterface" COMPONENT
  useEffect(() => {

    console.clear();
    console.log(apiResponses);

  }, [apiResponses]);



  // useEffect(() => {

  //   console.clear();
  //   console.log(testSubmissions);

  // }, [testSubmissions]);



  return (

    <form
      id="weather-request-form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <input type="search" id="weather-request-input" name="city" placeholder="City or Postal Code" />
        <button>Submit</button>
      </div>
    </form>

  );

}