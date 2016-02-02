class Mixtape extends React.Component{
  constructor(props){
    super(props)

    this.playMixtape = this.playMixtape.bind(this);
    this.deleteMixtape = this.deleteMixtape.bind(this)
    this.deleteBtn = this.deleteBtn.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
    // this.state = {songs: [] };
    // this.state = { mixtapes: [] };
  }


  playMixtape(){
    //debugger
    this.props.displayPlayMixtape(this.props.mixtape_id);
     // alert('play');

  }


  show_mixtape(){


  }


  deleteMixtape(){
    let self = this;
    $.ajax({
      url: '/mixtapes/' + this.props.id,
      type: "DELETE",
    }).success( data => {
      self.props.displayUsersMixTapes('users');
    });
  }

  deleteBtn(){
    if(this.props.author_id == this.props.current_user.id){
      return(<div onClick={this.deleteMixtape} className="rightbot waves-effect waves-light btn red">
              delete
            </div>)
    }
  }



  deleteSong(song_id){
    let self = this;
    $.ajax({
      url: '/song/' + song_id,
      type: 'DELETE'
    }).success( data => {
      self.props.displayUsersMixTapes('users');
    });
  }


  buttonSong(song_id){
    if(this.props.author_id == this.props.current_user.id){
      return(<div>
                <button onClick={() => this.deleteSong(song_id)} className="noah waves-light waves-effect btn orange">delete Song</button>
            </div>)
    }
  }

  render(){

    let songs = this.props.mixtape.map( song => {
      let key = `song-${song.song_id}`;

       //return(<Song key={key} {...song} />);
      return(<div>
              <li id={song.song_id}> {song.song_name} { this.buttonSong(song.song_id) }</li>

            </div>)

       // return(<Song key={key} {...song} />);
        return(<li>key={key} {song.song_name}  {song.artist_name}</li>)

    });


    return(<div>
            <div className='card small trublue darken-3 col s6 over'>
             { this.deleteBtn() }
              <div className='card-content white-text'>
                <h5>Mixtape: {this.props.name}</h5>
                <li>Rating: {this.props.average_rating}</li>
                <button onClick={this.playMixtape}>Play</button>
              </div>
             <div>
                {songs}
              </div>
             <br />
             <br />
            </div>
          </div>);
  }
}
