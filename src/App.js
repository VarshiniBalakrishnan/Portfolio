import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
   <ThemeProvider>
         <Navbar>
           {/* place theme switcher on navbar via prop or render here */}
         </Navbar>
   
         <div className="container py-5">
           <div className="d-flex justify-content-end mb-3">
             <ThemeSwitcher />
           </div>
   
           <main>
             <Hero />
             <About />
             <Projects />
             <Skills />
             <Contact />
           </main>
         </div>
   
         <Footer />
       </ThemeProvider>
  );
}

export default App;
