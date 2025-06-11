import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaCamera, FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaBook, FaGlobe, FaLightbulb, FaChevronRight, FaRocket, FaBrain, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function HeroSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showContact, setShowContact] = useState(false);
    const [activeHighlight, setActiveHighlight] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const highlights = [
        {
            title: "Research & Innovation",
            description: "Pioneering breakthrough solutions in scientific research",
            icon: <FaRocket />,
            color: "from-purple-500 to-blue-500",
            stats: "15+ Publications",
            achievements: ["Research Excellence Award", "Innovation Grant"]
        },
        {
            title: "Global Impact",
            description: "Connecting cultures and sharing knowledge worldwide",
            icon: <FaGlobe />,
            color: "from-emerald-500 to-teal-500",
            stats: "30+ Countries",
            achievements: ["Cultural Exchange Program", "International Speaker"]
        },
        {
            title: "Education & Mentorship",
            description: "Empowering the next generation of leaders",
            icon: <FaUsers />,
            color: "from-amber-500 to-orange-500",
            stats: "1000+ Students",
            achievements: ["Teaching Excellence", "Mentorship Program"]
        }
    ];

    const quickLinks = [
        { text: "View Projects", icon: <FaArrowRight />, color: "from-purple-500 to-blue-500" },
        { text: "Read Blog", icon: <FaBook />, color: "from-emerald-500 to-teal-500" },
        { text: "Contact Me", icon: <FaEnvelope />, color: "from-amber-500 to-orange-500" },
        { text: "Download CV", icon: <FaDownload />, color: "from-red-500 to-pink-500" }
    ];

    const socialLinks = [
        { icon: <FaGithub />, url: "#", label: "GitHub" },
        { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
        { icon: <FaTwitter />, url: "#", label: "Twitter" },
    ];

    const achievements = [
        { icon: <FaAward />, text: "Research Excellence Award 2023" },
        { icon: <FaChartLine />, text: "Top 10 Innovators in Tech" },
        { icon: <FaBrain />, text: "AI Research Grant Recipient" }
    ];

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left side - Text content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="mb-8">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-400 uppercase tracking-wider text-xs font-medium"
                                >
                                    Welcome to my world
                                </motion.span>
                                <h1 className="text-4xl md:text-6xl font-bold mt-2">
                                    <span className="text-white">
                                        Yashwant Kumar
                                    </span>
                                </h1>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-gray-300 mb-8"
                            >
                                <span className="font-light">Bridging the gap between</span>
                                <br />
                                <span className="font-bold">research, education, and global exploration</span>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.5 }}
                                className="mb-8"
                            >
                                <h3 className="text-sm font-medium text-gray-400 mb-4">Recent Achievements</h3>
                                <div className="space-y-3">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="flex items-center gap-3 text-sm text-gray-300"
                                        >
                                            {achievement.icon}
                                            <span>{achievement.text}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.7 }}
                                className="grid grid-cols-2 gap-4 mb-8"
                            >
                                {quickLinks.map((link, index) => (
                                    <motion.a
                                        key={link.text}
                                        href="#"
                                        whileHover={{ scale: 1.05, x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative overflow-hidden p-3 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                        <div className="relative z-10 flex items-center gap-2 text-sm">
                                            {link.icon}
                                            <span>{link.text}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.8 }}
                                className="flex gap-4"
                            >
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-xl text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="space-y-6">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className={`group relative p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm ${activeHighlight === index ? 'border-gray-600' : ''
                                        }`}
                                    onHoverStart={() => setActiveHighlight(index)}
                                    onHoverEnd={() => setActiveHighlight(0)}
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-0"
                                        animate={{
                                            opacity: activeHighlight === index ? 0.1 : 0,
                                            background: `linear-gradient(to right, ${highlight.color})`
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="relative z-10">
                                        <motion.div
                                            className="flex items-center gap-4 mb-3"
                                            animate={{
                                                x: activeHighlight === index ? 10 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                className="text-2xl"
                                                animate={{
                                                    rotate: activeHighlight === index ? 360 : 0,
                                                    color: activeHighlight === index ? `var(--${highlight.color.split('-')[1]})` : 'white'
                                                }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {highlight.icon}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                                                <p className="text-sm text-gray-400 mt-1">{highlight.stats}</p>
                                            </div>
                                        </motion.div>
                                        <motion.p
                                            className="text-gray-400 mb-4"
                                            animate={{
                                                x: activeHighlight === index ? 10 : 0,
                                                opacity: activeHighlight === index ? 1 : 0.8
                                            }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            {highlight.description}
                                        </motion.p>
                                        <motion.div
                                            className="flex flex-wrap gap-2"
                                            animate={{
                                                opacity: activeHighlight === index ? 1 : 0.8
                                            }}
                                        >
                                            {highlight.achievements.map((achievement, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                                                >
                                                    {achievement}
                                                </span>
                                            ))}
                                        </motion.div>
                                        <motion.div
                                            className="absolute right-4 top-1/2 -translate-y-1/2"
                                            animate={{
                                                x: activeHighlight === index ? 0 : 20,
                                                opacity: activeHighlight === index ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <FaChevronRight />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Form Modal */}
            <AnimatePresence>
                {showContact && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowContact(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-gray-800"
                            onClick={e => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                        rows={4}
                                        placeholder="Your message"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="w-1 h-2 bg-gray-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default HeroSection;