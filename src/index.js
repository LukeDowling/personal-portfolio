import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Contact from "./routes/Contact.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import RandomQuoteMachine from "./routes/RandomQuoteMachine.js";
import DrumMachine from "./routes/DrumMachine.js";
import Calculator from "./routes/Calculator.js";
import Timer from "./routes/Timer.js";
import Home from "./routes/Home.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/randomquotemachine" element={<RandomQuoteMachine />} />
          <Route path="/drummachine" element={<DrumMachine />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
