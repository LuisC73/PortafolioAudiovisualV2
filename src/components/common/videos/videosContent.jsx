import videosInfo from "../../../utils/videosInformation";
import VideoItem from "./videosItem";

function VideosContent() {
  return (
    <section className="videosContent" id="videos">
      <h3 className="videosContent__h3">
        Vid<span className="videosContent__span">eos</span>
      </h3>
      <div className="videosContent__wrapper">
        {videosInfo.map((video, i) => (
          <VideoItem
            key={i}
            title={video.titulo}
            videoURL={video.video}
            posterVideo={video.poster}
            description={video.des}
            data={video.data}
            youtube={video.youtube}
          />
        ))}
      </div>
    </section>
  );
}

export default VideosContent;
