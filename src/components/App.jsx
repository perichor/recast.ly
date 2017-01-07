class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      curVideo: {}
    };
  }

  componentDidMount() {
    console.log(this);
    var success = this.setState.bind(this);
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    }, (data) => {
      // debugger;
      success({'videos': data.items});
    });
  }

  render() {
    return (
      <div>
        <Nav />
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
