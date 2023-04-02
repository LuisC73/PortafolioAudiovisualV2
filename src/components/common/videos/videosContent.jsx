import videosInfo from "../../../utils/videosInformation";
import VideoItem from "./videosItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

function VideosContent() {
  return (
    <section className="videosContent">
      <h3 className="videosContent__h3">
        Vid<span className="videosContent__span">eos</span>
      </h3>
      <div className="videosContent__wrapper">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {videosInfo.map((video, i) => (
            <SwiperSlide key={i}>
              <VideoItem
                title={video.titulo}
                videoURL={video.video}
                posterVideo={video.poster}
                description={video.des}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default VideosContent;
