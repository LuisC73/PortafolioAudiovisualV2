import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiAdobeaudition,
} from "react-icons/si";

import { FaStar } from "react-icons/fa";

function SkillsStars({ text, icon, stars }) {
  const iconMapping = {
    Illustration: <SiAdobeillustrator className="skillsContent__icon" />,
    Photoshop: <SiAdobephotoshop className="skillsContent__icon" />,
    Indesign: <SiAdobeindesign className="skillsContent__icon" />,
    "After Effects": <SiAdobeaftereffects className="skillsContent__icon" />,
    "Premiere Pro": <SiAdobepremierepro className="skillsContent__icon" />,
    Lightroom: <SiAdobelightroom className="skillsContent__icon" />,
    Audition: <SiAdobeaudition className="skillsContent__icon" />,
  };

  const drawIcon = () => {
    return iconMapping[text] || null;
  };

  const starsCount = Array(stars).fill(0);

  return (
    <div className="skillsContent__program">
      <div className="skillsContent__info">
        <p className="skillsContent__text">{text}</p>
        {drawIcon()}
      </div>
      <div className="skillsContent__stars">
        {starsCount.map((_, i) => (
          <FaStar className="skillsContent__start" />
        ))}
      </div>
    </div>
  );
}

export default SkillsStars;
