import { useState } from "react";
import { useEffect } from "react";
import { InterfaceSidebar } from "./InterfaceSidebar";
import { WeatherInformation } from "./WeatherInformation";
import { InterfaceTabs } from "./InterfaceTabs";




export function WeatherInterface(): JSX.Element {

  const [showTabs, setShowTabs]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  const showElement = (elementName: string): void => {

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

  const hideElement = (elementName: string): void => {

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
        setShowTabs(false);

      } else {

        hideElement("weather-info");
        showElement("weather-request-sidebar");
        setShowTabs(true);

      }

    });

    if (window.innerWidth < 768)
      setShowTabs(true);
    else
      setShowTabs(false);



    return () => {

      window.removeEventListener("resize", () => {

        if (window.innerWidth >= 768) {

          showElement("weather-info");
          showElement("weather-request-sidebar");
          setShowTabs(false);

        } else {

          hideElement("weather-info");
          showElement("weather-request-sidebar");
          setShowTabs(true);

        }

      })

    };

  }, []);



  return (

    <main id="weather-interface">
      {showTabs ? <InterfaceTabs showElement={showElement} hideElement={hideElement} /> : null}
      <InterfaceSidebar />
      <WeatherInformation />
    </main>

  );

}