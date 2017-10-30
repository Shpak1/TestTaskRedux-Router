import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header'
import First_page from './firstPage'
import Second_page from './secondPage/index'




export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <Switch>
                        <Route path="/firstPage" component={First_page} exact />
                        <Route path="/secondPage" component={Second_page} exact />
                    </Switch>
                </div>
                {/*<span>Welcome to the home page! Press first page link for open app task. You can add new array at ''. ToDo list on the second page</span>*/}
            </div>
        );
    }
}
