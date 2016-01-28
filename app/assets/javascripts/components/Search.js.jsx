class Search extends React.Component{

// take input from search, and make an ajax call for info.
// convert info to use for card.
// send info to card {songinfo}  also change the search button to back to span if needed
// must add key to get the warning away!
  constructor(props){
    super(props);
    this.state = {results: []};
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  getSearchResults(){
    self = this;
    let searchTerm = self.refs.searchText.value.replace(/\s/g, "%20")
    $.ajax({
      url: "http://api.dar.fm/playlist.php?&q=@artist%" + searchTerm + "&callback=jsonp&partner_token=9388418650",
      jsonp: 'callback',
      type: 'GET',
      dataType: 'jsonp',
    }).success( data => {
      this.setState({results: data});
    });
  }


  render(){
    self = this;
    let i = 0;
    let artists = this.state.results.map( artist => {
      let key = `artist-${i++}`
      return(<Artist key={key} {...artist} rplay={self.playSong} />);
    });
    let playerKey = `player`
    return(
        <div>

          <Player ref="player" rplay={this.playSong} key={playerKey} station = {this.props.station_id}/>

          <Player ref="player" rplay={this.playSong} key={playerKey} station = {this.props.station_id}/>
          <h5>Search for an artist:</h5>
          <input type='text' ref='searchText' autofocus='true' placeholder="Artist"/>
          <button onClick={this.getSearchResults} className='btn'>Search</button>
          <hr />
          <h4 className='center-align'>Artists playing:</h4>
          <br />
          <div id='cardHolder' className='row'>
            {artists}
          </div>
          <hr />
        </div>)
  }
}
