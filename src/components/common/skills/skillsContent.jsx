import skillsInfo from "../../../utils/skillsInformation";
import SkillsItem from "./skillsItem";

function SkillContent() {
  return (
    <section className="skillsContent">
      <h3 className="skillsContent__h3">
        Habili<span className="skillsContent__span">dades</span>{" "}
      </h3>
      <div className="skillsContent__wrapper">
        <div className="skillsContent__column skillsContent__column--left">
          {skillsInfo.map((skill, i) => (
            <SkillsItem key={i} ability={skill.ability} bar={skill.bar} />
          ))}
        </div>
        <div className="skillsContent__column skillsContent__column--right"></div>
      </div>
    </section>
  );
}

export default SkillContent;
