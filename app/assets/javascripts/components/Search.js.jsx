class Search extends React.Component{
// git input for search term
//done
// take input from search, and make an ajax call for info.
// convert info to use for card.
// send info to card {songinfo}  also change the search button to back to span if needed
// must add key to get the warning away!
  constructor(props){
    super(props);
    this.state = {results: []};
    this.getSearchResults = this.getSearchResults.bind(this);
    this.playSearch = this.playSearch.bind(this);
  }
  componentDidMount(){
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
      // this.playSearch();
    });
  }
  playSearch(){
    let stationId = this.state.artist[0].station_id
    $.ajax({
    url: "/home_play",
    type: "post",
    data: {station: stationId},
    success: function(){
    },
    error:function(){
      alert('Error');
    }
    });
  }
  rPlay(){
    // @station = 
    let player = document.getElementById("player")
    debugger
  }
  render(){
    let i = 0;
    let artists = this.state.results.map( artist => {
      let key = `artist-${i++}`
      return(<Artist key = {key} {...artist} />);
    });
    // let player = this.state.results.map( player => {
    //   return(<Player {...player} />);
    // });
    // let player = this.props.station_id( player => {
    //   return(<{player} />);
    // });
    return(
        <div>
          <h5>Search for an artist:</h5>
          <input type='text' ref='searchText' autofocus='true' placeholder="Artist"/>
          <button onClick={this.getSearchResults} className='btn'>Search</button>
          <hr />
          <h4 className='center-align'>Artists playing:</h4>
          <br />
          <div className='row'>
            {artists}
          </div>
          <hr />
          <div className='row'>
            <button className="btn" onClick={this.rPlay} >something</button>
          </div>
        </div>)
  }
}