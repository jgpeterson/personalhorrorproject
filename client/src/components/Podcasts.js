import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import axios from 'axios'

const FlexContainer = styled.div`
text-align: center;
display: inline-block;
width: 85%;
background: rgba(0, 0, 0, 0.5);
border: 1px solid;
margin-bottom: 8px;
margin-right: 8px;
margin-left: 170px;
border-radius: 50px;
padding: 15em;
position: relative;
min-width: 340px;
max-width: 850px;
@media screen and (max-width:450px) {
 .logo img {
     font-size: 1.25rem;
     max-width: 700px;
 }
 @media screen and (max-width:450px) {
   background: none;
 }
`


class Podcasts extends Component {
    state = {
        podcasts: [],
       
    }

    componentWillMount() {
        this.getAllPodcasts()
    }

    getAllPodcasts = async () => {
        const res = await axios.get('/api/podcasts')
        this.setState({ podcasts: res.data })
    }

    render() {

        const videos = this.state.podcasts.map((video) => {
            return (
                <FlexContainer>
                <div>
                <h1>Podcast List</h1>
                    {video.title}
                    <div>
                    <iframe src={video.description}/>
                    </div>
                </div>
               </FlexContainer>
            )
        })

        return (
            <div>
                <Header />
                {videos}
            </div>
        )
    }
}

export default Podcasts;