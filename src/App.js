import "@fontsource/roboto";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Clubs from "./Components/Clubs";
import Resume from "./Components/Resume";
import WorkExperience from "./Components/WorkExperience";
import Footer from "./Components/Footer";

// import { Parallax } from "./Components/styled";

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <div>
      {/* Styled functions */}
      <GlobalStyle />
      {/* Switches and default product */}
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
        <Route exact path="/WorkExperience">
          <WorkExperience />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
