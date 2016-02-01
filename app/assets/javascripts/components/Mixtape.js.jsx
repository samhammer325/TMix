class Mixtape extends React.Component{
  constructor(props){
    super(props)
    this.playMixtape = this.playMixtape.bind(this);
    // this.state = {songs: [] };
  }

  playMixtape(){
     debugger
    this.props.temp();
  }


  render(){
    
          // debugger

    let songs = this.props.mixtape.map( song => {
      let key = `song-${song.song_id}`;
       //return(<Song key={key} {...song} />);
      return(<li> {song.song_name} </li>)
    });
   
    return(<div>
            <div className='card small blue darken-3 col s6'>
              <div className='card-content white-text'>
                <h5>Mixtape: {this.props.name}</h5>
                <li>Rating: {this.props.average_rating}</li>
              </div>
             {songs}
             
            </div>
          </div>);
  }
}
