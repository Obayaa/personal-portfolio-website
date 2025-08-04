import { Brain, Code, Github, Palette, Sparkles } from "lucide-react";
import dora from '../assets/dee.jpeg';

function Home() {
    const roles = [
        { title: "AI/ML Engineer", color: " from-purple-500 to-pink-500", icon: <Brain /> },
        { title: "Frontend Developer", color: "from-blue-500 to-cyan-500", icon: <Code /> },
        { title: "UI/UX designer", color: "bg-gradient-to-r from-pink-500 to-rose-500 ", icon: <Palette /> }
    ]

    return (
        <div className="min-h-screen flex justify-center px-6 py-4 pt-20">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
                <div className="space-y-8">
                    <h1 className="text-7xl md:text-8xl font-bold ">Hi! I am <span className="block bg-gradient-to-r from-purple-400 via-pink-400 bg-clip-text text-transparent animate-pulse">Dora</span></h1>
                    <div className="flex flex-wrap gap-3">
                        {roles.map((role) => (
                            <div
                                key={role.title}
                                className={`flex gap-3 font-bold bg-gradient-to-r ${role.color} px-6 py-3 rounded-full justify-center`}>
                                {role.icon}
                                {role.title}
                            </div>
                        ))}
                    </div>
                    <p className="text-xl">
                        I craft intelligent applications that blend cutting-edge AI with beautiful, intuitive design. Currently building the future at
                        <span className="text-purple-400 font-semibold"> Axxend Corporation</span>, where I develop cloud-native solutions with
                        <span className="text-pink-400 font-semibold"> 80%+ AI accuracy</span>.
                    </p>
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
                <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                            <img
                                src={dora}
                                alt="Dora Appiah"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-4 animate-bounce">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;