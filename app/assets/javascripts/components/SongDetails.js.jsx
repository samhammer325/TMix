class SongDetails extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return(<li> {this.props.songName} by {this.props.artistName} </li>)
  }
}
