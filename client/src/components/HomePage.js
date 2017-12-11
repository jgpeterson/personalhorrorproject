import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const FlexContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 150px;
align-items: center;
height: 50vh;
flex-direction: column;
text-align: center;

`

class HomePage extends Component {
    render() {
        return (
            <FlexContainer>
            
               <img src="https://i.imgur.com/ztpdR31.jpg"/>
               <button><Link to="/MainMenu">ENTER</Link></button>
            
            </FlexContainer>
        );
    }
}

export default HomePage;