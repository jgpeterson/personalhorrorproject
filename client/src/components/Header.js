import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class Header extends Component {
    render() {
        return (
            <div>
            <div>
             <Link to="/Movies">Movies</Link>
             </div>
             <div>
            <Link to="Reviews"></Link>
            </div>
            <div>
            <Link to="Blogs"></Link>
            <div>
            <Link to="Podcasts"></Link>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;