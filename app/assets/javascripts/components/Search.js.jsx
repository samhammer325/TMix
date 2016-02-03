  class Search extends React.Component{

// take input from search, and make an ajax call for info.
// convert info to use for card.
// send info to card {songinfo}  also change the search button to back to span if needed
// must add key to get the warning away!
  constructor(props){
    super(props);
    this.state = {results: [], searched: false, mixtape_id: 0, mixtapeName: '', mixTapeCategory: '', songs: []};
    this.getSearchResults = this.getSearchResults.bind(this);
    this.createMixtape = this.createMixtape.bind(this);
    this.getSongs = this.getSongs.bind(this);
    this.noArtists = this.noArtists.bind(this);
    this.pass = this.pass.bind(this);
  }

  getSearchResults(){
    let self = this;
    let searchTerm = self.refs.searchText.value.replace(/\s/g, "%20")
    $.ajax({
      url: "http://api.dar.fm/playlist.php?&q=@artist%" + searchTerm + "&callback=jsonp&partner_token=9388418650",
      jsonp: 'callback',
      type: 'GET',
      dataType: 'jsonp',
    }).success( data => {
      this.state.searched = true;
      this.setState({results: data});
    });
  }

  createMixtape(){
    $.ajax({
      url: '/mixtapes',
      type: 'POST',
      data: {name: this.refs.mixtapeName.value, category: this.refs.category.value}
    }).success( data => {
      // alert('yay')
      this.refs.mixtapeName.value = null;
      this.refs.category.value = null;
      this.setState ({mixtape_id: data.id, mixtapeName: data.name, mixTapeCategory: data.category, songs: []})
      $("#mixtapeForm").slideToggle("slow");
      $("#cardHolder").slideToggle("slow");

    });
  }

  pass(){
    $("#mixtapeForm").slideToggle("slow");
    $("#cardHolder").slideToggle("slow");
  }

  // findMixTape(){
  //   $ajax({
  //     url: '/mixtapes',
  //     type: 'GET'
  //   }).success( data => {
  //     this.setState({})
  //   })
  //   }
  // }

  getSongs(){
    $.ajax({
      url: '/mixtapes_find_single_mixtape',
      type: 'GET',
      data: {mixtape_id: this.state.mixtape_id}
    }).success( data => {
      // debugger
      this.setState({songs: data.songs});

    })
  }

  noArtists(artists){
    if(artists.length == 0 && this.state.searched) {
      if(self.refs.searchText.value == "") {
        return(<h5>Please search for an artist! </h5>);
      }else {
        return(<h5>Could not find {self.refs.searchText.value} playing on a station.</h5>);
      }
    }
  }



  // createSong(){
  //   $.ajax({
  //     url: '/songs',
  //     type: 'POST',
  //     data: {mixtape_id: this.mixtape_id}
  //   }).success(
  //    alert('yes'))
  //   });
  // }


        // current_state = this.state;
       // current_state[:mixtape_id] = data.mixtape_id;
     // this.setState(current_state);


  render(){
    // debugger
    self = this;
    let i = 0;
    let artists = this.state.results.map( artist => {
      let key = `artist-${i += 1}`
      return(<Artist key={key} {...artist} rplay={self.playSong} mixtapeId={self.state.mixtape_id} getSongs={this.getSongs}/>);
    });

    let songArray = [];
    let songs = this.state.songs.map( song => {
      let key = `song-${song.song_id}`
      songArray.push(<MixTapeSong key={key} {...song}/>);
    });

    return(
        <div>
          <div id="mixtapeForm">
            <div className="row">
              <input className="col s6" autofocus='true' placeholder='MixTape Name' ref='mixtapeName'/>
            </div>
            <div className="row">
              <input className="col s6" placeholder='Category' ref='category'/>
            </div>
              <button onClick={this.createMixtape} className='btn'>Create New Mixtape</button>

          </div>

           <div id='cardHolder' className='row'>
             <div className='card-panel cyan'>
                <div className='card-content'>
                  <h3> {this.state.mixtapeName}</h3>
                {songArray}
                <button onClick={this.pass} className='btn'>Done</button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          <div>
            <h5 className="salt center white-text">Search for an artist</h5>
            <br />
              <input className='marginn' type='text' ref='searchText' autofocus='true' placeholder="Artist"/>
              <div className="center">
              <button onClick={this.getSearchResults} className='btn waves-effect waves-light'>Search</button>
              </div>
          </div>
          <br />
          <br />
          <h4 className='center-align center salt white-text'>Artists playing:</h4>
          <br />
          <div className='row'>
          {this.noArtists(artists)}
          {artists}
          </div>

        </div>)
  }
}
