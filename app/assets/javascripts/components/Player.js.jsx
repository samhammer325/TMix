class Player extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <iframe className="player" id="player" src="http://api.dar.fm/splayer_api.php?station_id=6480&custom_style=radioslice&partner_token=9388418650"></iframe>
      </div>
    )
  }
}
