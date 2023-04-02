import React from "react";
import ReactPlayer from "react-player";

function VideosItem({ title, videoURL, posterVideo, description }) {
  return (
    <div className="videosContent__card">
      <ReactPlayer
        url={videoURL}
        controls
        width="100%"
        height="420px"
        className="videosContent__video"
      />
      <div className="videosContent__info">
        <h4 className="videosContent__h4">{title}</h4>
        <p className="videosContent__p">{description}</p>
      </div>
    </div>
  );
}

export default VideosItem;
