import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaCamera, FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaBook, FaGlobe, FaLightbulb, FaChevronRight, FaRocket, FaBrain, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

function HeroSection() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showContact, setShowContact] = useState(false);
    const [activeRole, setActiveRole] = useState(0);

    const roles = [
        { text: "Researcher", color: "from-gray-400 to-gray-600" },
        { text: "Coder", color: "from-gray-400 to-gray-600" },
        { text: "Teacher", color: "from-gray-400 to-gray-600" },
        { text: "Traveler", color: "from-gray-400 to-gray-600" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRole((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

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
        },
        {
            title: "AI Development",
            description: "Building next-generation AI solutions for real-world problems",
            icon: <FaBrain />,
            color: "from-blue-500 to-indigo-500",
            stats: "10+ AI Projects",
            achievements: ["AI Innovation Award", "Tech Leadership"]
        }
    ];

    const quickLinks = [
        { text: "Read Blog", icon: <FaBook />, color: "from-emerald-500 to-teal-500" },
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

    const stats = [
        { label: "Years Experience", value: "5+" },
        { label: "Research Papers", value: "15+" },
        { label: "Projects Completed", value: "30+" }
    ];

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Enhanced Animated background */}
            <div className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />

                {/* Main glowing orb */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[100px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[100px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                {/* Additional floating orbs */}
                <motion.div
                    className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-gray-400/5 to-gray-600/5 blur-[80px]"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/3 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-gray-400/5 to-gray-600/5 blur-[80px]"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                {/* Subtle moving gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30"
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Left side - Enhanced Text content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-left max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-10"
                        >
                            {/* Introduction Section */}
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-4"
                                >
                                    <motion.h1
                                        className="text-4xl md:text-5xl font-bold tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="flex flex-wrap items-baseline gap-2">
                                            <span className="text-gray-400 font-light">Hi, I'm</span>
                                            <span className="relative inline-block">
                                                <span className="bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                                    Yashwant Kumar
                                                </span>
                                                <motion.span
                                                    className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-lg"
                                                    animate={{
                                                        opacity: [0.5, 0.8, 0.5],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}
                                                />
                                            </span>
                                        </div>
                                    </motion.h1>

                                    {/* Role Section with enhanced animation */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.6 }}
                                        className="text-xl md:text-2xl"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400">I am</span>
                                            <TypeAnimation
                                                sequence={[
                                                    'a Researcher',
                                                    1500,
                                                    'a Coder',
                                                    1500,
                                                    'a Teacher',
                                                    1500,
                                                    'a Traveler',
                                                    1500,
                                                ]}
                                                wrapper="span"
                                                speed={30}
                                                className="font-medium"
                                                repeat={Infinity}
                                                cursor={true}
                                                style={{
                                                    display: 'inline-block',
                                                    background: 'linear-gradient(to right, #fff, #9ca3af)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }}
                                                preRenderFirstString={true}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Description Section */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.7 }}
                                        className="text-gray-400"
                                    >
                                        <p className="text-lg leading-relaxed">
                                            Passionate about pushing boundaries in research, sharing knowledge through teaching,
                                            and exploring the world through travel. I combine technical expertise with creative
                                            thinking to solve complex problems.
                                        </p>
                                    </motion.div>

                                    {/* Stats Section - Simplified */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.8 }}
                                        className="flex items-center gap-8 text-gray-400"
                                    >
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.9 + index * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                                    {stat.value}
                                                </span>
                                                <span className="text-sm">{stat.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Quick Links */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1.0 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    {quickLinks.map((link, index) => (
                                        <motion.a
                                            key={link.text}
                                            href="#"
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group w-max px-6 relative overflow-hidden py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
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
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1.1 }}
                                    className="flex gap-6"
                                >
                                    {socialLinks.map((social) => (
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
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - New Dynamic Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="my-10 space-y-8 flex flex-col justify-center">
                            {/* Interactive Timeline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 }}
                                className="relative"
                            >
                                <h3 className="text-lg font-semibold mb-4">Recent Milestones</h3>
                                <div className="space-y-4">
                                    {highlights.map((highlight, index) => (
                                        <motion.div
                                            key={highlight.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="relative pl-8 border-l-2 border-gray-800"
                                        >
                                            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r ${highlight.color}`} />
                                            <div className="mb-1 text-sm text-gray-400">2023</div>
                                            <div className="font-medium">{highlight.title}</div>
                                            <div className="text-sm text-gray-500">{highlight.description}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
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