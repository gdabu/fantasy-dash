import React, { useState, useEffect } from "react";

import ModPlayerSearchItem from "./ModPlayerSearchItem";

import "./ModPlayerSearch.scss";

export default function ModPlayerSearch(props) {
  const [filteredPlayerList, setFilteredPlayerList] = useState(
    props.fullPlayersList
  );

  useEffect(() => {
    setFilteredPlayerList(props.fullPlayersList);
  }, [props.fullPlayersList]);

  return (
    <div class="module module--playerSearch">
      <div class="module--header module--header__playerSearch">
        <input
          class="input"
          type="text"
          placeholder="Search for player"
        ></input>
      </div>

      <div class="playerSearch--list">
        {filteredPlayerList.slice(0, 10).map((player) => (
          <ModPlayerSearchItem
            playerName={player.person.fullName}
            playerImageUrl={`https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${player.person.id}.png`}
            playerNBATeam={player.team.teamName}
            playerPosition={player.position.code}
          ></ModPlayerSearchItem>
        ))}
      </div>
    </div>
  );
}
