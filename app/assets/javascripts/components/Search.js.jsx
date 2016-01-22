class Search extends React.Component{
  constructor(props){
    super(props);
    // this.search = this.search.bind(this)
    this.state = {results: []};
  }

  componentDidMount(){
    // this.getTweets()
  }

  getSearcheResults(){
    $.ajax({
      // url: "http://api.dar.fm/playlist.php?callback=json&partner_token=9388418650&q=@artist%black",
      url: "http://api.dar.fm/playlist.php?&q=@artist%black&callback=?&partner_token=9388418650",
      type: 'GET',
      dataType: 'jsonp'
      // debugger
      // data: { artist: this.refs.searchText.value }
    }).success( data => {artist: artist}
      debugger
      // this.setState({tweets: data})
    })

  }

  render(){

    return(
        <div>
          <h5>Search for an artist:</h5>
          <input type='text' ref='searchText' placeholder="Artist"/>
          <button onClick={this.getSearcheResults} class='btn'>Search</button>

        </div>)
  }
}
