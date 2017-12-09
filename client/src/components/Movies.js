import React, { Component } from 'react';
import { Link, } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

class Movies extends Component {

    state={
        movie: []
    }
    componentWillMount(){
        this.getMovies()
    }

    getMovies = async () => {
        const res = await axios.get('/api/movies')
        console.log(res.data)
        this.setState({movie: res.data})
    }
    render() {
        return (
            <div>
              {<h1>{this.state.movie.title}</h1>}
            </div>
        );
    }
}

export default Movies;