import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BestProjectsContainer } from "./BestProjects.styles";
import YodaPic from "../../../images/projects/YODA.png";
import LemonPic from "../../../images/projects/LemonLime.png";
import BoutiquePic from "../../../images/projects/Boutique.png";
import NASAPic from "../../../images/projects/NASA.png";

const BestProjects = () => {
  return (
    <BestProjectsContainer>
      <h2>Top Projects</h2>
      <div className="outer-slider">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src={YodaPic} alt="Project 1" />
            <h4>Yoda Safety Services</h4>
            <p>Client project, MERN, Training portal</p>
          </div>
          <div>
            <img src={LemonPic} alt="Project 2" />
            <h4>Lemon Lime</h4>
            <p>MERN, Recipe sharing application</p>
          </div>
          <div>
            <img src={BoutiquePic} alt="Project 3" />
            <h4>Rose & Lily Boutique</h4>
            <p>MERN, E-commerce application</p>
          </div>
          <div>
            <img src={NASAPic} alt="Project 4" />
            <h4>NASA</h4>
            <p>NASA API, MERN, Space exploration application</p>
          </div>
        </Carousel>
      </div>
    </BestProjectsContainer>
  );
};

export default BestProjects;
