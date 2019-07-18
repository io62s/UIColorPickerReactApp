import React, { Component } from "react";
import Palette from "./Palette";
import seedPallets from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedPallets[4])} />
      </div>
    );
  }
}

export default App;
