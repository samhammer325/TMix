class Song extends React.Component(){

  constructor(props){
    super(props);
    this.state = {};
    this.getSearchResults = this.getSearchResults.bind(this);
    this.createMixtape = this.createMixtape.bind(this);
    this.getSongs = this.getSongs.bind(this);
  }

  renderPlayButton(){
    let self = this;
    $.ajax({
      url: "http://api.dar.fm/playlist.php?&q=@artist%" + this.artist + "@title" + this.name +"&callback=jsonp&partner_token=9388418650",
      jsonp: 'callback',
      type: 'GET',
      dataType: 'jsonp',
    }).success( data => {
      this.setState({results: data});
    });
  }

  play(station){
    let player = document.getElementById("player")
    player.src = "http://api.dar.fm/player_api.php?station_id=" + station + "&custom_style=radioslice&partner_token=9388418650"
  }



  render(){
    <div>
    </div>
  }
}