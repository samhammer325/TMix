class SortMixTapes extends React.Component{
	constructor(props){
		super(props);
		this.displayUsersMixTapes = this.displayUsersMixTapes.bind(this);
    this.state = {mixtapes: [] };
	}

componentDidMount(){
    // $.ajax({
    //   url: '/home',
    //   type: 'GET'
    // }).success( data => {
    //   //this.setState({mixtapes: data.mixtapes});
    //   debugger
    // });

    this.displayUsersMixTapes()
  }

  //  getMixtapes(){
  //   $.ajax({
  //     url: '/home',
  //     type: 'GET',
  //   }).success( data => {
  //     this.setState({mixtapes: data})
  //   })
  // }

	displayUsersMixTapes(){
    $.ajax({
      url: '/mixtapes_users_mixtapes',
      type: 'GET'
    }).success( data => {
      // debugger
      this.setState({mixtapes: data.mixtapes});
    }).error( data => {
      console.log(data);
    });
  }

  render(){
    let mixtapes = this.state.mixtapes.map( mixtape => {
      let key = `mixtape-${mixtape.id}`;
      return(<Mixtape key={key} {...mixtape} />);
    });
    return(<div>
            <h1 className="yellow">MixTapes</h1>
            <hr />
            <button onClick={this.displayUsersMixTapes}>My Mix Tapes</button>
            <hr />
            <h3 className='center-align'>Mixtapes:</h3>
             {mixtapes}
          </div>);
  }


}