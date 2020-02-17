const STAT_TYPES = Object.freeze({
  FIELD_GOAL_PCT: { name: "Field Goal Pct", abbr: "FG%" },
  FREE_THROW_PCT: { name: "Free Throw Pct", abbr: "FT%" },
  THREE_POINTS: { name: "Three Points Made", abbr: "3PTM" },
  POINTS: { name: "Points", abbr: "PTS" },
  REOUNDS: { name: "Rebounds", abbr: "REB" },
  ASSIST: { name: "Assists", abbr: "AST" },
  STEALS: { name: "Steals", abbr: "ST" },
  BLOCKS: { name: "Blocks", abbr: "BLK" },
  TURN_OVERS: { name: "Turn Overs", abbr: "TO" }
});

let getStatAbbrArray = function() {
  let abbrs = [];
  for (const stat in STAT_TYPES) {
    let stat_abbreviation = STAT_TYPES[stat].abbr;
    abbrs.push(stat_abbreviation);
  }
  return abbrs;
};

export { STAT_TYPES, getStatAbbrArray };
