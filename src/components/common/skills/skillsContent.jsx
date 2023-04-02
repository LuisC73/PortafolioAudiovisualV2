import skillsInfo from "../../../utils/skillsInformation";
import SkillsItem from "./skillsItem";

import programsInfo from "../../../utils/programsInformation";
import SkillsStars from "./skillsStars";
import images from "../../../helpers/images";

function SkillContent() {
  return (
    <section className="skillsContent" id="skills">
      <h3 className="skillsContent__h3">
        Habili<span className="skillsContent__span">dades</span>{" "}
      </h3>
      <div className="skillsContent__wrapper">
        <div className="skillsContent__column skillsContent__column--left">
          {skillsInfo.map((skill, i) => (
            <SkillsItem key={i} ability={skill.ability} bar={skill.bar} />
          ))}
        </div>
        <div className="skillsContent__column skillsContent__column--right">
          <figure className="skillsContent__figure">
            <img
              src={images.skills}
              alt="Camara"
              className="skillsContent__img"
            />
          </figure>
        </div>
      </div>
      <div className="skillsContent__bottom">
        {programsInfo.map((program, i) => (
          <SkillsStars key={i} text={program.text} stars={program.stars} />
        ))}
      </div>
    </section>
  );
}

export default SkillContent;
