import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../../helpers/images";
import videos from "../../../helpers/videos";

function VideosItem2({
  title,
  videoURL,
  posterVideo,
  description,
  data,
  youtube,
}) {
  return (
    <div className="videosContent__item">
      <Video
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={images[posterVideo]}
        className="videosContent__vd"
      >
        <source src={videos[videoURL]} type="video/mp4" />
      </Video>
      <div className="videosContent__txt">
        <h4 className="videosContent__h4">{title}</h4>
        <div className="videosContent__data">
          {data.map((el, i) => (
            <span className="videosContent__dt" key={i}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideosItem2;
