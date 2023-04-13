import images from "../../../helpers/images";

function AlliancesContent() {
  return (
    <section className="alliancesContent">
      <h3 className="alliancesContent__h3">
        Alia<span className="alliancesContent__span">nzas</span>
      </h3>
      <a href="https://agenciasnoble.com/" target="_blank">
        <img
          src={images.Agencia}
          alt="Agencias Nobles"
          className="alliancesContent__img"
        />
      </a>
    </section>
  );
}

export default AlliancesContent;
