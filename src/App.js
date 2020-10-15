import React from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";

import './style.css';
import Details from "./components/Details/Details";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Features />
      <Calendar />
      <Details />
      <Footer />
    </React.Fragment>
  );
}

export default App;
