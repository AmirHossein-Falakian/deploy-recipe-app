import React from "react";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import { Logo, Nav } from "./components/style/StyledHome";
import { GiKnifeFork } from "react-icons/gi";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Helmet>
          <title> Deliciouss </title>{" "}
        </Helmet>{" "}
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork /> Deliciouss{" "}
          </Logo>{" "}
        </Nav>{" "}
        <Search />
        <Category />
        <Pages />
      </Router>{" "}
    </div>
  );
};

export default App;
