import React from 'react'
import { Comments } from './Comments'

export const DisplayPosts = props => {

let postss = props.posts.map(post => {
    return (
      <div key={post.id} className="post">
        <div className="actualPost">
          <h1>This is post id: {post.id}</h1>
          <h3>This is post title: {post.title}</h3>
          <p>This is post body: {post.body}</p>
        </div>
        <Comments postId={post.id} comments={props.comments}/>
      </div>
    )
})

  return(
    <div className="posts">
    {postss}
    </div>
  )
}
