import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { StarLegendContainer } from "./SkillsList.styles";

const StarLegend = () => {
  return (
    <StarLegendContainer>
      <p className="skill-icon">
        <div>
          <FaStar /> <FaStar /> <FaStar />
        </div>
        <span>Frequently used </span>
      </p>
      <p className="skill-icon">
        <div>
          <FaStar /> <FaStar /> <FaRegStar />
        </div>
        <span>Occasionally used</span>
      </p>
      <p className="skill-icon">
        <div>
          <FaStar /> <FaRegStar /> <FaRegStar />
        </div>
        <span>Rarely used</span>
      </p>
    </StarLegendContainer>
  );
};

export default StarLegend;
