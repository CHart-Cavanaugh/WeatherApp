import { useState, useEffect } from 'react';
import './App.scss';



function App() {

  const [appStatus, setAppStatus] = useState(false);
  const tempContent = (
    <h1 id="temp-content">status: UNDER_CONSTRUCTION</h1>
  );
  const appContent = (
    <></>
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