import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaHome, FaUser, FaEnvelope, FaBriefcase, FaBook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
    const [isDark, setIsDark] = useState(true);

    const navItems = [
        { label: 'Home', icon: <FaHome />, href: '#' },
        { label: 'About', icon: <FaUser />, href: '#about' },
        { label: 'Experience', icon: <FaBriefcase />, href: '#experience' },
        { label: 'Blog', icon: <FaBook />, href: '#blog' },
        { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: '#', label: 'GitHub' },
        { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-end h-14">
                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="px-3 py-1.5 text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1.5 group relative"
                            >
                                <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs">
                                    {item.icon}
                                </span>
                                {item.label}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400"
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Vertical Separator */}
                    <div className="hidden md:block h-6 w-px bg-gray-800 mx-3" />

                    {/* Right side actions */}
                    <div className="flex items-center space-x-3">
                        {/* Social Links */}
                        <div className="hidden md:flex items-center space-x-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    aria-label={social.label}
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
                        <button className="md:hidden p-1.5 text-gray-400 hover:text-white transition-colors duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;