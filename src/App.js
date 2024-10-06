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
      white: 'hsl(40, 23%, 97%)',
      offWhite: 'hsl(43, 13%, 90%)',
      yellow: 'hsl(44, 82%, 60%)',
      mediumYellow: 'hsl(48, 94%, 68%)',
      lightYellow: 'hsl(48, 100%, 77%)',
      green: 'hsl(80, 25%, 35%)',
      lightGreen: '#BCC456',
      mediumGreen: '#A1AA2D',
      orange: "#E3A445",
      darkOrange: '#E08600',
      grey: 'hsl(40, 15%, 80%)',
      grey2: 'hsl(39, 11%, 69%)',
      grey3: 'hsl(41, 8%, 61%)',
      darkGrey: 'hsl(0, 0%, 38%)',
      errorRed: 'hsl(354, 85%, 44%)',
      peachyPink: '#D0415A',
      mediumPeachyPink: '#CF6174',
      lightPeachyPink: '#CE8491'
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
