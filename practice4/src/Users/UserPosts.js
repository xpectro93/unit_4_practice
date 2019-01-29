import React from 'react'
import {Link} from 'react-router-dom'

export const UserPosts = props => {


let showPosts = props.posts.map(post => {

  if(+props.userId===post.userId){

    return (<div key={post.id}>
      <h1>This is title:{post.title}</h1>
      <p>This is body: {post.body}</p>

        </div>)
  }else{
    return null
  }

})


  return (
        <div>
          <Link onClick={props.handleClick2} id="linktest" to="/users">Back</Link>
          <br/>
          {showPosts}
          <br/>
          <Link onClick={props.handleClick2} id="linktest" to="/users">Back</Link>

        </div>
   )

}
