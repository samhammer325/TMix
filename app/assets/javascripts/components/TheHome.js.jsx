class TheHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {sortMixtapesVisible: false, searchVisible: true, playMixtapeVisible: false};
    this.DisplaySortMixtapes = this.DisplaySortMixtapes.bind(this);
    this.DisplaySearch = this.DisplaySearch.bind(this);
    this.DisplayPlayMixtape = this.DisplayPlayMixtape.bind(this);
    this.temp = this.temp.bind(this);
	}

	temp(){
		alert("worked");
	}

	DisplaySortMixtapes(){
		this.setState({sortMixtapesVisible: true});
		this.setState({searchVisible: false});
		this.setState({playMixtapeVisible: false});
	}

	DisplaySearch(){
		this.setState({sortMixtapesVisible: false});
		this.setState({searchVisible: true});
		this.setState({playMixtapeVisible: false});

	}

	DisplayPlayMixtape(){
		this.setState({sortMixtapesVisible: false});
		this.setState({searchVisible: false});
		this.setState({playMixtapeVisible: true});
	}




	render(){
		 // debugger
		if (this.state.sortMixtapesVisible) {
			return(
			<div>
				<button onClick={this.DisplaySortMixtapes}>DisplaySortMixtapes</button>
				<button onClick={this.DisplaySearch}>DisplaySearch</button>
				<button onClick={this.DisplayPlayMixtape}>DisplayPlayMixtape</button>

				<SortMixtapes temp={this.temp}/>
			</div>);
		};

		if (this.state.searchVisible) {
			return(
			<div>
				<button onClick={this.DisplaySortMixtapes}>DisplaySortMixtapes</button>
				<button onClick={this.DisplaySearch}>DisplaySearch</button>
				<button onClick={this.DisplayPlayMixtape}>DisplayPlayMixtape</button>

				<Search/>
			</div>);
		};

		if (this.state.playMixtapeVisible) {
			return(
			<div>
				<button onClick={this.DisplaySortMixtapes}>DisplaySortMixtapes</button>
				<button onClick={this.DisplaySearch}>DisplaySearch</button>
				<button onClick={this.DisplayPlayMixtape}>DisplayPlayMixtape</button>

				<PlayMixtape/>
			</div>);
		};
		

		
	}
}