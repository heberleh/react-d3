import React, { Component } from "react";
import "./App.css";

import Preloader from "./components/Preloader";
import * as d3 from "d3";
import _ from "lodash";
import { loadAllData } from "./DataHandling";
import CountyMap from "./components/CountyMap";

class App extends Component {
  state = {
    techSalaries: [],
  };

  componentDidMount() {
    loadAllData((data) => this.setState(data));
  }

  countyValue(county, techSalariesMap) {
    const medianHousehold = this.state.medianIncomes[county.id],
      salaries = techSalariesMap[county.name];

    if (!medianHousehold || !salaries) {
      return null;
    }

    const median = d3.median(salaries, (d) => d.base_salary);

    return {
      countyID: county.id,
      value: median - medianHousehold.medianIncome,
    };
  }
  render() {
    const { techSalaries, countyNames, usTopoJson } = this.state;

    if (techSalaries < 1) {
      return <Preloader />;
    }

    // Insert the line(s) between here...
    const filteredSalaries = techSalaries,
      filteredSalariesMap = _.groupBy(filteredSalaries, "countyID"),
      countyValues = countyNames
        .map((county) => this.countyValue(county, filteredSalariesMap))
        .filter((d) => !_.isNull(d));

    return (
      <div className="App container">
        <h1>Load {techSalaries.length} salaries.</h1>
        <svg width="1100" height="500">
          <CountyMap
            usTopoJson={usTopoJson}
            USstateName={USstateNames}
            values={countyValues}
            x={0}
            y={0}
            width={500}
            height={500}
            zoom={1}
          />
        </svg>
      </div>
    );
  }
}

export default App;
