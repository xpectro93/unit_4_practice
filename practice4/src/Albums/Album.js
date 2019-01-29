import React from 'react'
import {Link} from 'react-router-dom'

export const Album = props => {


let showPix = props.photos.map(photo => {

  // return <img src={photo.thumbnailUrl} alt="randomwordss"/>
  if(+props.albumId===photo.albumId){

    return <img key={photo.id} src={photo.thumbnailUrl} alt="random"/>
  }else{
    return null
  }

})


  return (
        <div>
          <Link id="linktest" to="/albums">Back</Link>
          <br/>
          {showPix}
          <br/>
          <Link id="linktest" to="/albums">Back</Link>

        </div>
   )

}
