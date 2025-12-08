import React from "react";
import ContactMe from '../AboutMe/Contact';
import PackagesComponent from "./Packages/Packages.component";
import ServicesComponent from "./Packages/Services.component";
import RetainerComponent from "./Packages/Retainer.component";
import { AboutMeComponent } from "../AboutMe/AboutMe.styles";

const WorkHome = () => {
  return (
    <AboutMeComponent>
      <h1>Work With Me</h1>
      <PackagesComponent />
      <RetainerComponent />
      <ServicesComponent />
      <ContactMe />
    </AboutMeComponent>
  );
};
export default WorkHome;
