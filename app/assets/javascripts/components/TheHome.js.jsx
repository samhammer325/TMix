class TheHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {sortMixtapesVisible: true, searchVisible: false, playMixtapeVisible: false, mixtape_id: 0};
    this.DisplaySortMixtapes = this.DisplaySortMixtapes.bind(this);
    this.DisplaySearch = this.DisplaySearch.bind(this);
    this.DisplayPlayMixtape = this.DisplayPlayMixtape.bind(this);
    
	}


	

	DisplaySortMixtapes(mode){
		// if (mode == 'users') {
		// 	this.setState({displayAllMixtapes: false});
		// 	debugger
		
			
		// }else{
		// 	this.setState({displayAllMixtapes: true});
		// 	 // alert(mode);
		// 	 debugger
		
		// };

		this.setState({sortMixtapesVisible: true});
		this.setState({searchVisible: false});
		this.setState({playMixtapeVisible: false});
		// this.props.displayUsersMixTapes(mode);
		// debugger
	}	

	DisplaySearch(){
		this.setState({sortMixtapesVisible: false});
		this.setState({searchVisible: true});
		this.setState({playMixtapeVisible: false});

	}

	DisplayPlayMixtape(mixtape_id){
		this.setState({mixtape_id: mixtape_id})
		this.setState({sortMixtapesVisible: false});
		this.setState({searchVisible: false});
		this.setState({playMixtapeVisible: true});
	}




	render(){



		  // debugger
		 self = this;

		if (this.state.sortMixtapesVisible) {
			return(
			<div className="inner">
				
				<button className="btn nav2" onClick={this.DisplaySearch}>Create New Mixtape</button>
				

				<SortMixtapes current_user={this.props.current_user} DisplayPlayMixtape = {this.DisplayPlayMixtape} display_user_mixtapes={this.state.display_user_mixtapes} />

			</div>);
		};

		if (this.state.searchVisible) {
			return(
			<div>

				<button className="btn nav1" onClick={this.DisplaySortMixtapes}>Mixtapes</button>
				<Search current_user={this.props.current_user}/>
			</div>);
		};

		if (this.state.playMixtapeVisible) {
			return(
			<div>

				
				<button className="btn nav1" onClick={this.DisplaySortMixtapes}>Mixtapes</button>
				<button className="btn nav2" onClick={this.DisplaySearch}>Create New Mixtape</button>
				

				<PlayMixtape current_user={this.props.current_user} mixtape_id={this.state.mixtape_id}/>
			</div>);
		};
		

		
	}
}







