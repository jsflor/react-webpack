import React from "react";

import Greetings from './hello.tsx';
import logo from './webpack.png';
import './app.css';

const App = () => (
    <div>
        <Greetings/>
        <img src={logo} height={100} width={100} alt={'logo'}/>
    </div>
);

export default  App;
