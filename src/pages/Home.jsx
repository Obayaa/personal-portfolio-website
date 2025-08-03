import { Brain, Code, Palette } from "lucide-react";
import dora from '../assets/dee.jpeg';

function Home() {
    const roles = [
        { title: "AI/ML Engineer", color: " from-purple-500 to-pink-500", icon: <Brain /> },
        { title: "Frontend Developer", color: "from-blue-500 to-cyan-500", icon: <Code /> },
        { title: "UI/UX designer", color: "bg-gradient-to-r from-pink-500 to-rose-500 ", icon: <Palette /> }
    ]

    return (
        <div className="min-h-screen flex justify-center px-6 py-4 pt-20">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center justify-center ">
                <div className="space-y-4">
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
                    <p>
                        I craft intelligent applications that blend cutting-edge AI with beautiful, intuitive design. Currently building the future at <span>Axxend Corporation</span>, where I develop cloud-native solutions with <span>80%+ AI accuracy</span>.
                    </p>
                    <div className="flex gap-2">
                        <a href="mailto:doraappiah2004@gmail.com">Let's create Magic</a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={dora} alt="Dora's picture with a smile on her face" />
                </div>
            </div>
        </div>
    );
}
export default Home;