import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BestProjectsContainer } from "./BestProjects.styles";
import FSCert from "../../../images/certificates/codecademy/CC_FS_CERT.png";
import FECert from "../../../images/certificates/codecademy/CC_FE.png";
import BECert from "../../../images/certificates/codecademy/CC_BE.png";
import ZTM_UX from "../../../images/certificates/ztm/ZTM_Design.png";
import ZTM_FullStack from "../../../images/certificates/ztm/ZTM_Web_Dev.png";
import ZTM_Fullstack2 from "../../../images/certificates/ztm/ZTM_JtoS.png";

const BestCertificates = () => {
  return (
    <BestProjectsContainer>
      <h2>Top Certificates</h2>
      <div className="outer-slider">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src={FSCert} alt="Project 1" />
            <h4>Codecademy Full Stack Certificate</h4>
          </div>
          <div>
            <img src={FECert} alt="Project 2" />
            <h4>Codecademy Front End Certificate</h4>
          </div>
          <div>
            <img src={BECert} alt="Project 3" />
            <h4>Codecademy Back End Certificate</h4>
          </div>
          <div>
            <img src={ZTM_UX} alt="Project 4" />
            <h4>Zero To Mastery - Design Certificate</h4>
          </div>
          <div>
            <img src={ZTM_FullStack} alt="Project 5" />
            <h4>Zero To Mastery - Full Stack Certificate</h4>
          </div>
          <div>
            <img src={ZTM_Fullstack2} alt="Project 6" />
            <h4>Zero To Mastery - Junior to Senior Full Stack Certificate</h4>
          </div>
        </Carousel>
      </div>
    </BestProjectsContainer>
  );
};

export default BestCertificates;
