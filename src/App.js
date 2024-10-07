import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import Navbar from "./components/NavAndFooter/Navbar";
import Footer from './components/NavAndFooter/Footer';
import AboutMe from './routes/AboutMe/AboutMe';
import Projects from './routes/Projects/Projects';
import ContactMe from './routes/AboutMe/Contact';
import FrontEnd from "./components/Skills/FrontEnd";
import BackEnd from "./components/Skills/BackEnd";
import Skills from "./components/Skills/Skills";

const theme = {
  colors: {
      black: '#181713',
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
      </Routes>
      <Footer />
      </BrowserRouter>
      </ThemeProvider>
   </div>
  );
}

export default App;
