import React, {Component} from 'react'
import axios from 'axios'
import { DisplayPosts } from './DisplayPosts'

class Posts extends Component {
  constructor(){
    super()
    this.state = {
      posts:[],
      comments:[]
    }
  }

  componentDidMount(){
    this.getPosts()
    this.getComments()

  }
  getPosts=()=> {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      this.setState({
        posts:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })
  }
  getComments=()=> {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(response => {
      this.setState({
        comments:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })
  }


  render(){
  console.log(this.state.comments)
    return(
      <>
      <h1>Posts!</h1>
      <DisplayPosts
        posts={this.state.posts}
        comments={this.state.comments}
     />
      </>
    )
  }
}
export default Posts
