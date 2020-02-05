import React from "react";
import "./navbar.scss";

const navbar = props => {
  return (
    <div class="navbar">
      <div class="navbar--title">
        <p>FANTASY DASH</p>
      </div>
      <div class="navbar--child__rightAligned">
        <button class="btn">
          <i class="fas fa-plus-circle"></i> ADD TEAM
        </button>
      </div>
    </div>
  );
};

export default navbar;
