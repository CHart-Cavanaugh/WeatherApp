import { useEffect } from "react";



export function MessageOverlay() {

  function toggleMessageOverlay() {

    const interfaceMessages = document.getElementsByClassName("interface-messages")[0] as HTMLElement;



    if (parseFloat(interfaceMessages.style.opacity) > 0) {

      interfaceMessages.style.opacity = "0";

      setTimeout(() => {

        interfaceMessages.style.display = "none";

      }, 1000);

    }
    else {

      interfaceMessages.style.opacity = "1.0";

      setTimeout(() => {

        interfaceMessages.style.display = "flex";

      }, 1000);

    }


  }

  function toggleMessageWindow() {

    const interfaceWindow = document.getElementsByClassName("message-window")[0] as HTMLElement;



    if (interfaceWindow.classList.contains("inactive"))
      interfaceWindow.classList.replace("inactive", "active");
    else
      interfaceWindow.classList.replace("active", "inactive");

  }

  function setWindowType(windowType: string) {

    const interfaceWindow = document.getElementsByClassName("message-window")[0] as HTMLElement;



    if (interfaceWindow.classList.contains("welcome-window"))
      interfaceWindow.classList.replace("welcome-window", `${windowType}-window`);
    else if (interfaceWindow.classList.contains("alert-window"))
      interfaceWindow.classList.replace("alert", `${windowType}-window`);
    else if (interfaceWindow.classList.contains("error-window"))
      interfaceWindow.classList.replace("error", windowType);

  }



  // useEffect(() => {

  //   setTimeout(() => {

  //     toggleMessageOverlay();



  //     setTimeout(() => {

  //       setWindowType("error");
  //       toggleMessageWindow();



  //       setTimeout(() => {

  //         toggleMessageWindow();



  //         setTimeout(() => {

  //           toggleMessageOverlay();

  //         }, 2000);

  //       }, 2000);

  //     }, 2000);

  //   }, 2000);

  // }, []);



  return (

    <div className="interface-messages">
      <div className="message-window inactive welcome-window"></div>
      <div className="overlay-bg"></div>
    </div>

  );

}