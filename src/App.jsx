//Importing the browser routing functions needed
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Importing the stylesheet onto the website
import './style.scss'
//Importing the pages for the wesbite into the file
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
