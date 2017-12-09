import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class HomePage extends Component {
    render() {
        return (
            <div>
                <iframe width="420" height="315"
            src="https://www.youtube.com/embed/Tm8LGxTLtQk">
                </iframe>
               <button><Link to="/MainMenu">ENTER</Link></button>
            </div>
        );
    }
}

export default HomePage;