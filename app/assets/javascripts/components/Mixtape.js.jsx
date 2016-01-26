class Mixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: [] };
  }

  render(){

     let songs = this.state.songs.map( song => {
      let key = `song-${song_id.id}`;
      return(<Song key={key} {...song} />);
    });
     
    return(<div>
            <div className='card small blue darken-3 col s6'>
              <div className='card-content white-text'>
                <h5>Mixtape: {this.props.name}</h5>
              </div>
            </div>
          </div>);
  }
}
