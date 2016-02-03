  class PlayMixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: []};
     this.getSongs = this.getSongs.bind(this);
     // this.findPlayingSongs = this.findPlayingSongs.bind(this);
  }

  // New commit



  componentWillMount(){
    this.getSongs();

  }

  getSongs(){
    $.ajax({
      url: '/mixtapes_find_single_mixtape',
      type: 'GET',
      data: {mixtape_id: this.props.mixtape_id}
    }).success( data => {

      this.setState({songs: data.songs});


    })
  }

  // findPlayingSongs(){
  //   // debugger
  //   for(var i = 0; i < this.state.songs.length; i++){
  //     return
  //   };

  // }



  render(){


     let songs = this.state.songs.map( song => {
      let key = `song-${song.song_id}`;
      

    return(<Song key={key} artist_name={this.props.artist_name} song_name={this.props.song_name}{...song} />);

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
