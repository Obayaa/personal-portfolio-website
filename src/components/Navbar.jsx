function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold">My Portfolio</a>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="/projects" className="text-white hover:text-gray-300">Projects</a></li>
                    <li><a href="/skills" className="text-white hover:text-gray-300">Skills</a></li>
                    <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;