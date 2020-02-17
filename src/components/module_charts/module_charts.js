import React, { useState } from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

import Checkbox from "../Checkbox/Checkbox.js";

import { STAT_TYPES, getStatAbbrArray } from "../../enums/stat_types.js";
import "./module_charts.scss";

class module_charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chartLabels: getStatAbbrArray() };
  }

  initializeStatTypeCheckboxes = () => {
    let checkBoxes = [];

    for (const stat in STAT_TYPES) {
      let stat_abbreviation = STAT_TYPES[stat].abbr;
      let stat_name = STAT_TYPES[stat].name;

      checkBoxes.push(
        <Checkbox
          itemClickHandler={this.setChartLabels}
          label={stat_abbreviation}
          value={stat}
          checkedValue={true}
        />
      );
    }

    return checkBoxes;
  };

  setChartLabels = (statKey, statAbbr, checkedValue) => {
    this.setState(function(prevState, props) {
      let updatedChartLabels = prevState.chartLabels;

      if (!checkedValue) {
        updatedChartLabels = prevState.chartLabels.filter(function(
          value,
          index,
          arr
        ) {
          return value !== statAbbr;
        });
      } else {
        updatedChartLabels.push(statAbbr);
      }

      return { chartLabels: updatedChartLabels };
    });
  };

  drawChart = () => {
    var ctx = ReactDOM.findDOMNode(this.refs.radarChart);
    var myChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: this.state.chartLabels,
        datasets: [
          {
            label: "Jebron Lames",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: { animation: false }
    });
  };

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props || prevState !== this.state) {
      this.drawChart();
    }
  }

  render() {
    return (
      <div class="module module__charts">
        <div class="module--header">
          <h1 class="module--title">CHARTS</h1>
        </div>

        <div class="module--body module--body__chart">
          <div class="module--radarChart">
            <canvas ref="radarChart"></canvas>
          </div>
          <div class="module--checkBoxContainer module--checkBoxContainer__chart">
            {this.initializeStatTypeCheckboxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default module_charts;
