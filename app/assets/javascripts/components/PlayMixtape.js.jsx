class PlayMixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {mixtape_id: 10, songs2: []};
     this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount(){

       this.getSongs();
  }

  getSongs(){
    $.ajax({
      url: '/mixtapes_find_single_mixtape',
      type: 'GET',
      data: {mixtape_id: this.state.mixtape_id}
    }).success( data => {
         // debugger
      this.setState({songs2: data.songs});
      // debugger

    })
  }


  render(){
     // this.getSongs;
        // debugger

    // self = this;
    // let i = 0;
    // let artists = this.state.results.map( artist => {
    //   let key = `artist-${i++}`
    //   return(<Artist key={key} {...artist} rplay={self.playSong} mixtapeId={self.state.mixtape_id} getSongs={this.getSongs}/>);
    // });
    // let playerKey = `player`

    let j = 0;
    let songs = this.state.songs2.map( song => {
      let key = `artist-${j++}`
    return(<p> {song.song_name} By: {song.artist} </p>);
   
    });
      

     // this.props.getSongs();
    return(<div>
            <div className= 'card-panel green'>
              <div className='card-content white-text'>
                <h5>Play Mixtape: </h5>
                  {songs}
              </div>
            </div>
          </div>);
  }
}