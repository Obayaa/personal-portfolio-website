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

            </div>
        </footer>
    );
}
export default Footer;