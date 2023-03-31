import { Swiper, SwiperSlide } from "swiper/react";
import videosInfo from "../../../utils/videosInformation";
import VideoItem from "./videosItem";

import "swiper/css";
import "swiper/css/navigation";
import videos from "../../../helpers/videos";

function VideosContent() {
  return (
    <section className="videosContent">
      <h3 className="videosContent__h3">
        Vid<span className="videosContent__span">eos</span>
      </h3>
      <div className="videosContent__wrapper"></div>
    </section>
  );
}

export default VideosContent;
