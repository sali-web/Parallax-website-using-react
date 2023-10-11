import React from "react";
import Header from "./content/header.js";
import Main from "./content/main.js";
import Scene0 from "./Scenes/Scene0";
import Scene1 from "./Scenes/Scene1";

const App = () => {
  return (
    <div classname ="App">
      {/* <Scene1/> */}
      <Scene0/>
      <Header />
      <Main />
    </div>
  )
}

export default App;
