class SortMixtapes extends React.Component{
	constructor(props){
		super(props);
		this.displayUsersMixTapes = this.displayUsersMixTapes.bind(this);
    this.toggleVisible = this.toggleVisible.bind(this);
    this.state = {mixtapes: [], visible: true };
	}

componentDidMount(){
    // this.displayUsersMixTapes()
  }

  toggleVisible() {
    this.setState({visible: !this.state.visible});
  }

	displayUsersMixTapes(search_terms){
    $.ajax({
      url: '/mixtapes_users_mixtapes',
      type: 'GET',
      data: { search_term: search_terms}
    }).success( data => {
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

    if(this.state.visible){
      return(
         <div>
          <button onClick={this.toggleVisible}>Toggle MixTapes</button>
       
          <h1 className="yellow">MixTapes</h1>
          <hr />
          <button onClick={this.displayUsersMixTapes.bind(this, "all" )}>Display All Mixtapes</button>
          <hr />
          <button onClick={this.displayUsersMixTapes.bind(this, "users" )}>Display My Mixtapes</button>
          <hr />
          <button onClick={this.displayUsersMixTapes.bind(this, "highest_rated" )}>Display Highest Rated Mixtapes</button>
          <hr />
          <h3 className='center-align'>Mixtapes:</h3>
           {mixtapes}
        </div>)}
      else {
        return(
          <div>
           <button onClick={this.toggleVisible}>Toggle Mixtapes</button>
           </div>)}
       
  }

   
}











