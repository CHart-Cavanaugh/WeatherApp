import { useState } from 'react';
import './App.scss';



function App() {

  const [appStatus, setAppStatus] = useState(false);
  const tempContent = (
    <h1 id="temp-content">status: UNDER_CONSTRUCTION</h1>
  );
  const appContent = (
    <></>
  );



  return (

    <div id="app-container">
      {appStatus ? appContent : tempContent}
    </div>

  );

}



export default App;