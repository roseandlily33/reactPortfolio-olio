import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavAndFooter/Navbar";
import Footer from "./components/NavAndFooter/Footer";
import AboutMe from "./routes/AboutMe/AboutMe.page";
import Projects from "./routes/Projects/Projects.page";
import Certificates from "./routes/Certificates/Certificates.page";
import CaseStudies from "./routes/CaseStudies/CaseStudies.page";
import YodaCaseStudy from "./routes/CaseStudies/yoda_case_study/YodaCaseStudy.page";
import SkillsPage from "./routes/Skills/SkillsPage.page";
import WorkHome from "./routes/WorkWithMe/WorkHome.page";
import BloomAndBerry from "./routes/CaseStudies/bloom_and_berry/BloomBerry.page";
import BloomAndBerryPage from "./routes/BloomAndBerry/BloomAndBerry.page";
import ArielHome from "./routes/Ariel/ArielHome.page";
import Project from "./routes/Project/Project.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<AboutMe />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Project/:id" element={<Project />}></Route>
          <Route path="/Certificates" element={<Certificates />}></Route>
          <Route path="/Skills" element={<SkillsPage />}></Route>
          <Route path="/Work" element={<WorkHome />}></Route>
          <Route path="/CaseStudies" element={<CaseStudies />}></Route>
          <Route
            path="/CaseStudies/YodaCaseStudy"
            element={<YodaCaseStudy />}
          ></Route>
          <Route
            path="/CaseStudies/BerryAndBloom"
            element={<BloomAndBerry />}
          ></Route>
          <Route path="/BloomAndBerry" element={<BloomAndBerryPage />}></Route>
          <Route path="/CaseStudies/Ariel" element={<ArielHome />}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
