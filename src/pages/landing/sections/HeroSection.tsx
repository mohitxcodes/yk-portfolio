import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { heroHighlights, quickLinks, socialLinks, stats } from '../../../data/HomeData'

function HeroSection() {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [showContact, setShowContact] = useState(false);

    return (
        <div className="md:min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
            {/* Enhanced Animated background */}
            <div className="absolute inset-0 z-0">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />

                {/* Main glowing orb */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-r from-gray-500/20 to-gray-700/20 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px]"
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
                    className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[50px] sm:blur-[70px] md:blur-[100px]"
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
                    className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[50px] sm:blur-[70px] md:blur-[100px]"
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
                    className="absolute top-1/3 right-1/3 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-r from-gray-400/5 to-gray-600/5 blur-[40px] sm:blur-[60px] md:blur-[80px]"
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
                    className="absolute bottom-1/3 left-1/3 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-gradient-to-r from-gray-400/5 to-gray-600/5 blur-[40px] sm:blur-[60px] md:blur-[80px]"
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] pt-20 lg:pt-0">
                    {/* Left side - Enhanced Text content */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="text-left max-w-2xl mx-auto lg:mx-0"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 sm:space-y-8 lg:space-y-10"
                        >
                            {/* Introduction Section */}
                            <div className="space-y-6 sm:space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.3 }}
                                    className="space-y-4"
                                >
                                    <motion.h1
                                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
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
                                        className="text-lg sm:text-xl md:text-2xl"
                                    >
                                        <div className="flex items-center gap-2 flex-wrap">
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
                                        <p className="text-base sm:text-lg leading-relaxed">
                                            Currently pursuing a Ph.D. in Artificial Intelligence and Machine Learning at NIT Jalandhar. I'm a former Assistant Professor in the Department of Computer Science at Chandigarh University, where I had the opportunity to teach and mentor future technologists.
                                        </p>
                                    </motion.div>

                                    {/* Stats Section - Responsive */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : {}}
                                        transition={{ delay: 0.8 }}
                                        className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 text-gray-400"
                                    >
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.9 + index * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                                    {stat.value}
                                                </span>
                                                <span className="text-xs sm:text-sm">{stat.label}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>

                                {/* Quick Links - Responsive */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1.0 }}
                                    className="flex flex-wrap gap-3 sm:gap-4"
                                >
                                    {quickLinks.map((link) => (
                                        <Link
                                            key={link.text}
                                            to={link.herf}
                                            className="group w-max px-4 sm:px-6 relative overflow-hidden py-2.5 sm:py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                            <div className="relative z-10 flex items-center gap-2 text-xs sm:text-sm">
                                                {link.icon}
                                                <span>{link.text}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>

                                {/* Social Links - Responsive */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ delay: 1.1 }}
                                    className="flex gap-3"
                                >
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-lg sm:text-xl text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Responsive Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-first lg:order-last hidden md:block"
                    >
                        <div className="my-6 sm:my-8 lg:my-10 space-y-6 sm:space-y-8 flex flex-col justify-center">
                            {/* Interactive Timeline */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 0.4 }}
                                className="relative"
                            >
                                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Recent Milestones</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    {heroHighlights.map((highlight, index) => (
                                        <motion.div
                                            key={highlight.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="relative pl-6 sm:pl-8 border-l-2 border-gray-800"
                                        >
                                            <div className={`absolute left-[-7px] sm:left-[-9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${highlight.color}`} />
                                            <div className="mb-1 text-xs sm:text-sm text-gray-400">2023</div>
                                            <div className="font-medium text-sm sm:text-base">{highlight.title}</div>
                                            <div className="text-xs sm:text-sm text-gray-500">{highlight.description}</div>
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
                            className="bg-gray-900 rounded-lg p-6 sm:p-8 max-w-md w-full border border-gray-800"
                            onClick={e => e.stopPropagation()}
                        >
                            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
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
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
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
                    className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center"
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
                        className="w-1 h-2 bg-gray-400 rounded-full mt-1.5 sm:mt-2"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default HeroSection;