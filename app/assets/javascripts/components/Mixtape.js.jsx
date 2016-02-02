class Mixtape extends React.Component{
  constructor(props){
    super(props)

    this.playMixtape = this.playMixtape.bind(this);
    this.deleteMixtape = this.deleteMixtape.bind(this)
    this.deleteBtn = this.deleteBtn.bind(this)
    // this.state = {songs: [] };
    // this.state = { mixtapes: [] };
  }


  playMixtape(){
     debugger
    
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


  render(){
      // debugger


    let songs = this.props.mixtape.map( song => {
      let key = `song-${song.song_id}`;
       return(<Song key={key} {...song} />);
      // return(<li> {song.song_name} </li>)
    });
    

    return(<div>
            <div className='card small blue darken-3 col s6'>
             { this.deleteBtn() }
              <div className='card-content white-text'>
                <h5>Mixtape: {this.props.name}</h5>
                <li>Rating: {this.props.average_rating}</li>
                <button onClick={this.playMixtape}>Play</button>
              </div>
             {songs}

             

             <br />
             <br />

            </div>
          </div>);
  }
}
