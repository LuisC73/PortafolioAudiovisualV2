import { Link } from "react-router-dom";
import videosInfoAll from "../../../utils/videosOnlyInfo";
import VideoItem from "./videosItem";
import VideosItem2 from "./VideosItem2";

function VideosOnly() {
  return (
    <section className="videosContent" id="videos">
      <div className="videosContent__flex">
        <h3 className="videosContent__h3">
          Vid<span className="videosContent__span">eos</span>
        </h3>
        <Link to={"/"} className="videosContent__dir">
          Volver Atrás
        </Link>
      </div>

      <div className="videosContent__col">
        {videosInfoAll.map((video, i) => (
          <VideosItem2
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

export default VideosOnly;
