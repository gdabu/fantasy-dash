import React, { useState } from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

import Checkbox from "../Checkbox/Checkbox.js";

import STAT_TYPES from "../../enums/stat_types.js";
import "./module_charts.scss";

class module_charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chartType: "radar" };
  }

  statTypeCheckBox_onCheck = (stat, checkedValue) => {
    console.log(stat);
    console.log(checkedValue);
  };

  initializeStatTypeCheckboxes = () => {
    let checkBoxes = [];

    for (const stat in STAT_TYPES) {
      let stat_abbreviation = STAT_TYPES[stat].abbr;
      let stat_name = STAT_TYPES[stat].name;

      checkBoxes.push(
        <Checkbox
          itemClickHandler={this.statTypeCheckBox_onCheck}
          label={stat_abbreviation}
          value={stat_name}
          checkedValue={true}
        />
      );
    }

    return checkBoxes;
  };

  setChartType = () => {
    this.setState(function(prevState, props) {
      if (prevState.chartType === "radar") {
        return { chartType: "bar" };
      }

      return { chartType: "radar" };
    });
  };

  drawChart = () => {
    var ctx = ReactDOM.findDOMNode(this.refs.radarChart);
    var myChart = new Chart(ctx, {
      type: this.state.chartType,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Jebron Lames",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {}
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
          <canvas ref="radarChart" class="module--radarChart"></canvas>
        </div>

        {this.initializeStatTypeCheckboxes()}
        <button class="btn" onClick={this.setChartType}>
          Alternate Graph
        </button>
      </div>
    );
  }
}

export default module_charts;
