import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './w3.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Page Components
import {Homepage} from "./components/Homepage";
import {PropertyPage} from "./components/PropertyPage";
import {ResultsPage} from "./components/ResultsPage";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>

                <Route path='/results'>
                    <ResultsPage />
                </Route>

                <Route path='/property'>
                    <PropertyPage />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
