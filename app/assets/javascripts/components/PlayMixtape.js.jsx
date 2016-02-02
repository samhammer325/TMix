class PlayMixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {mixtape_id: 10, songs: []};
     this.getSongs = this.getSongs.bind(this);
     // this.findPlayingSongs = this.findPlayingSongs.bind(this);
  }

  

  componentWillMount(){
    this.getSongs();

  }

  getSongs(){
    $.ajax({
      url: '/mixtapes_find_single_mixtape',
      type: 'GET',
      data: {mixtape_id: this.state.mixtape_id}
    }).success( data => {
         // debugger
      this.setState({songs: data.songs});
      // debugger

    })
  }

  // findPlayingSongs(){
  //   // debugger
  //   for(var i = 0; i < this.state.songs.length; i++){
  //     return 
  //   };
   
  // }
  


  render(){


    // debugger
     let songs = this.state.songs.map( song => {
      let key = `song-${song.id}`;
    return(<Song key={key}  {...song} />);

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