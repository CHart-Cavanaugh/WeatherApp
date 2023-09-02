import { useEffect } from "react";



interface ChildProps {

  setTabOneActive: () => void,
  setTabTwoActive: () => void,

};



export function InterfaceTabs(props: ChildProps): JSX.Element {

  useEffect(() => {

    props.setTabOneActive();

  }, []);



  return (

    <footer id="interface-tabs">
      <div
        id="interface-tab-1"
        key="1"
        onClick={() => {
          props.setTabOneActive();
        }}
      ></div>
      <div
        id="interface-tab-2"
        key="2"
        onClick={() => {
          props.setTabTwoActive();
        }}
      ></div>
    </footer>

  );

}