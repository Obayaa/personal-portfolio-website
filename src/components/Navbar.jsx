import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import SocialIcon from "./SocialIcon";



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" }
    ]


    return (
        <nav className="bg-gradient-to-br from-indigo-950 via-pink-950 to-indigo-950 px-6 py-4 fixed w-full top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#home" className="text-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse font-bold">Dora Appiah</a>
                <ul className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                onClick={() => setActiveSection(item.href)}
                                href={item.href}
                                className={`transition-all duration-300 hover:scale-110 font-medium capitalize text-lg ${activeSection === item.href
                                    ? 'text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text'
                                    : 'text-gray-300 hover:text-white hover:scale-105'
                                    }`}
                            >{item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-6">
                    <SocialIcon href="https://linkedin.com/in/dora-appiah" icon={Linkedin} />
                    <SocialIcon href="https://github.com/Obayaa" icon={Github} />
                    <SocialIcon href="mailto:doraappiah2004@gmail.com" icon={Mail} />
                </div>
                <div className="md:hidden">
                    <button className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg">
                    <ul className="px-4 lg:px-6 lg:py-4 py-2 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}><a className="text-lg font-medium text-gray-300 hover:text-purple-400" href={item.href}>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            )}

        </nav>
    );
}

export default Navbar;