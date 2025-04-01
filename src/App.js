import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route path="*" Component={PageNotFound} />
          </Routes>
        </div>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
