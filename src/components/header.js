import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <div className='navigation'>
                <div>
                    <Link to = '/firstPage'>First page</Link>
                </div>
                <div>
                    <Link to = '/secondPage'>Second page</Link>
                </div>
            </div>
        );
    }
}
