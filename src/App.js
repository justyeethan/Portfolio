import "@fontsource/roboto";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Clubs from "./Components/Clubs";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Projects">
          <Projects />
        </Route>
        <Route exact path="/Clubs">
          <Clubs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
