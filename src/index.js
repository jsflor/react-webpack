import React, { lazy, Suspense} from "react";
import {render} from "react-dom";
import { Router } from "@reach/router";

import Main from "./components/main";
const Home = lazy(() => import(/* webpackChunkName: "Home" */"./components/home"));
const About = lazy(() => import(/* webpackChunkName: "About" */"./components/about"));
import Navigation from "./components/navigation";

const App = () => (
    <>
        <Navigation/>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Router>
                <Main path="/" />
                <Home path="/home" />
                <About path="/about" />
            </Router>
        </Suspense>
    </>
);

render(<App/>, document.getElementById("root"));

module.hot.accept();
