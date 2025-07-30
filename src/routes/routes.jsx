import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
];

export default routes;
