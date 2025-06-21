import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaHome, FaUser, FaEnvelope, FaBriefcase, FaBook, FaGraduationCap, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { socialLinks } from "../../data/HomeData"

function Header() {
    const [isDark, setIsDark] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { label: 'Home', icon: <FaHome />, path: '/' },
        { label: 'About', icon: <FaUser />, path: '/about' },
        { label: 'Highlights', icon: <FaBriefcase />, path: '/highlights' },
        { label: 'Blogs', icon: <FaBook />, path: '/blogs' },
        { label: 'Student Corner', icon: <FaGraduationCap />, path: '/student-corner' },
        { label: 'Contact', icon: <FaEnvelope />, path: '/contact' },
    ];

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-black/30 backdrop-blur-sm'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-end h-14">
                    {/* Navigation - Desktop */}
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

                    {/* Vertical Separator - Desktop */}
                    <div className="hidden md:block h-6 w-px bg-gray-800 mx-3" />

                    {/* Right side actions */}
                    <div className="flex items-center space-x-3">
                        {/* Social Links - Desktop */}
                        <div className="hidden md:flex items-center space-x-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.url}
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
                            disabled
                            className="p-1.5 opacity-70 rounded-lg bg-gray-800/50 text-gray-400 cursor-no-drop transition-colors duration-300 text-sm"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </motion.button>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleMobileMenuToggle}
                            className="md:hidden p-1.5 text-gray-400 hover:text-white transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FaTimes className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6">
                            {/* Mobile Navigation */}
                            <nav className="space-y-2 mb-6">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.label}
                                        onClick={() => navigate(item.path)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${location.pathname === item.path
                                            ? 'bg-white/10 text-white border border-white/20'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span className={`text-lg ${location.pathname === item.path
                                            ? 'text-white'
                                            : 'text-gray-400'
                                            }`}>
                                            {item.icon}
                                        </span>
                                        <span className="text-base font-medium">{item.label}</span>
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Mobile Social Links */}
                            <div className="border-t border-gray-800 pt-6">
                                <h3 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h3>
                                <div className="flex justify-center gap-6">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
                                            aria-label={social.label}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <span className="text-xl">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;