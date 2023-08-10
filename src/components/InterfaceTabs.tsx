import { useEffect } from "react";



export function InterfaceTabs(): JSX.Element {

  const setTabOneActive = () => {

    const interfaceSidebar: HTMLElement = (document.getElementById("weather-request-sidebar") as HTMLElement);
    const weatherInfo: HTMLElement = (document.getElementById("weather-info") as HTMLElement);
    const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
    const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
    const activeBg: string = "hsl(280, 70%, 60%)";
    const inactiveBg: string = "hsl(280, 50%, 30%)";



    interfaceTabTwo.style.background = inactiveBg;
    interfaceTabOne.style.background = activeBg;

    weatherInfo.style.display = "none";
    interfaceSidebar.style.display = "flex";

  };

  const setTabTwoActive = () => {

    const interfaceSidebar: HTMLElement = (document.getElementById("weather-request-sidebar") as HTMLElement);
    const weatherInfo: HTMLElement = (document.getElementById("weather-info") as HTMLElement);
    const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
    const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
    const activeBg: string = "hsl(280, 70%, 60%)";
    const inactiveBg: string = "hsl(280, 50%, 30%)";



    interfaceTabOne.style.background = inactiveBg;
    interfaceTabTwo.style.background = activeBg;

    interfaceSidebar.style.display = "none";
    weatherInfo.style.display = "block";

  }



  useEffect(() => {

    setTabOneActive();

  }, []);



  return (

    <footer id="interface-tabs">
      <div
        id="interface-tab-1"
        key="1"
        onClick={() => {
          setTabOneActive();
        }}
      ></div>
      <div
        id="interface-tab-2"
        key="2"
        onClick={() => {
          setTabTwoActive();
        }}
      ></div>
    </footer>

  );

}