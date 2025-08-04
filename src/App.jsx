import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <Navbar />
      {/* <div className="flex-grow"> */}
      <section className="" id="home">
        <Home />
      </section>
      <section className="" id="about">
        <About />
      </section>
      <section className="" id="skills">
        <Skills />
      </section>
      <section className="" id="projects">
        <Projects />
      </section>
      <section className="" id="contact">
        <Contact />
      </section>
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
