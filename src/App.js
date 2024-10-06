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
      darkBrown: '#3A3126',
      medBrown: '#695441',
      lightBrown: '#B49884',
      lightGrey: '#BDB6AC',
      white: '#F6F6F6',
      lightCream: '#EDEAE3',
      medCream: '#E5DCCE',
      darkCream: '#DCD5C3',
      lightPink: '#DCCBC2',
      medPink: '#D4B2A8',
      darkPink: '#C4A49E'
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
