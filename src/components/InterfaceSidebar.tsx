export function InterfaceSidebar(): JSX.Element {

  return (

    <aside id="weather-request-sidebar">
      <form id="weather-request-form">
        <div>
          <input type="search" id="city-input" name="city" placeholder="City" />
          <button>Submit</button>
        </div>
      </form>
      <div id="weather-request-history"></div>
    </aside>

  );

}