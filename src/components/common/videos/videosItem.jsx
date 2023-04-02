import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../../helpers/images";
import videos from "../../../helpers/videos";

function VideosItem({ title, videoURL, posterVideo, description }) {
  return (
    <div className="videosContent__card">
      <Video
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={images[posterVideo]}
      >
        <source src={videos[videoURL]} type="video/mp4" />
        <track
          label="English"
          kind="subtitles"
          srcLang="en"
          src="http://source.vtt"
          default
        />
      </Video>
      <div className="videosContent__info">
        <h4 className="videosContent__h4">{title}</h4>
        <p className="videosContent__p">{description}</p>
      </div>
    </div>
  );
}

export default VideosItem;
