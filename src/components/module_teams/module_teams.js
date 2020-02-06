import React from "react";
import Team from "./team.js";

const module_teams = props => {
  return (
    <div class="module module__teams">
      <div class="module--header">
        <h1 class="module--title">TEAMS</h1>
      </div>
      <div class="module--teamContainerRow">
        <div class="module--body module--body__teams">
          <Team teamName={"NIKOCA-COLA"} />
          <Team teamName={"FUN GUY"} />
          <Team teamName={"JEBRON LAMES"} />
          <Team teamName={"RISKY BIZ"} />

          <div class="team addTeam">
            <div class="addTeam--content">
              <p>ADD TEAM</p>
              <p>
                <i class="fas fa-plus-circle fa-7x"></i>
              </p>
            </div>
          </div>

          {/* <div style={{ width: "50px" }}></div> */}
        </div>
      </div>
    </div>
  );
};

export default module_teams;
