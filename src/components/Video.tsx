import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-hls/dist/videojs-contrib-hls.js';

export default class VideoPlayer extends React.Component {
    player:any
    videoNode:any 

  // Instantiate a Video.js player when the component mounts
  componentDidMount() {
    console.log(this.props)
    this.player = videojs(this.videoNode, this.props, () => {
      videojs.log('onPlayerReady', this);
    });
  }

  // Dispose the player when the component will unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // Wrap the player in a `div` with a `data-vjs-player` attribute, so Video.js
  // won't create additional wrapper in the DOM.
  //
  // See: https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player>
        <video ref={node => this.videoNode = node} className="video-js"></video>
      </div>
    );
  }
}