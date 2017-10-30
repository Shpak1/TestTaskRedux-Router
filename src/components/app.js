import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import { RouterToUrlQuery } from 'react-url-query';




export default class App extends Component {
  render() {
    return (
        <Router>
            <RouterToUrlQuery>
                <Route path="/" component={Home} />
            </RouterToUrlQuery>
        </Router>
    );
  }
}
