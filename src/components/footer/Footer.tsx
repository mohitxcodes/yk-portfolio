import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { icon: <FaGithub />, href: '#', label: 'GitHub' },
        { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative z-50 bg-black/30"
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-10 text-sm">
                    {/* Copyright */}
                    <div className="text-gray-400">
                        © {currentYear} Yashwant Kumar
                    </div>

                    {/* Made with love */}
                    <div className="text-gray-400 flex items-center gap-1">
                        Made with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-red-500"
                        >
                            <FaHeart />
                        </motion.span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;