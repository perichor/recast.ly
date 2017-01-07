class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      curVideo: {}
    };
  }

  setStateOfVideos(dataItems) {
    this.setState({videos: dataItems, curVideo: dataItems[0]});
  }

  search(searchString) {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: searchString,
      maxResults: 5
    }, this.setStateOfVideos.bind(this));
  }

  componentDidMount() {
    this.search('react');
  }

  render() {
    return (
      <div>
        <Nav search={this.search.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} setCurVideo={this.setState.bind(this)}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
