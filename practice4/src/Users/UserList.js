import React from 'react'
import { Link } from "react-router-dom"

//i want the list to show up as as soon as it renders,
//then when i look up a name i was only that link to render,
//if the name doesnt exist as part of the users i want a msg to be shown.
//if a user is found i want it to only render the result
export const UserList = props => {
  let links = props.users.map(user => {
      return (
          <li className="listLink" key={user.id}>
          <Link to={`/users/${user.id}/posts`}>
            {user.id} : {user.name}
          </Link>
          </li>
            )
  })
//if there is a match i want to create
  if(props.match===true){
    let link = ( <div>
                  <br/>
                  <br/>
                  <br/>
                  <li className="listLink" key={props.matchId}>

                  <Link to={`/users/${props.matchId}/posts`}>
                      {props.matchName}
                  </Link>

                  </li>
                  <br/>
                  <br/>
                  <Link onClick={props.handleClick2} to={'/users'}>Send me the fuck back!</Link>
                  </div>
                )


    return link
  }else {
    return(
            <div>
            <input type="text" onChange={props.handleChange} name="search" value={props.search}/>
            <br/>
            <button onClick={props.handleClick}>Search</button>
            <ul>
            {links}
            </ul>


            </div>
          )

  }






  // if(link){
  //   return(<div>
  //
  //         <input type="text" onChange={props.handleChange} name="search" value={props.search}/>
  //         <br/>
  //         <button onClick={props.handleClick}>Search</button>
  //         {link}
  //
  //
  //         </div>)
  // }




}
