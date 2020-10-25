import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar/navbar.js";
import ModuleTeams from "./components/module_teams/module_teams.js";
import ModuleCharts from "./components/module_charts/module_charts.js";
import ModuleRankings from "./components/module_rankings/module_rankings.js";

function App() {
  const [playersList, setPlayersList] = useState({ players: [] });

  const fetchData = async (season = "20182019") => {
    const result = await axios(
      `https://fantasy-dash-api.herokuapp.com/nhl/getAllRosteredPlayers?season=${season}`
    )
      .then((result) => {
        setPlayersList({ players: result.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      <NavBar />

      <div class="moduleGrid">
        <ModuleTeams />
        <ModuleCharts />
        <ModuleRankings />
      </div>

      <div class=""></div>
    </Fragment>
  );
}

export default App;
