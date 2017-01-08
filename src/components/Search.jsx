class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  setSearchString(event) {
    this.setState({searchString: event.target.value});
    this.props.search(this.state.searchString);
  } 

  searchWrapper() {
    this.props.search(this.state.searchString);
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.setSearchString.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.searchWrapper.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
