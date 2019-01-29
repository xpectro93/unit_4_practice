import React from 'react'
import { Link } from "react-router-dom"

export const AlbumList = props => {
let links = props.albums.map(album => {
    return (
        <li className="listLink" key={album.id}>
        <Link to={`/albums/${album.id}`}>
          {album.id} : {album.title}
        </Link>
        </li>
          )
})
return (<>
  <ul>

  {links}
  </ul>
        </>)


}
