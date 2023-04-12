import photosInfo from "../../../utils/photosInformation";
import PhotoItem from "./photoItem";

function PhotoContent() {
  return (
    <section className="photos" id="photos">
      <h3 className="photos__h3">
        Porta<span className="photos__span">folio</span>
      </h3>
      <div className="photos__wrapper">
        {photosInfo.map((photo, i) => (
          <PhotoItem
            key={i}
            imgSrc={photo.imgSrc}
            description={photo.description}
            date={photo.date}
          />
        ))}
      </div>
    </section>
  );
}

export default PhotoContent;
