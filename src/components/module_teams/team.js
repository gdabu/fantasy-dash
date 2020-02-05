import React from "react";
import "./module_team.scss";
import PlayerListItem from "./player_list_item.js";

const team = props => {
  return (
    <div class="team">
      <div class="team--header team--header__teamOne">
        <div class="team--colorSquare"></div>
        <div class="team--nameContainer">
          <p class="subLabel">TEAM</p>
          <p class="team--name">{props.teamName}</p>
        </div>
      </div>

      <div class="team--playerContainer">
        <p class="subHeader">Players</p>
        <div class="team--playerList">
          <PlayerListItem />
          <PlayerListItem />
          <PlayerListItem />
          <PlayerListItem />
        </div>
        <button class="btn btn__secondary team--addPlayerButton">
          <i class="fas fa-plus-circle"></i> ADD PLAYER
        </button>
      </div>
    </div>
  );
};

export default team;
