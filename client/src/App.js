import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import MainMenu from './components/MainMenu'
import Movies from './components/Movies'
import Podcasts from './components/Podcasts'
import Blogs from './components/Blogs'
import HomePage from './components/HomePage'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Switch>
        <Route exact path="/" component={HomePage} />
  
        <Route exact path="/MainMenu" component={MainMenu} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/podcasts" component={Podcasts} />
        </Switch>
        </div>
        </Router>
    );
  }
}


export default App;
