import React, {FunctionComponent} from 'react';
import { Link } from "@reach/router";

const Navigation: FunctionComponent = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">
                        Main
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About us
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
