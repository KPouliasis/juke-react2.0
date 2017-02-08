const React = require('react');

class SingleAlbum extends React.Component {
 render(){
   console.log("hereee!!=>", this.props)
   if (this.props.album.id){
     return (
       <div>
      <div>
        <h3>{this.props.album.name}</h3>
        <img src= {this.props.album.imageUrl} className="img-thumbnail" />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Artists</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className="btn btn-default btn-xs">
                <span className="glyphicon glyphicon-play"></span>
              </button>
            </td>
            {this.props.album.songs.map(song => (<td>{song.title}</td>))}
            <td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
            <td>I SHOULD BE A SONG GENRE</td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-default btn-xs">
                <span className="glyphicon glyphicon-play"></span>
              </button>
            </td>
            <td>I SHOULD BE ANOTHER SONG NAME</td>
            <td>I SHOULD BE A STRING OF THAT SONG'S ARTISTS</td>
            <td>I SHOULD BE A SONG GENRE</td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
  else {return (<p></p>)}
}
}

module.exports = SingleAlbum
