import { Brain, Cloud, Code, Palette, Server } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      "Python",
      "Pandas",
      "scikit-learn",
      "NLTK",
      "spaCy",
      "Azure AI",
      "Resume Parsing",
      "ML Models 80%+ Accuracy",
    ],
    description: "Building intelligent systems that learn and adapt",
  },
  {
    title: "Frontend Magic",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React.js",
      "JavaScript",
      "Flutter",
      "Tailwind CSS",
      "HTML/CSS",
      "Responsive Design",
    ],
    description: "Crafting beautiful, interactive user experiences",
  },
  {
    title: "Backend Power",
    icon: <Server className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    skills: ["Flask", "Python", "REST APIs", "Node.js", "API Integration"],
    description: "Building robust, scalable server solutions",
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    skills: [
      "Microsoft Azure",
      "Firebase",
      "MySQL",
      "CI/CD",
      "Git/GitHub",
      "Azure DevOps",
    ],
    description: "Deploying and managing cloud-native applications",
  },
  {
    title: "Design & UX",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "Wireframing",
      "User Research",
    ],
    description: "Creating delightful, user-centered designs",
  },
];
