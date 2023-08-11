import { useState, useEffect } from 'react';
import './App.scss';
import { WeatherInterface } from './components/WeatherInterface';



function App(): JSX.Element {

  const [appStatus, setAppStatus] = useState(true);
  const tempContent = (
    <h2 id="temp-content">status: UNDER_CONSTRUCTION</h2>
  );
  const appContent = (
    <>
      <WeatherInterface />
    </>
  );



  useEffect(() => {

    const appContainer: null | HTMLElement = document.getElementById("app-container");



    window.addEventListener("resize", () => {

      if (window.innerWidth >= 768)
        (appContainer as HTMLElement).style.border = "25px double hsl(220, 50%, 30%)";
      else
        (appContainer as HTMLElement).style.border = "none";

    });



    return () => {

      window.removeEventListener("resize", () => {

        if (window.innerHeight >= 768)
          (appContainer as HTMLElement).style.border = "25px double hsl(220, 50%, 30%)";
        else
          (appContainer as HTMLElement).style.border = "none";

      });

    };

  }, []);

  useEffect(() => {

    const appContainer: null | HTMLElement = document.getElementById("app-container");

    if (appStatus) {

      (appContainer as HTMLElement).style.background = "hsl(220, 50%, 60%)";
      if (window.innerHeight >= 768)
        (appContainer as HTMLElement).style.border = "25px double hsl(220, 50%, 30%)";
      (appContainer as HTMLElement).style.justifyContent = "center";
      (appContainer as HTMLElement).style.alignItems = "center";

    } else {

      (appContainer as HTMLElement).style.background = "hsl(0, 50%, 50%)";
      (appContainer as HTMLElement).style.border = "none";
      (appContainer as HTMLElement).style.justifyContent = "start";
      (appContainer as HTMLElement).style.alignItems = "start";

    }

  }, [appStatus]);



  return (

    <div id="app-container">
      {appStatus ? appContent : tempContent}
    </div>

  );

}



export default App;