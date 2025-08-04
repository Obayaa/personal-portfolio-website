// components/SocialIcon.jsx
function SocialIcon({ href, icon: Icon, size=6  }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-all hover:scale-125 duration-300"
        >
            <Icon className={`w-${size} h-${size}`} />
        </a>
    );
}

export default SocialIcon;
