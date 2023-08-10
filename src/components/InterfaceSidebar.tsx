export function InterfaceSidebar(): JSX.Element {

  return (

    <aside id="weather-request-sidebar">
      <form id="weather-request-form">
        <label htmlFor="state-input">
          State
          <input type="text" id="state-input" name="state" />
        </label>
        <label htmlFor="city-input">
          City
          <input type="text" id="city-input" name="city" />
        </label>
        <button>Submit</button>
      </form>
      <div id="weather-request-history"></div>
    </aside>

  );

}