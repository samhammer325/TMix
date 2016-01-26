class Mixtape extends React.Component{
  constructor(props){
    super(props)
    this.state = {songs: [] };

  }

  render(){
     // debugger

    //  let songs = this.state.mixtapes.map( mixtape => {
    //   let key = `mixtape-${mixtape.id}`;
    //   return(<Mixtape key={key} {...mixtape} />);
    // });

    return(<div>
            <div className='card small blue darken-3 col s6'>
              <div className='card-content white-text'>
                <h5>Mixtape: {this.props.name}</h5>


              </div>
            </div>
          </div>);
  }
}
