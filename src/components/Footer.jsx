import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import SocialIcon from "./SocialIcon";

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
                    <SocialIcon href="https://linkedin.com/in/dora-appiah" icon={Linkedin} size={8} />
                    <SocialIcon href="https://github.com/Obayaa" icon={Github} size={8} />
                    <SocialIcon href="mailto:doraappiah2004@gmail.com" icon={Mail} size={8} />
                </div>

                <div className="text-center text-gray-500">
                    <p>© 2025 Dora Appiah. Built with ❤️ using React & Tailwind CSS</p>
                    <p className="mt-2 text-sm">Making the web more beautiful, one project at a time</p>
                </div>
                <div className="flex gap-4">
                    <a href="mailto:doraappiah2004@gmail.com"
                        className="group flex gap-2 px-4 lg:px-8 py-2 lg:py-4 rounded-full font-bold text-base lg:text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all duration-300"
                    >
                        <Sparkles className="group-hover:rotate-12 transition-transform" />
                        Let's Create Magic</a>

                    <a href="https://github.com/Obayaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 px-8 py-4 border-2 border-purple-500 hover:bg-purple-500 rounded-full text-lg text-purple-400 hover:text-white font-bold"
                    >
                        <Github className="group-hover:rotate-12 transition-transform" />
                        View My Code</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;