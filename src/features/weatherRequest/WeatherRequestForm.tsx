import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../app/store';

import { submitValue } from '../../app/slices/submittedValueSlice';
import { addResponse } from '../../app/slices/apiResponsesSlice';
import { selectFirst } from '../../app/slices/currentSelectionSlice';
import { addSubmission } from '../../app/slices/testSubmissionsSlice';



export function WeatherRequestForm(): JSX.Element {

  const apiResponses = useSelector((state: AppState) => state.apiResponses);
  const dispatch = useDispatch();



  const handleSubmit = (e: any) => {

    let weatherReqInput: HTMLInputElement = (document.getElementById("weather-request-input") as HTMLInputElement);



    e.preventDefault();

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=d790a10e5fe74e8db6260020231908 &q=${weatherReqInput.value}&days=2&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((json) => {

        function checkIfResponseExists(): boolean {

          function checkIfElementMatchesResponse(element: any) {

            const responseCity = json.location.name;



            return element.location.name === responseCity;

          }



          return apiResponses.some(checkIfElementMatchesResponse);

        }

        const responseAlreadyExists = checkIfResponseExists();



        if (!responseAlreadyExists) {

          dispatch(submitValue(weatherReqInput.value));
          weatherReqInput.value = "";

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