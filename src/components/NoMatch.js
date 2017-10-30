import React, { Component } from 'react';
import { Link } from 'react-router-dom';




export default class App extends Component {
    render() {
        return (
            <div>
                <span> Sorry, but page is not found you can go <Link to = "/firstPage">Home</Link></span>
            </div>
        );
    }
}
