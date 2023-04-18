// Load the YouTube API script asynchronously
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a new YouTube player and embed it inside the <div> element
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-background', {
    videoId: '1_dR9mSICNU',
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      playlist: '1_dR9mSICNU',
      modestbranding: 1,
      showinfo: 0,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
