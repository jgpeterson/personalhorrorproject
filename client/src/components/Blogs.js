import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import axios from 'axios'

const FlexContainer = styled.div`
text-align: center;
display: inline-block;
width: 85%;
padding: 15em;
position: relative;
min-width: 340px;
max-width: 850px;
`

class Blogs extends Component {

    state = {
        blogs: [],
       
    }

    componentWillMount() {
        this.getAllBlogs()
    }

    getAllBlogs = async () => {
        const res = await axios.get('/api/blogs')
        this.setState({ blogs: res.data })
    }

    render() {

        const opinions = this.state.blogs.map((opinion) => {
            return (
                <FlexContainer>
                <div>
                    <h1>{opinion.title}</h1>
                    <div>
                    {opinion.description}
                    </div>
                </div>
                </FlexContainer>
            )
        })

        return (
            <div>
                <Header />
                {opinions}
            </div>
        )
    }
}
export default Blogs;