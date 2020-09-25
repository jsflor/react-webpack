import React from "react";
import {render} from "react-dom";
import { Router } from "@reach/router";

import Main from "./components/main";
import Home from "./components/home";
import Aboutus from "./components/aboutus";

const App = () => (
    <Router>
        <Main path="/" />
        <Home path="/home" />
        <Aboutus path="/about-us" />
    </Router>
);

render(<App/>, document.getElementById("root"));

module.hot.accept();
