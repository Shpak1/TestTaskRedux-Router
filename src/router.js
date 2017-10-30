import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Second_page from './components/second_page'

import First_page from './components/first_page'
import NoMatch from './components/NoMatch'




export default class RouteComponent extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Redirect from='/' to='/firstPage' component={First_page} exact />
                        <Route path="/firstPage" component={First_page} exact />
                        <Route path="/secondPage" component={Second_page} exact />
                        <Route component={NoMatch}/>
                    </Switch>
            </Router>
        );
    }
}
