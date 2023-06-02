import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/Contact';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Resume from './pages/Resume';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <div className="content">
      <Routes>
        <Route path="/" element={<AboutMe />}></Route>

        <Route path="/ContactMe" element={<ContactMe />}></Route>

        <Route path="/Projects" element={<Projects />}></Route>

        <Route path="/Resume" element={<Resume />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </div>
    
    <Footer />
   </div>
    </BrowserRouter>
  );
}

export default App;
