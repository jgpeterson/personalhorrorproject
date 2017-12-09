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
            <Link to="Blogs">Blogs</Link>
            <div>
            <Link to="Podcasts">Podcasts</Link>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;