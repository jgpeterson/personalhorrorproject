import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Movies from './Movies'
import Podcasts from './Podcasts'
import Blogs from './Blogs'
import Header from './Header'
import styled from 'styled-components'


class MainMenu extends Component {
    render() {
        return (
            <div>
            <Header />
             <h1>Shout Factory announces Pre-Orders for The Strangers Blu-Ray</h1>
             <img src="https://i.imgur.com/Dqa19hh.png"/>
             < br/>
             <a href="https://www.shoutfactory.com/product/the-strangers-collector-s-edition?product_id=6621">Click to Pre-Order</a>
                
            </div>
        );
    }
}

export default MainMenu;