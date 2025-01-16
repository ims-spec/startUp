import React from "react";

import "../../App.css";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="flex_sb">
          <p>Какойто логотип</p>
          <button className="header_btn">Logout</button>
        </nav>
      </div>
    </header>
  );
}
