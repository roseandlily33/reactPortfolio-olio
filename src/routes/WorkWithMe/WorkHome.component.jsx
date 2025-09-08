import React from "react";
import ContactMe from '../AboutMe/Contact';
import PackagesComponent from "./Packages/Packages.component";
import ServicesComponent from "./Packages/Services.component";
import RetainerComponent from "./Packages/Retainer.component";

const WorkHome = () => {
  return (
    <main>
      <h1>Work With Me</h1>
      <PackagesComponent />
      <RetainerComponent />
      <ServicesComponent />
      <ContactMe />
    </main>
  );
};
export default WorkHome;
