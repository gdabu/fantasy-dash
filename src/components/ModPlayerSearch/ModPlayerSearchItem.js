import React from "react";

import "../module_teams/player_list_item.scss";

export default function ModPlayerSearchItem(props) {
  return (
    <div class="playerListItem">
      <div class="playerListItem--profilePicture">
        <img src={props.playerImageUrl}></img>
      </div>
      <div class="playerListItem--nameContainer">
        <p class="playerListItem--name">{props.playerName}</p>
        <p class="subLabel">
          {props.playerNBATeam} | {props.playerPosition}
        </p>
      </div>
      <div class="playerListItem--icon playerListItem--icon__first ">
        <i class="fas fa-eye-slash"></i>
      </div>
      <div class="playerListItem--icon playerListItem--icon__second ">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  );
}
