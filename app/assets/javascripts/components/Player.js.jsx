class Player extends React.Component{
  constructor(props){
    super(props);
    this.displayIframe = this.displayIframe.bind(this);
    //this.state = {}
  }

  displayIframe(){
    debugger
    if(this.props.stationId){
      return(
        <iframe src="http://api.dar.fm/player_api.php?station_id=`${this.props.stationId}`&custom_style=radioslice&partner_token=9388418650"></iframe>
      )
    } else {
      return(
        <iframe src="http://api.dar.fm/player_api.php?station_id=6480&custom_style=radioslice&partner_token=9388418650"></iframe>
      )};
  }
  // }

  render(){
    return(
      <div>
        {this.displayIframe()}
      </div>
    )
  }
}