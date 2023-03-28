import images from "../../../helpers/images";

function PhotoItem({ i, imgSrc, url, description }) {
  return (
    <figure key={i} className="photos__figure">
      <a href={images[imgSrc]} download={url} className="photos__a">
        Guardar
      </a>
      <img
        src={images[imgSrc]}
        alt={description}
        loading="lazy"
        className="photos__img"
      />
    </figure>
  );
}

export default PhotoItem;
