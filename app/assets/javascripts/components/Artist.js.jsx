class Artist extends React.Component{
  constructor(props){
    super(props)
    this.play = this.play.bind(this)
  }
  componentDidMount(){
  }

  play(station){
    let player = document.getElementById("player")
    player.src = "http://api.dar.fm/player_api.php?station_id=" + station + "&custom_style=radioslice&partner_token=9388418650"
  }
  
  render(){
    return(<div>
            <div className='card large green lighten-2 col 4'>
              <div className='card-content white-text'>

                <h4>Artist: {this.props.artist}</h4>
                <h5>Song: {this.props.title}</h5>
                <br />
                <a className="btn" station_id={this.props.station} onClick={() => this.play(this.props.station_id)}>player</a>
              </div>
            </div>

          </div>);
  }


}
