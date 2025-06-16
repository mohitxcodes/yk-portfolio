import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHandshake, FaCalendarAlt, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaRocket, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';
import { useState } from 'react';

function CollabSection() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [showSchedule, setShowSchedule] = useState(false);

    const collaborationAreas = [
        {
            title: "Research",
            description: "AI & ML Research Projects",
            icon: <FaRocket />,
            color: "from-purple-500/20 to-blue-500/20",
            tags: ["AI", "ML", "Data Science"]
        },
        {
            title: "Mentoring",
            description: "Tech Workshops & Talks",
            icon: <FaLightbulb />,
            color: "from-amber-500/20 to-orange-500/20",
            tags: ["Workshops", "Talks", "Mentoring"]
        }
    ];

    return (
        <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                        className="space-y-6"
                    >
                        <div className="relative inline-block">
                            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Thank You & Let's Connect
                            </h2>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false }}
                            />
                        </div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Your time and interest mean the world to me. I'm excited to explore potential collaborations and share our journeys together.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Left Column - Personal Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                            <h3 className="text-2xl font-semibold mb-6">A Personal Note</h3>
                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed">
                                    Thank you for taking the time to explore my portfolio. Your interest in my work is truly appreciated, and I'm grateful for the opportunity to share my journey with you.
                                </p>
                                <p className="leading-relaxed">
                                    Whether you're here to collaborate, learn, or simply connect, I'm excited to engage with fellow innovators and creators who share a passion for technology and innovation.
                                </p>
                                <p className="leading-relaxed">
                                    Let's create something extraordinary together. I'm always open to new ideas, partnerships, and meaningful conversations.
                                </p>
                            </div>
                        </div>

                        {/* Collaboration Areas - More Minimal */}
                        <div className="grid grid-cols-1 gap-4">
                            {collaborationAreas.map((area, index) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${area.color} backdrop-blur-sm flex items-center justify-center text-lg text-white border border-gray-700 flex-shrink-0`}>
                                            {area.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold">{area.title}</h3>
                                                <div className="flex gap-2">
                                                    {area.tags.map((tag) => (
                                                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm mt-1">{area.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Schedule Meeting Card */}
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8">
                            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                            <p className="text-gray-400 mb-8">
                                I'm always excited to meet new people and explore potential collaborations. Whether you have a project in mind or just want to chat, I'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowSchedule(true)}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300"
                                >
                                    <FaCalendarAlt />
                                    <span>Schedule a Meeting</span>
                                </motion.button>

                                <motion.a
                                    href="mailto:contact@example.com"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300"
                                >
                                    <FaEnvelope />
                                    <span>Send Me an Email</span>
                                </motion.a>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-8 border-t border-gray-800">
                                <h4 className="text-lg font-semibold mb-4">Connect on Social Media</h4>
                                <div className="flex justify-center gap-6">
                                    {[
                                        { icon: <FaGithub />, label: "GitHub" },
                                        { icon: <FaLinkedin />, label: "LinkedIn" },
                                        { icon: <FaTwitter />, label: "Twitter" }
                                    ].map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href="#"
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats - More Minimal */}
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
                            <div className="grid grid-cols-4 gap-2">
                                <div className="text-center p-2">
                                    <div className="text-xl font-bold text-white">5+</div>
                                    <div className="text-xs text-gray-400">Years</div>
                                </div>
                                <div className="text-center p-2">
                                    <div className="text-xl font-bold text-white">50+</div>
                                    <div className="text-xs text-gray-400">Projects</div>
                                </div>
                                <div className="text-center p-2">
                                    <div className="text-xl font-bold text-white">100+</div>
                                    <div className="text-xs text-gray-400">Clients</div>
                                </div>
                                <div className="text-center p-2">
                                    <div className="text-xl font-bold text-white">15+</div>
                                    <div className="text-xs text-gray-400">Papers</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Schedule Meeting Modal */}
            {showSchedule && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowSchedule(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-900 rounded-lg p-8 max-w-md w-full border border-gray-800"
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-6">Schedule a Meeting</h2>
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
                                <label className="block text-sm font-medium text-gray-300 mb-2">Meeting Purpose</label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white/20 transition-all"
                                    rows={3}
                                    placeholder="Brief description of what you'd like to discuss"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300"
                            >
                                Schedule Meeting
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}

export default CollabSection;
