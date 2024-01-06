import { useEffect } from "react";

export function InterfaceMessages() {

  function DemoWindowAnimation(windowId: number) {

    const interfaceWindow = document.getElementsByClassName("message-window")[windowId] as HTMLElement;


    interfaceWindow.style.display = "block";
    setTimeout(() => {

      interfaceWindow.classList.replace("inactive", "active");
      setTimeout(() => {

        interfaceWindow.classList.replace("active", "inactive");
        setTimeout(() => {

          interfaceWindow.style.display = "none";

        }, 2000)

      }, 3000);

    }, 2000);

  }

  useEffect(() => {

    DemoWindowAnimation(0);

    setTimeout(() => {

      DemoWindowAnimation(1);
      setTimeout(() => {

        DemoWindowAnimation(2);

      }, 5000)

    }, 5000)

  }, []);

  return (

    <div className="interface-messages">
      <div className="message-windows">
        <div className="message-window welcome-window inactive"></div>
        <div className="message-window alert-window inactive"></div>
        <div className="message-window error-window inactive"></div>
      </div>
      <div className="overlay-bg"></div>
    </div>

  );

}