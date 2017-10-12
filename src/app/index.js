
import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route, HashRouter, IndexRoute, Switch} from "react-router-dom";

import ParkDisplay from "./components/ParkDisplay.js";
import Parks from "./components/Input.js";



class App extends React.Component {
    render() {
        return (
            <HashRouter>
				<div>
					<Route exact path="/" component={Parks}/>
					<Route exact path="/park-display/:name" component={ParkDisplay}/>
				</div>
			</HashRouter>
        );
    }
}

render(<App />, window.document.getElementById('parks'));

