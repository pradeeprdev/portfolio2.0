import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-center">
        <div className="" style={{ maxWidth: '70rem' }}>
          <Header />
          <Hero />
          <About />
          <Resume />  
          <Services />
          <Skills />
          <Projects />
        </div>
      </div>
        <Highlights />
      <div className="flex justify-center">
        <div className="" style={{ maxWidth: '70rem' }}>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}