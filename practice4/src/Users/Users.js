import React, {Component} from 'react'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import {UserList} from './UserList'
import {UserPosts} from './UserPosts'
// import {UserLink} from './UserLink'

class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      users:[],
      posts:[],
      search:"",
      match:false,
      matchId:0,
      matchName:""
    }
  }
  componentDidMount(){
    axios
    .get("https://jsonplaceholder.typicode.com/Users")
    .then(response => {

      this.setState({
        users:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })
    //get array of obj, then key into names and turn all the names to lower

    axios
    .get("https://jsonplaceholder.typicode.com/Posts")
    .then(response => {

      this.setState({
        posts:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })


  }
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleClick2 = ()=> {
    this.setState({
      match:false
    })
  }
  handleClick = ()=> {
      let searched = this.state.search
      // this.setState({
      //   ready:true
      // })
      this.state.users.map(user => {
      if(user.name.toLowerCase()===searched.toLowerCase()){
        console.log(user.name)
        this.setState({
          match:true,
          matchId:user.id,
          matchName:user.name
        })
      }else{
        return null
      }
      })

  }

  // <input type="text" onChange={this.handleChange} name="search" value={this.state.search}/>
  // <br/>
  // <button onClick={this.handleClick}>Search</button>
  renderPosts = () => {
    return <UserPosts handleClick2={this.handleClick2} userId={this.props.match.params.id} posts={this.state.posts}/>
  }


  render(){
    // console.log(this.props.match.params.id);
    console.log(this.state.search);
    return(<div>

      <Switch>
        <Route exact path='/users' render={()=> {
          return <UserList
                  users={this.state.users}
                  search={this.state.search}
                  handleChange={this.handleChange}
                  match={this.state.match}
                  handleClick={this.handleClick}
                  handleClick2={this.handleClick2}
                  matchId={this.state.matchId}
                  matchName={this.state.matchName}
                />
                  }}
        />

        <Route path='/users/:id/posts' render={this.renderPosts}/>
      </Switch>



          </div>
    )
  }

}
export default Users;
