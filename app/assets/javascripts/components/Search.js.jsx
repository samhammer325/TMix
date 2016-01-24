class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {results: []};
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getStationId = this.getStationId.bind(this);
  }
  componentDidMount(){
  }

  getStationId(){
    debugger
  }

  getSearchResults(){
    self = this;
    let searchTerm = self.refs.searchText.value.replace(/\s/g, "%20")
    $.ajax({
      url: "http://api.dar.fm/playlist.php?&q=@artist%" + searchTerm + "&callback=jsonp&partner_token=9388418650",
      jsonp: 'callback',
      //type: 'GET',
      dataType: 'jsonp',
    }).success( data => {

      this.setState({artist: data});
      this.getStationId();
    });
  }

  render(){
    return(
        <div>
          <h5>Search for an artist:</h5>
          <input type='text' ref='searchText' placeholder="Artist"/>
          <span onClick={this.getSearchResults} className='btn'>Search</span>
        </div>)
  }
}
