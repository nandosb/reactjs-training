import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Module1Router from '../../modules/module1/routers/Module1Router'

import DashboardComponent from '../components/DashboardComponent'
import PageNotFound from '../components/404Component'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={DashboardComponent}/>
                <Route path="/module1" component={Module1Router}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
