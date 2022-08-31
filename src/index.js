import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import AddTrail from "./pages/AddTrail";
import AddCamp from "./pages/AddCamp";
import DisplayTrail from "./pages/DisplayTrail";
import DisplayCamp from "./pages/DisplayCamp";
import SearchPage from "./pages/SearchPage";
import TrailSearchPage from "./pages/TrailSearchPage";
import CampSearchPage from "./pages/CampSearchPage";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TrailInfo from "./pages/TrailInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route exact path="/add-trail" element={<AddTrail />} />
        <Route exact path="/add-camp" element={<AddCamp />} />
        <Route exact path="/display-trail" element={<DisplayTrail />} />
        <Route exact path="/display-camp" element={<DisplayCamp />} />
        <Route path="/trails" exact element={<TrailSearchPage />} />
        <Route path="/camps" exact element={<CampSearchPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
