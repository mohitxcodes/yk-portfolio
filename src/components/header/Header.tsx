import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaHome, FaUser, FaEnvelope, FaBriefcase, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [isDark, setIsDark] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', icon: <FaHome />, path: '/' },
        { label: 'About', icon: <FaUser />, path: '/about' },
        { label: 'Highlights', icon: <FaBriefcase />, path: '/highlights' },
        { label: 'Contact', icon: <FaEnvelope />, path: '/contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com/yourusername', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
        { icon: <FaTwitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
        { icon: <FaInstagram />, href: 'https://instagram.com/yourusername', label: 'Instagram' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black/30 backdrop-blur-sm'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-end h-14">
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.label}
                                onClick={() => navigate(item.path)}
                                className={`px-3 py-1.5 text-sm cursor-pointer transition-colors duration-300 flex items-center gap-1.5 ${location.pathname === item.path
                                    ? 'text-white'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className={`text-xs ${location.pathname === item.path
                                    ? 'text-white'
                                    : 'text-gray-400'
                                    }`}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Vertical Separator */}
                    <div className="hidden md:block h-6 w-px bg-gray-800 mx-3" />

                    {/* Right side actions */}
                    <div className="flex items-center space-x-3">
                        {/* Social Links */}
                        <div className="hidden md:flex items-center space-x-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsDark(!isDark)}
                            className="p-1.5 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-1.5 text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;