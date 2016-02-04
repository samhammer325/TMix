class SortMixtapes extends React.Component{
	constructor(props){
		super(props);
		this.displayUsersMixTapes = this.displayUsersMixTapes.bind(this);
    this.state = {mixtapes: [], visible: true, rangeStart: 0, displayMyMixtapes:true };
    this.upRange = this.upRange.bind(this);
    this.downRange = this.downRange.bind(this);
	}

  componentDidMount(){
     this.displayUsersMixTapes('users')    
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

  upRange(){
    oldRange = this.state.rangeStart;
    this.setState({rangeStart: oldRange + 4});
  }

  downRange(){
    oldRange = this.state.rangeStart;
    this.setState({rangeStart: oldRange - 4});
  }

  render(){
    let rangeStart = [this.state.rangeStart, this.state.rangeStart + 4]
    let mixtapesShow = this.state.mixtapes.slice(rangeStart[0], rangeStart[1])
    let mixtapes = mixtapesShow.map( mixtape => {
      let key = `mixtape-${mixtape.id}`;

    return(<Mixtape key={key} displayUsersMixTapes={this.displayUsersMixTapes} current_user={this.props.current_user} displayPlayMixtape={this.props.DisplayPlayMixtape} mixtape_id={mixtape.id}{...mixtape} />);

    });
    return(
       <div className="inner">
        <button className="btn waves-effect waves-light uno" onClick={this.displayUsersMixTapes.bind(this, "all" )}>Popular Mixtapes</button>
        <button className="btn waves-effect waves-light" onClick={this.displayUsersMixTapes.bind(this, "users" )}>My Mixtapes</button>
        <br />
        <br />
        <h2 className="salt white-text center">Mixtapes</h2>
        <br />
         {mixtapes}
        <div className = 'center'>
          <i className="medium material-icons" onClick={this.downRange}>fast_rewind _</i>
          <i className="medium material-icons" onClick={this.upRange}>fast_forward</i>
        </div>
      </div>)};
}   

