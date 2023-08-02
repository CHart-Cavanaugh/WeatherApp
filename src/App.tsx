import { useState, useEffect } from 'react';
import './App.scss';
import { WeatherInterface } from './components/WeatherInterface';



function App(): JSX.Element {

  const [appStatus, setAppStatus] = useState(false);
  const tempContent = (
    <h2 id="temp-content">status: UNDER_CONSTRUCTION</h2>
  );
  const appContent = (
    <>
      <WeatherInterface />
    </>
  );



  useEffect(() => {

    (document.getElementById("app-container") as HTMLElement)
      .style.background = appStatus ? "white" : "$pg-background";

  }, [appStatus])



  return (

    <div id="app-container">
      {appStatus ? appContent : tempContent}
    </div>

  );

}



export default App;