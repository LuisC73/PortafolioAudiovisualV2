import images from "../../../helpers/images";
import videos from "../../../helpers/videos";
import React from "react";


function VideosItem({ title, videoURL, posterVideo }) {
  return (
    <div>
      <video controls className="videosSection__video" loading="lazy">
        <source
          src="https://drive.google.com/file/d/1C8PzN1oyBlQ_Nd57NJMt1B8b4aeKGOA5/view?usp=share_link"
          type="video/webm"
        />
      </video>
      {/* */}
    </div>
  );
}

export default VideosItem;
