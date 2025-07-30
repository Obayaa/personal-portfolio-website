import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="footer w-full py-4 bg-black/50 backdrop-blur-lg border-t border-white/10 text-white">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                        <div className="text-3xl font-bold text-pink-400 mb-4">
                            Dora Appiah
                        </div>
                        <p className="text-gray-400 text-lg">
                            Crafting the future, one line of code at a time ✨
                        </p>
                    </div>

                    <div className="flex justify-center space-x-8 mb-8">
                        <a href="https://linkedin.com/in/dora-appiah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125">
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/Obayaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125">
                            <Github className="w-8 h-8" />
                        </a>
                        <a href="mailto:doraappiah2004@gmail.com" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125">
                            <Mail className="w-8 h-8" />
                        </a>
                    </div>

                    <div className="text-center text-gray-500">
                        <p>© 2025 Dora Appiah. Built with ❤️ using React & Tailwind CSS</p>
                        <p className="mt-2 text-sm">Making the web more beautiful, one project at a time</p>
                    </div>
            </div>
        </footer>
    );
}
export default Footer;