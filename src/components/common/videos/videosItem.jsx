import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../../helpers/images";
import videos from "../../../helpers/videos";
import { FaYoutube } from "react-icons/fa";

function VideosItem({
  title,
  videoURL,
  posterVideo,
  description,
  data,
  youtube,
}) {
  return (
    <div className="videosContent__card">
      <Video
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        poster={images[posterVideo]}
        className="videosContent__video"
      >
        <source src={videos[videoURL]} type="video/mp4" />
      </Video>
      <div className="videosContent__info">
        <div className="videosContent__top">
          <h4 className="videosContent__h4">{title}</h4>
          <div className="videosContent__data">
            {data.map((el, i) => (
              <span className="videosContent__dt" key={i}>
                {el}
              </span>
            ))}
          </div>
        </div>

        <p className="videosContent__p">{description}</p>
        <div className="videosContent__buttons">
          <a
            href={videos[videoURL]}
            className="videosContent__download"
            download
          >
            Descargar
          </a>
          <a
            href={youtube}
            className="videosContent__button"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube className="videosContent__icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideosItem;
