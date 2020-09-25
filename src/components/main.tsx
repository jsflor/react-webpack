import React, {FunctionComponent} from "react";
import {RouteComponentProps} from "@reach/router";

import logo from '../webpack.png';
import './styles.css';

const Main: FunctionComponent<RouteComponentProps> = () => (
    <div>
        <h1>Greetings</h1>
        <img src={logo} height={100} width={100} alt={'logo'}/>
    </div>
);

export default  Main;
