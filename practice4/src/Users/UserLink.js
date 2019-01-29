import React from 'react';
import { Link } from "react-router-dom";


export const UserLink = props => {
  return (
    <li className="listLink" key={props.userId}>
      <Link to={`/users/${props.userId}/posts`}>
      {props.userId} : {props.userName}
      </Link>
    </li>

  )
}
