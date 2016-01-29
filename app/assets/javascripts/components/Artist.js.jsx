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
            <div className='card-panel green'>
              <div className='card-content white-text'>
                <p>{this.props.title} By: {this.props.artist} </p>

                  <a className="btn " onClick={() => this.play(this.props.station_id)}>play</a>
                  <a className="btn blue" onClick={() => this.add(this.props.title, this.props.artist)}>Add</a>

              </div>
            </div>

          </div>);
  }


}
