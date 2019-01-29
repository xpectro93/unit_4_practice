import React, { Component } from 'react';
import { Switch, Route, Link } from  'react-router-dom'
import {withRouter} from 'react-router'
import {Home} from './Home'
import Posts from './Posts/Posts'
import Albums from './Albums/Albums'
import Todos from './Todos/Todos'
import Users from './Users/Users'


import './App.css';
// <Link to={"/posts"}>Posts </Link>
// <Link to={"/albums"}>Albums </Link>
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link id="nav" to={"/"}> Home </Link>
          <Link id="nav" to={"/posts"}>Posts </Link>
          <Link id="nav" to={'/albums'}>Albums </Link>
          <Link id="nav" to={'/todos'}>To-Do </Link>
          <Link id="nav" to={'/users'}>Users </Link>
        </nav>


        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/posts" component={Posts}/>

          <Route exact path="/albums" component={Albums}/>
          <Route path="/albums/:id" component={Albums}/>


          <Route exact path = "/todos" component={Todos}/>

          <Route exact path="/users" component={Users}/>
          <Route path="/users/:id/posts" component={Users}/>





        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
