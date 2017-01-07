var searchYouTube = (options, callback) => {
  // TODO
  // options['format'] = 5;
  options['part'] = 'snippet';
  options['type'] = 'video';
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?' + $.param(options),
    type: 'GET',
    options: options,
    success: function(data) {
      callback(data.items);
    },
    contentType: 'application/json',
  });
  
};

window.searchYouTube = searchYouTube;
