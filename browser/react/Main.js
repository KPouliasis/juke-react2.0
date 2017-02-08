'use strict';
const Promise = require('bluebird')
const React = require('react')
// const ReactDOM = require('react-dom')
const Sider = require('./Sider')
const Footer = require('./Footer')
const SingleAlbum = require('./SingleAlbum')
import axios from 'axios';

const AlbumItem = (props) => { console.log(props.handler)
                              return (
                              <div className="col-xs-4" >
                                     <a className="thumbnail" onClick = {() => props.handler(props.id)} href="#">
                                     <img src= {props.imageUrl}/>
                                     <div className="caption">
                                       <h5>
                                         <span>{props.name}</span>
                                       </h5>
                                       <small>{props.length}</small>
                                     </div>
                                   </a>
                                 </div>
                              )}

const AlbumsRenderOnResolve = (props) => {
   if (props.length) {
      return (<div className="row">{
         props.albums.map(({id, name, imageUrl, songs}) =>
            (<AlbumItem key = {id}  id ={id} name = {name} imageUrl = {imageUrl}
                        length ={songs.length} handler = {props.handler} />))
      }
            </div>)
   }
   else {
      return (<h1> loading </h1>)
   }
}

class Main extends React.Component {
   constructor(props){
      super(props)
      this.state = {albums: [], selectedAlbum: {}}
      this.serverRequest ={}

      this.clickHandle = this.clickHandle.bind(this)

   }

   clickHandle (id){
      console.log(id)
      this.setState({selectedAlbum: this.state.albums[id - 1]})
   }

   componentDidMount() {
      this.serverRequest =
         axios.get('api/albums')
         .then(response => {
             return response.data;
           })
         .then(albums => {
             console.log('success');
             console.log(albums);
             return albums;
            })
         .then(albumsFromServer => {
               let imageAlbums = albumsFromServer.map(album => {
                  album.imageUrl = `/api/albums/${album.id}/image`;
                  return album;
                  })
                this.setState({ albums: imageAlbums });
              })
          .catch(err => {
                 console.error('error');
                 console.error(err);
               });
            }
         //  .then(albums => Promise.map(albums, alb => [alb,axios.get(`api/albums/${alb.id}/image`))
         //                  .then(images => {albums.forEach((alb, i) => {alb.imageUrl = images[i]})
         //                                   return albums
         //                                  }))


         // )
         //  .then(albimgs => albimgs.reduce( (acc, albimg) => { albimg[0].imageUrl = albimg[1]
         //                                                      acc.push(albimg[0])
         //                                                      return acc
         //                                                   }, []))

   render(){
      console.log((props) =>  this.clickHandle(props))
       return (
           <div id="main" className="container-fluid">
             <div className="row">
                  <Sider />
                  <div className = "col-xs-10" >
                    <h3>Albums</h3>
                    <AlbumsRenderOnResolve handler = {this.clickHandle} length = {this.state.albums.length} albums ={this.state.albums} />
                    <SingleAlbum album = {this.state.selectedAlbum} jisoo="hi" />

                 </div>
            </div>
            <div className="row">
               <Footer />
            </div>
          </div>
           )
        }
}
module.exports = Main;
