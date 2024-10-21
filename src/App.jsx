import React, { Component } from "react";
import BookList from "./Components/BookList";
import NavBar from "./Components/NavBar";
import ThemeContextProvider from "./Context/ThemeContexts";

export class App extends Component {
  render() {
    return (
      <>
        <ThemeContextProvider>
        <NavBar />
          <BookList />
          
        </ThemeContextProvider>
      </>
    );
  }
}

export default App;
