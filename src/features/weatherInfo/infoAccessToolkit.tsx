function getCurrentLocation(selectedInfo: any): string {

  const getSelectedLocation: () => string = () => (

    (selectedInfo as { location: { name: string } }).location.name +
    ", " +
    (selectedInfo as { location: { country: string } }).location.country

  );
  const currLocation = selectedInfo ? getSelectedLocation() : "someCity, someCountry";


  return currLocation;

}

function getCurrentTemp(selectedInfo: any): number {

  const getSelectedTemp: () => number = () => (selectedInfo as { current: { temp_f: number } }).current.temp_f;
  const currentTemp: number = selectedInfo ? getSelectedTemp() : 0;



  return currentTemp;

}

function getCurrentWindInfo(selectedInfo: any): string {

  const getSelectedWindInfo: () => string = () => (

    `${(selectedInfo as { current: { wind_dir: string } }).current.wind_dir} - ` +
    `${(selectedInfo as { current: { wind_mph: number } }).current.wind_mph} mph`

  );
  const currWindInfo: string = selectedInfo ? getSelectedWindInfo() : `"N" - 0 mph`;





  return currWindInfo;

}

function getCurrentHumidityInfo(selectedInfo: any): string {

  const getSelectedHumidity: () => string = () => `${(selectedInfo as { current: { humidity: number } }).current.humidity} %`;
  const currHumidity: string = selectedInfo ? getSelectedHumidity() : "0 %";



  return currHumidity;

}

function getCurrentUV(selectedInfo: any): number {

  const getSelectedUV: () => number = () => (selectedInfo as { current: { uv: number } }).current.uv;
  const currentUV: number = selectedInfo ? getSelectedUV() : 0;



  return currentUV;

}

function getCurrentPressureInfo(selectedInfo: any): string {

  const getSelectedPressure: () => string = () => `${(selectedInfo as { current: { pressure_in: number } }).current.pressure_in} in`;
  const currPressure: string = selectedInfo ? getSelectedPressure() : "0.00 in";



  return currPressure;

}

function getCurrentVisibilityInfo(selectedInfo: any): string {

  const getSelectedVisibility: () => string = () => `${(selectedInfo as { current: { vis_miles: number } }).current.vis_miles} mi`;
  const currVisibility: string = selectedInfo ? getSelectedVisibility() : "0.0 mi";



  return currVisibility;

}



export * as infoAccessToolkit from './infoAccessToolkit';