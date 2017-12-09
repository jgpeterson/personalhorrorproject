import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
            <div>
               <img src="https://i.imgur.com/mFjp7Nd.jpg"/>
               <button><Link to="/MainMenu">ENTER</Link></button>
            </div>
        );
    }
}

export default HomePage;