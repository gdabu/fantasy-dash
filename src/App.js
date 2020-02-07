import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar/navbar.js";
import ModuleTeams from "./components/module_teams/module_teams.js";
import ModuleCharts from "./components/module_charts/module_charts.js";
import ModuleRankings from "./components/module_rankings/module_rankings.js";

function App() {
  return (
    <Fragment>
      <NavBar />

      <div class="moduleGrid">
        <ModuleTeams />
        <ModuleCharts />
        <ModuleRankings />
      </div>
    </Fragment>
  );
}

export default App;
