import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/navbar/navbar.js";
import ModuleTeams from "./components/module_teams/module_teams.js";
import ModuleCharts from "./components/module_charts/module_charts.js";
import ModuleRankings from "./components/module_rankings/module_rankings.js";

import ModPlayerSearch from "./components/ModPlayerSearch/ModPlayerSearch";

function App() {
  const [playersList, setPlayersList] = useState( [] );

  const fetchData = async (season = "20182019") => {
    const result = await axios(
      `https://fantasy-dash-api.herokuapp.com/nhl/getAllRosteredPlayers?season=${season}`
    )
      .then((result) => {
        setPlayersList(result.data );
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
      <ModPlayerSearch fullPlayersList={playersList}></ModPlayerSearch>
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
