import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from "./onboarding";
import Authentication from "./authentication"

const Views = () => {
    return <React.Fragment>
        <Router>
            <Route exact path="/" component={Authentication} />
            <Route exact path="/singup" component={Onboarding} />
        </Router>
    </React.Fragment> 
}

export default Views;