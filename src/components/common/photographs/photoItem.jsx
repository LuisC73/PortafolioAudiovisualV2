import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import images from "../../../helpers/images";

function PhotoItem({ i, imgSrc, description, date }) {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (imgSrc) => {
    setTempImg(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div
        className={
          modal ? "photos__modal photos__modal--open" : "photos__modal"
        }
      >
        <img
          src={tempImg}
          alt={description}
          loading="lazy"
          className="photos__img"
        />
        <FaTimes className="photos__close" onClick={() => setModal(false)} />
        <p className="photos__des">{description}</p>
      </div>
      <figure
        key={i}
        className="photos__figure"
        onClick={() => getImg(images[imgSrc])}
      >
        <img
          src={images[imgSrc]}
          alt={description}
          loading="lazy"
          className="photos__img"
        />
        <div className="photos__flex">
          <p className="photos__p">{date}</p>
          <p className="photos__p">{description}</p>
        </div>
      </figure>
    </>
  );
}

export default PhotoItem;
