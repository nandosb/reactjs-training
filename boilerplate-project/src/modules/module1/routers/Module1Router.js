import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardComponent from '../components/DashboardComponent';

const PageNotFound = () => (
    <div>Module1 not found</div>
);

const SubPage = () => (
    <div>Module1 SubPage</div>
)

const Module1Router = ({match}) => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path={`${match.path}`} component={DashboardComponent}/>
                <Route path={`${match.path}/subdir`} component={SubPage}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default Module1Router;