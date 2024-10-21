import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContexts";

export class Toggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return (
      <div>
        <button onClick={() => toggleTheme()}>click</button>
      </div>
    );
  }
}

export default Toggle;
