import logo from "./logo.svg";
import "@fontsource/roboto";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <h1>Routing Test</h1>
        </Route>
        <Route exact path="/About">
          <h1>Routing Test 1</h1>
        </Route>
        <Route exact path="/Projects">
          <h1>Routing Test 2</h1>
        </Route>
        <Route exact path="/Experience">
          <h1>Routing Test 3</h1>
        </Route>
        <Route exact path="/Clubs">
          <h1>Routing Test 4</h1>
        </Route>
        <Route exact path="/Blogs">
          <h1>Routing Test 5</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
