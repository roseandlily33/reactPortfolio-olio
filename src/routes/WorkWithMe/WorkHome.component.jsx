import React from "react";
import ContactMe from '../AboutMe/Contact';
import PackagesComponent from "./Packages/Packages.component";
import ServicesComponent from "./Packages/Services.component";

const WorkHome = () => {
  return (
    <main>
      <h1>Work With Me</h1>
      <PackagesComponent />
      <ServicesComponent />
      <ContactMe />
    </main>
  );
};
export default WorkHome;
