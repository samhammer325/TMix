class Song extends React.Component{
  constructor(props){
    super(props);
    this.state = {results: [], streaming: false, station: 0};
    this.renderPlayButton = this.renderPlayButton.bind(this);
    this.addButton = this.addButton.bind(this);
    this.play = this.play.bind(this);
    // this.getSearchResults = this.getSearchResults.bind(this);
    // this.createMixtape = this.createMixtape.bind(this);
    // this.getSongs = this.getSongs.bind(this);
        // debugger
  }


  componentWillMount(){
    if (this.state.streaming == false) {
      this.renderPlayButton();
    };
      
  }

  renderPlayButton(){
    self = this;
    artist = this.props.artist_name.replace(/\s/g, '%20')
    song = this.props.song_name.replace(/\s/g, '%20')
    // testUrl = "http://api.dar.fm/playlist.php?q=" + artist + "%20" + song + "&callback=jsonp&partner_token=1234567890";
    // console.log(testUrl);
    $.ajax({
      // url: "https://apidarfm.global.ssl.fastly.net/playlist.php?&q=@artist%" + this.props.artist_name + "@title" + this.props.song_name +"&callback=jsonp&partner_token=9388418650",
      url: "http://api.dar.fm/playlist.php?q=" + artist + "%20" + song + "&callback=jsonp&partner_token=1234567890",
      jsonp: 'callback',
      type: 'GET',
      dataType: 'jsonp',
    }).success( data => {
      this.setState({results: data});
      // debugger
      if (this.state.results.length != 0) {
        this.state.station = this.state.results[0].station_id;
      };


    });
  }
  play(station){
    // debugger
    let player = document.getElementById("player")
    player.src = "https://apidarfm.global.ssl.fastly.net/player_api.php?station_id=" + station + "&custom_style=radioslice&partner_token=9388418650"

  }

  addButton(){
      alert('no results');
     if (this.state.results.length != 0) {
      alert('Has results');
      
      return (<button onClick={this.play(this.state.station)} className='btn'>Play</button>);

    };

  }




  render(){
    // debugger
    // this.renderPlayButton;

        if (this.state.streaming) {
          alert('streaming');
          return(
             <div>
              <p>{this.props.song_name}</p>
              <p>By: {this.props.artist_name}</p>
              <button onClick={this.play(this.state.station)} className='btn'>Play</button>
              </div>
            );
         
        }else{
          alert('not streaming')
          return(
             <div>
              <p>{this.props.song_name}</p>
              <p>By: {this.props.artist_name}</p>
            </div>
            );
         
        };
  }
}











