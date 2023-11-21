import { useState, useEffect } from 'react';
import './App.scss';
import { WeatherInterface } from './features/appInterface/WeatherInterface';
import { useSelector, useDispatch } from 'react-redux';
import { updateRefreshCount } from './app/slices/refreshCountSlice';
import { AppState } from './app/store';



function App(): JSX.Element {

  const [appStatus, setAppStatus] = useState(true);
  let refreshCount: number = useSelector((state: AppState) => state.refreshCount);
  const dispatch = useDispatch();
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

    const currentDate = new Date();
    const modifiedDate = new Date();



    modifiedDate.setHours(modifiedDate.getHours() + 1);
    modifiedDate.setMinutes(0);
    modifiedDate.setSeconds(0);
    modifiedDate.setMilliseconds(0);



    setTimeout(() => {

      dispatch(updateRefreshCount());

      setInterval(() => {

        dispatch(updateRefreshCount());

      }, 60 * 60 * 1000);

    }, (modifiedDate.getTime() - currentDate.getTime()));

  }, []);

  useEffect(() => {

    const appContainer: null | HTMLElement = document.getElementById("app-container");

    if (appStatus) {

      (appContainer as HTMLElement).style.background = "hsl(220, 50%, 60%)";
      if (window.innerWidth >= 768)
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