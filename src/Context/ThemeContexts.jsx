import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: false,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  toogleTheme=()=>{
    this.setState({isLightTheme: !this.state.isLightTheme})
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state ,toggleTheme:this.toogleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
