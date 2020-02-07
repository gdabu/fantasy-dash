import React from "react";
import "./player_list_item.scss";

const PlayerListItem = props => {
  return (
    <div class="playerListItem">
      <div class="playerListItem--profilePicture">
        <img src="./img/player_profiles/lebron_james.png"></img>
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
};

export default PlayerListItem;
