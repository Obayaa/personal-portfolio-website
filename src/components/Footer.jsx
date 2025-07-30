function Footer() {
    return (
        <footer className="footer w-full py-4 bg-black text-white">
            <div className="container mx-auto flex items-center justify-center">
                <p>&copy; {new Date().getFullYear()} Dora Appiah. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;