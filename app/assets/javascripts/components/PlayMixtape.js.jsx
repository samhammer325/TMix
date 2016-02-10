  class PlayMixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: [], mixtapeName:''};
     this.getSongs = this.getSongs.bind(this);
     this.isStreaming = this.isStreaming.bind(this);
  }

  componentDidMount(){
    this.getSongs();
  }

  getSongs(){
    $.ajax({
      url: '/mixtapes_find_single_mixtape',
      type: 'GET',
      data: {mixtape_id: this.props.mixtape_id}
    }).success( data => {
      this.setState({mixtapeName: data.name});
      this.setState({songs: data.songs});
      // debugger
    })
  }



    getRandomFromBucket(songs){

      let bucket = [];
      for (let i = 0; i <= songs.length - 1; i++) { 
        // bucket.push(songs[i].props.song_name);
        
        if (songs[i].isStreaming()) {
          bucket.push(songs[i].props.song_name);
        }
      }
      let randomIndex = Math.floor(Math.random() * bucket.length);
        
        return bucket.splice(randomIndex, 1)[0];

      }
  
  isStreaming(){
    debugger
    if(this.state.streaming == true) {
      return true;
    }
    return false;
  }


  render(){
    // this.getSongs();
    let songs = this.state.songs.map( song => {
    let key = `song-${song.song_id}`;

    return(<Song key={key} artist_name={this.props.artist_name} song_name={this.props.song_name} streaming = {this.isStreaming} {...song} />);

  });

    return(<div>
            <div className= 'card-panel cyan'>
              <div className='card-content white-text'>
                <h5 className="center">{this.state.mixtapeName} </h5>
                {songs}
                <div>
                  <button className="btn" onClick={() => this.getRandomFromBucket(songs)}> Random</button>
                </div>
              </div>
            </div>
          </div>);
  }
}
