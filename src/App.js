import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./paginas/Home";
import Show from "./paginas/Shows";
import Movie from "./paginas/Movie";
import Error from "./paginas/Erro";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">
            <h3>HOME PAGE</h3>
          </Link>
          <Link to="/movie">
            <h3>MOVIE</h3>
          </Link>
          <Link to="/shows">
            <h3>SHOW</h3>
          </Link>
        </div>

        <Routes>
          <Route path="/shows" element={<Show />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}
