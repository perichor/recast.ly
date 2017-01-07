var searchYouTube = (options, callback) => {
  // TODO
  options['format'] = 5;
  options['part'] = 'snippet';
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search?' + $.param(options),
    type: 'GET',
    options: options,
    success: callback,
    contentType: 'application/json',
  });
  
};

window.searchYouTube = searchYouTube;
