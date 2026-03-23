import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

const ResumeButton = () => {
  const resumeDocLink = `https://1drv.ms/w/c/9eb0d1a969eb7134/IQDtJn9avoybQrVBMJGc4sWcARLM2nDDPnrgRaFwy8Sm7F8?e=63MZzt`;
  const resumePdfLink = `/Resume2026.pdf`; // Place your PDF in the public folder
  return (
    <div>
      {/* <a
        href={resumeDocLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", marginRight: "0.5rem" }}
      >
        <CTAButton span="View Resume (Online)" as="div" />
      </a> */}
      <a
        href={resumePdfLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        download
      >
        <SecondaryButton span="Download PDF Resume" as="div" />
      </a>
    </div>
  );
};

export default ResumeButton;
