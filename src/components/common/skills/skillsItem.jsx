import React, { useState } from "react";

function SkillsItem({ ability, bar }) {
  const [styleBar, setStyleBar] = useState();

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${bar}%`,
      left: 0,
    };
    setStyleBar(newStyle);
  }, 2000);

  return (
    <div className="skillsContent__skills">
      <p className="skillsContent__p">{ability}</p>
      <div className="skillsContent__bar">
        <div className="skillsContent__progress" style={styleBar}>
          {bar}%
        </div>
      </div>
    </div>
  );
}

export default SkillsItem;
