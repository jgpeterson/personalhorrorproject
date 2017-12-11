import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


class Header extends Component {
    render() {
        return (
            <div>
            <div className="container">
            <div className="item">
              <Link to="/MainMenu">Main Menu</Link>
            </div>
            <div className="item">
              <Link to="/movies">Movies</Link>
            </div>
            <div className="item">
            <Link to="/blogs">Blogs</Link>
            </div>
            <div className="item">
            <Link to="/podcasts">Podcasts</Link>
            </div>
            </div>
            </div>
        );
    }
}

export default Header;