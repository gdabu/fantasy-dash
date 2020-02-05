import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar/navbar.js";
import ModuleTeams from "./components/module_teams/module_teams.js";

function App() {
  return (
    <Fragment>
      <NavBar />

      <div class="moduleContainer">
        <ModuleTeams />
      </div>
    </Fragment>
  );
}

export default App;
