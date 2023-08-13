import { InterfaceSidebar } from "./InterfaceSidebar";
import { WeatherInformation } from "./WeatherInformation";
import { InterfaceTabs } from "./InterfaceTabs";
import { useEffect } from "react";



export function WeatherInterface(): JSX.Element {

  const showElement = (elementName: string) => {

    let element: HTMLElement | null = null;



    if (!(elementName === "weather-info" || elementName === "weather-request-sidebar"))
      return;

    element = document.getElementById(elementName);

    if (elementName === "weather-info") {

      (element as HTMLElement).style.display = "block";

    } else if (elementName === "weather-request-sidebar") {

      (element as HTMLElement).style.display = "flex";

    }

  };

  const hideElement = (elementName: string) => {

    let element: HTMLElement | null = null;



    if (!(elementName === "weather-info" || elementName === "weather-request-sidebar"))
      return;

    element = document.getElementById(elementName);
    (element as HTMLElement).style.display = "none";

  };



  useEffect(() => {

    window.addEventListener("resize", () => {

      if (window.innerWidth >= 768) {
        showElement("weather-info");
        showElement("weather-request-sidebar");
      } else {
        hideElement("weather-info");
        showElement("weather-request-sidebar");
      }

    });



    return () => {

      window.removeEventListener("resize", () => {

        if (window.innerWidth >= 768) {

          showElement("weather-info");
          showElement("weather-request-sidebar");

        } else {

          hideElement("weather-info");
          showElement("weather-request-sidebar");

        }

      })

    };

  }, []);



  return (

    <main id="weather-interface">
      {window.innerWidth < 768 ? <InterfaceTabs showElement={showElement} hideElement={hideElement} /> : null}
      <InterfaceSidebar />
      <WeatherInformation />
    </main>

  );

}