class Artist extends React.Component{
  constructor(props){
    super(props)
  }

  play(){

  }
  render(){
    
    return(<div>
            <div className='card large green lighten-2 col 4'>
              <div className='card-content white-text'>

                <h4>Artist: {this.props.artist}</h4>
                <h5>Song: {this.props.title}</h5>
                <br />
                <a id="playButton" className="btn" station_id={this.props.station_id}>player</a>
              </div>
            </div>
          </div>);
  }


}
