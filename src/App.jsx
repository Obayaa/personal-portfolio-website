import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-100">
        <section className="" id="home"><Home /></section>
        <section className="" id="about"><About /></section>
        <section className="" id="skills"><Skills /></section>
        <section className="" id="projects"><Projects /></section>
        <section className="" id="contact"><Contact /></section>
      </div>
      <Footer />
    </div>
  )
}

export default App
