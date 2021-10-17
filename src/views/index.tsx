import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from "./onboarding";
import Authentication from "./authentication"

const Views = () => {
    return <Fragment>
        <Router>
            <Route exact path="/" component={Authentication} />
            <Route exact path="/signup" component={Onboarding} />
        </Router>
    </Fragment> 
}

export default Views;