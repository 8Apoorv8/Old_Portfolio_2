import React from "react";

import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Route,Switch as Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
      </Routes>
    </>
  );
}

export default App;
