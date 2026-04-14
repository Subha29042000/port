// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Qualification from './components/Qualification';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="relative overflow-x-hidden">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Experience />
//         <Projects />
//         <Qualification />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }












import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/SiteNavbar";
import Hero from "./components/SiteHero";
import About from "./components/SiteAbout";
import Skills from "./components/SiteSkills";
import Experience from "./components/SiteExperience";
import Projects from "./components/SiteProjects";
import Qualification from "./components/SiteQualification";
import Certifications from "./components/SiteCertifications";
import Contact from "./components/SiteContact";
import Footer from "./components/SiteFooter";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}
      <div className={`app-shell ${splashDone ? "is-ready" : ""}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Qualification />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
