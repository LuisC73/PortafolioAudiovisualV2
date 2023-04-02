import skillsInfo from "../../../utils/skillsInformation";
import SkillsItem from "./skillsItem";

import programsInfo from "../../../utils/programsInformation";
import SkillsStars from "./skillsStars";
import images from "../../../helpers/images";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillContent() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.4,
          delay: 0.5,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 50,
      });
    }
  }, [inView]);

  return (
    <motion.section
      className="skillsContent"
      id="skills"
      ref={ref}
      animate={animation}
    >
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
    </motion.section>
  );
}

export default SkillContent;
