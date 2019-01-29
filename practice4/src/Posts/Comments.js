import React from 'react'

export const Comments = props => {
  let commentsPerPost = props.comments.map(aComment=> {
    if(aComment.postId===props.postId){
      return (<div key={aComment.id}>
            <b>This is post iD: {aComment.postId} and Comment Id:{aComment.id}</b>
            <p> This is comment name:<b>{aComment.name}</b></p>
            <p>this is comment body: {aComment.body}</p>
            <p></p>

            </div>)
    }else{
      return null
    }
  })
  return (

    <div className="comments">
    {commentsPerPost}
    </div>

  )
}
