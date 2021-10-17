import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Onboarding from "./onboarding";
import Authentication from "./authentication";
import Feeds from  "./feeds";

const Views = () => {
    return <Fragment>
        <Router>
            <Route exact path="/" component={Authentication} />
            <Route exact path="/signup" component={Onboarding} />
            <Route exact path="/feeds" component={Feeds} />
        </Router>
    </Fragment> 
}

export default Views;