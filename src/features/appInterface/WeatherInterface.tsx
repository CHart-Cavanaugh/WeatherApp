import { AppState } from '../../app/store';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { unselect } from "../../app/slices/currentSelectionSlice";

import { WeatherRequestSidebar } from "./../weatherRequest/WeatherRequestSidebar";
import { WeatherInformation } from "./../weatherInfo/WeatherInformation";
import { InterfaceTabs } from "./../interfaceTabs/InterfaceTabs";





interface WeatherInterfaceControls {

  general: {

    showElement: (elementName: string) => void,
    hideElement: (elementName: string) => void,

  },
  interfaceTabs: {

    setTabOneActive: () => void,
    setTabTwoActive: () => void,

  },

};



const interfaceControls: WeatherInterfaceControls = {

  general: {

    showElement: (elementName: string): void => {

      let element: HTMLElement | null = null;



      if (!(elementName === "weather-info" || elementName === "weather-request-sidebar"))
        return;

      element = document.getElementById(elementName);

      if (elementName === "weather-info") {

        (element as HTMLElement).style.display = "block";

      } else if (elementName === "weather-request-sidebar") {

        (element as HTMLElement).style.display = "flex";

      }

    },
    hideElement: (elementName: string): void => {

      let element: HTMLElement | null = null;



      if (!(elementName === "weather-info" || elementName === "weather-request-sidebar"))
        return;

      element = document.getElementById(elementName);
      (element as HTMLElement).style.display = "none";

    },

  },

  interfaceTabs: {

    setTabOneActive: () => {

      const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
      const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
      const activeBg: string = "hsl(280, 70%, 60%)";
      const inactiveBg: string = "hsl(280, 50%, 30%)";



      interfaceTabTwo.style.background = inactiveBg;
      interfaceTabOne.style.background = activeBg;

      interfaceControls.general.hideElement("weather-info");
      interfaceControls.general.showElement("weather-request-sidebar");

    },
    setTabTwoActive: () => {

      const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
      const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
      const activeBg: string = "hsl(280, 70%, 60%)";
      const inactiveBg: string = "hsl(280, 50%, 30%)";



      interfaceTabOne.style.background = inactiveBg;
      interfaceTabTwo.style.background = activeBg;

      interfaceControls.general.hideElement("weather-request-sidebar");
      interfaceControls.general.showElement("weather-info");

    },

  }

};



export function WeatherInterface(): JSX.Element {

  const { testSubmissions, apiResponses, currentSelection } = useSelector((state: AppState) => state);
  const dispatch = useDispatch();



  useEffect(() => {

    const interfaceTabs: HTMLElement = document.getElementById("interface-tabs") as HTMLElement;



    window.addEventListener("resize", () => {

      if (window.innerWidth >= 768) {

        interfaceControls.general.showElement("weather-info");
        interfaceControls.general.showElement("weather-request-sidebar");
        interfaceTabs.style.display = "none";

      } else {

        if (interfaceTabs.style.display === "none") {

          interfaceControls.general.hideElement("weather-info");
          interfaceControls.general.showElement("weather-request-sidebar");
          interfaceControls.interfaceTabs.setTabOneActive();

        }

        interfaceTabs.style.display = "flex";

      }

    });



    if (window.innerWidth >= 768) {

      interfaceControls.general.showElement("weather-info");
      interfaceControls.general.showElement("weather-request-sidebar");
      interfaceTabs.style.display = "none";

    } else {

      interfaceControls.general.hideElement("weather-info");
      interfaceControls.general.showElement("weather-request-sidebar");
      interfaceTabs.style.display = "flex";

    }



    return () => {

      window.removeEventListener("resize", () => {

        if (window.innerWidth >= 768) {

          interfaceControls.general.showElement("weather-info");
          interfaceControls.general.showElement("weather-request-sidebar");
          interfaceTabs.style.display = "none";

        } else {

          if (interfaceTabs.style.display === "none") {

            interfaceControls.general.hideElement("weather-info");
            interfaceControls.general.showElement("weather-request-sidebar");
            interfaceControls.interfaceTabs.setTabOneActive();

          }

          interfaceTabs.style.display = "flex";

        }

      });

    };

  }, []);



  useEffect(() => {

    dispatch(unselect(null));

  }, []);



  /* - - - - - - - - - - -  Data Logging  - - - - - - - - - - - */



  useEffect(() => {

    console.clear();

  }, [testSubmissions, apiResponses, currentSelection]);

  useEffect(() => {

    console.log("Submissions: " + testSubmissions);

  }, [testSubmissions]);

  useEffect(() => {

    console.log("API Responses: \n");
    console.log(apiResponses);

  }, [apiResponses]);

  useEffect(() => {

    console.log("Selection (By Index): " + currentSelection);

  }, [currentSelection]);



  /* - - - - - - - - - - Component Rendering - - - - - - - - - - */



  return (

    <main id="weather-interface">
      <InterfaceTabs
        setTabOneActive={interfaceControls.interfaceTabs.setTabOneActive}
        setTabTwoActive={interfaceControls.interfaceTabs.setTabTwoActive}
      />
      <WeatherRequestSidebar />
      <WeatherInformation />
    </main>

  );

}