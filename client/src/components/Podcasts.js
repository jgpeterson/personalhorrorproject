import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import axios from 'axios'

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
                
                <div>
                    {video.title}
                    <div>
                    <iframe src={video.description}/>
                    </div>
                </div>
               
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