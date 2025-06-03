import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import Navbar from "./components/NavAndFooter/Navbar";
import Footer from './components/NavAndFooter/Footer';
import AboutMe from './routes/AboutMe/AboutMe';
import Projects from './routes/Projects/Projects';
import Certificates from './routes/Certificates/Certificates';
import CaseStudies from './routes/CaseStudies/CaseStudies.component';
import YodaCaseStudy from './routes/CaseStudies/yoda_case_study/YodaCaseStudy.component';
import SkillsPage from './routes/Skills/SkillsPage.component';

const theme = {
  colors: {
      black: '#181713',
      darkGrey: '#323232',
      darkBrown: '#E43D12',
      medBrown: '#FF7C15',
      lightBrown: '#FF933D',
      lightGrey: '#EBE9E1',
      lightestBrown: '#FFAE6E',
      white: '#F6F6F6',
      lightCream: '#F6F5F2',
      medCream: '#F3F2EE',
      darkCream: '#E6E5E0',
      lightestPink: '#F6A9BE',
      lightPink: '#F38CA9',
      medPink: '#F17496',
      darkPink: '#ED4672',
      yellow: '#FFB400',
      boxShadow: '5px 0px 7px 6px var(--lightGrey)'
  }
}

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index path="/" element={<AboutMe />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Certificates" element={<Certificates />}></Route>
        <Route path="/Skills" element={<SkillsPage />}></Route>
        <Route path="/CaseStudies" element={<CaseStudies />}></Route>
        <Route path="/CaseStudies/YodaCaseStudy" element={<YodaCaseStudy />}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      </ThemeProvider>
   </div>
  );
}

export default App;
