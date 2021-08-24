import React from "react";
import classes from "./Topbar.module.css";

const Topbar = (props) => {
  return (
    <header className="App-header">
      <nav className={classes.Topbar}>
        <img
          src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png"
          alt="Instagram Logo+"
        />
      </nav>
    </header>
  );
};

export default Topbar;
