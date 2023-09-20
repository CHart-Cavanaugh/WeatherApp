interface Condition {

  text: string,
  icon: string,

};



function getCurrentLocation(selectedInfo: any): string {

  const getSelectedLocation: () => string = () => {

    const cityName: string = (selectedInfo as { location: { name: string } }).location.name;
    // let countryName: string = (selectedInfo as { location: { country: string } }).location.country;



    // if (countryName.includes("USA") || countryName.includes("United States of America"))
    //   countryName = "USA";
    // else if (countryName.includes("UK") || countryName.includes("United Kingdom"))
    //   countryName = "UK";



    return `${cityName}`;

  };
  const DEFAULT_LOCATION = "someCity";
  const currLocation = selectedInfo ? getSelectedLocation() : DEFAULT_LOCATION;



  return currLocation;

}

function getCurrentDay(selectedInfo: any): string {

  const DEFAULT_RETURN: string = "";
  const DAYS_OF_WEEK: { [index: number]: string } = {

    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"

  };



  let currentDate: null | Date = null;
  let currentDay: string = "";



  if (selectedInfo) {

    currentDate = new Date((selectedInfo as { location: { localtime: string } }).location.localtime);
    currentDay = DAYS_OF_WEEK[currentDate.getDay()];



    return currentDay;

  }



  return DEFAULT_RETURN;

}

function getCurrentTemp(selectedInfo: any): number {

  const getSelectedTemp: () => number = () => (selectedInfo as { current: { temp_f: number } }).current.temp_f;
  const currentTemp: number = selectedInfo ? getSelectedTemp() : 0;



  return currentTemp;

}

function getCurrentCondition(selectedInfo: any): Condition {

  const getSelectedCondition: () => Condition = () => selectedInfo.current.condition;



  const DEFAULT_CONDITION: Condition = {

    text: "clear",
    icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",

  };
  const currentCondition: Condition = selectedInfo ? getSelectedCondition() : DEFAULT_CONDITION;



  return currentCondition;

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



export {
  getCurrentLocation,
  getCurrentDay,
  getCurrentTemp,
  getCurrentCondition,
  getCurrentWindInfo,
  getCurrentHumidityInfo,
  getCurrentUV,
  getCurrentPressureInfo,
  getCurrentVisibilityInfo
};

export * as infoAccessToolkit from './infoAccessToolkit';