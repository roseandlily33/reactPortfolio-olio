import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { StarLegendContainer } from "./SkillsPage.styles";

const StarLegend = () => {
    return (
        <StarLegendContainer>
            <p className="skill-icon">
                <FaStar /> <FaStar /> <FaStar />
                <span>Frequently used and highly proficient</span>
            </p>
            <p className="skill-icon">
                <FaStar /> <FaStar /> <FaRegStar />
                <span>Occasionally used with moderate proficiency</span>
            </p>
            <p className="skill-icon">
                <FaStar /> <FaRegStar /> <FaRegStar />
                <span>Rarely used but basic understanding</span>
            </p>
        </StarLegendContainer>
    );
};

export default StarLegend;
