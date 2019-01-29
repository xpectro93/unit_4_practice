import React, {Component} from 'react';
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import {AlbumList} from './AlbumList'
import {Album} from './Album'


// - `/albums`: List of all album titles, with links to the individual album routes.
// - `/albums/:id`: Lists all photos for a given album in a row that wraps if the page is too narrow.
//  Don't worry about the photos' titles. Feel free to use the `thumbnailUrl` for the photos rather than the full-sized
//   URL. Include a `back` link to return to the `/albums` route.

class Albums extends Component {
  constructor(){
    super()
    this.state = {
      albums:[],
      photos:[]
    }
  }

  componentDidMount(){
    this.getAlbums()
  }

  getAlbums =() => {
    axios
    .get("https://jsonplaceholder.typicode.com/Albums")
    .then(response => {
      this.setState({
        albums:response.data
      })

    })
    .catch(err => {
      console.log(err)
    })
    axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      this.setState({
        photos:res.data
      })
    })
  }
  listAlbums = () => {
    return (<AlbumList albums={this.state.albums}/>)
  }
  showAlbum = props => {
    const { id } = this.props.match.params
    // console.log(id)
    return (<>
              <Album
              albumId={id}
              photos={this.state.photos}
              />

            </>
    )

  }
//i need to get a component that will make a list(links) of titles

//what i want now is to create 2 routes which will lead to functions that pass props into individual components for
  render(){
    console.log(this.props)
    return(
      <div>
        <Switch>
          <Route path="/albums/:id" render={this.showAlbum}/>
          <Route exact path="/albums" render={this.listAlbums}/>

        </Switch>
      </div>
          )
  }

}
export default Albums;
