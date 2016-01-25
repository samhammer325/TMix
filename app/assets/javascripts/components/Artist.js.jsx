class Artist extends React.Component{
  constructor(props){
    super(props)
  }

  play(){

  }
  render(){

    return(<div>
            <div className='card medium green lighten-2 col 4'>
              <div className='card-content white-text'>

                <h4>Artist: {this.props.artist}</h4>
                <h5>Song: {this.props.title}</h5>
                <a onClick={this.play}>On Station: {this.props.callsign}</a>
              </div>
            </div>
          </div>);
  }


}
