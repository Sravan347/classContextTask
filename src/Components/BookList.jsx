import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContexts";

export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>one piece</li>
          <li style={{ background: theme.ui }}>naruto</li>
          <li style={{ background: theme.ui }}>bleech</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
