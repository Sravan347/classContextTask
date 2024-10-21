import React from "react";
import { ThemeContext } from "../Context/ThemeContexts";

class NavBar extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default NavBar;

