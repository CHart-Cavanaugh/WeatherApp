import { useEffect } from "react";



interface ChildProps {
  showElement: (elementName: string) => void,
  hideElement: (elementName: string) => void,
};



export function InterfaceTabs(props: ChildProps): JSX.Element {

  const setTabOneActive = () => {

    const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
    const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
    const activeBg: string = "hsl(280, 70%, 60%)";
    const inactiveBg: string = "hsl(280, 50%, 30%)";



    interfaceTabTwo.style.background = inactiveBg;
    interfaceTabOne.style.background = activeBg;

    props.hideElement("weather-info");
    props.showElement("weather-request-sidebar");

  };

  const setTabTwoActive = () => {

    const interfaceTabOne: HTMLElement = document.getElementById("interface-tab-1") as HTMLElement;
    const interfaceTabTwo: HTMLElement = (document.getElementById("interface-tab-2") as HTMLElement);
    const activeBg: string = "hsl(280, 70%, 60%)";
    const inactiveBg: string = "hsl(280, 50%, 30%)";



    interfaceTabOne.style.background = inactiveBg;
    interfaceTabTwo.style.background = activeBg;

    props.hideElement("weather-request-sidebar");
    props.showElement("weather-info");

  };



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