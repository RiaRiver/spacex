import React from "react";
import './header.css';
import logo from "../../logo.svg";



const Header = (props) => (
  <header className="header">
    <img
      src={logo}
      alt="Logo Space X"
      className="logo"
    />
    <nav className="main-nav nav">
      <ul className="list">
        {props.rockets.map((item, index) => (
          <li className="item" key={index}>
            <a
              href="/"
              className="item-link"
              onClick={e => {e.preventDefault(); props.changeRocket(item)}}
            >{item}</a>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">Home</a>
        </li>
        <li className="item">
          <a href="calendar.html" className="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;