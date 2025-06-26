import { motion, } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaRocket, FaLightbulb, FaUsers, FaGlobe } from 'react-icons/fa';
import SectionHeader from '../../../components/common/SectionHeader';

function CollabSection() {
    return (
        <section className="min-h-screen bg-black text-white py-12 sm:py-16 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Let's Connect"
                    description="Ready to collaborate? I'm always excited to connect with fellow innovators and creators."
                />

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Left Column - Personal Message & Interests */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Personal Message */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                A Personal Note
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-gray-300">
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Thank you for taking the time to explore my portfolio. Your interest in my work is truly appreciated, and I'm grateful for the opportunity to share my journey with you.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Whether you're here to collaborate, learn, or simply connect, I'm excited to engage with fellow innovators and creators who share a passion for technology and innovation.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Let's create something extraordinary together. I'm always open to new ideas, partnerships, and meaningful conversations.
                                </p>
                            </div>
                        </div>

                        {/* Collaboration Interests */}
                        <div className="space-y-3 sm:space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-300">Areas of Interest</h4>
                            <div className="space-y-2 sm:space-y-3">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaRocket className="text-gray-300 text-base sm:text-lg flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-gray-300">Research & Innovation Projects</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <FaLightbulb className="text-gray-300 text-base sm:text-lg flex-shrink-0" />
                                    <span className="text-sm sm:text-base text-gray-300">Tech Workshops & Mentoring</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* Connect Message */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Get in Touch
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                I'm always excited to meet new people and explore potential collaborations. Whether you have a project in mind, want to discuss research opportunities, or just want to chat about technology, I'd love to hear from you.
                            </p>
                        </div>

                        {/* Contact Actions */}
                        <div className="space-y-3 sm:space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-300">Ways to Connect</h4>
                            <div className="space-y-3">
                                <motion.a
                                    href="mailto:yashwantkumar9566@gmail.com"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-3 p-3 sm:p-4 border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300 group"
                                >
                                    <FaEnvelope className="text-gray-400 group-hover:text-white transition-colors text-base sm:text-lg flex-shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <div className="text-sm sm:text-base text-white font-medium">Send Email</div>
                                        <div className="text-xs sm:text-sm text-gray-400 truncate">yashwantkumar9566@gmail.com</div>
                                    </div>
                                </motion.a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3 sm:space-y-4">
                            <h4 className="text-base sm:text-lg font-semibold text-gray-300">Follow & Connect</h4>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4">
                                {[
                                    { icon: <FaInstagram />, label: "Instagram", url: "https://www.instagram.com/yashwant_kumarr/", desc: "Daily Life & Updates" },
                                    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/yashwant-kumar-702ba261/", desc: "Professional Network" },
                                    { icon: <FaTwitter />, label: "Twitter", url: "https://www.x.com/yashwant_kumarr", desc: "Thoughts & Updates" }
                                ].map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex flex-col items-center gap-2 p-3 sm:p-4 border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <span className="text-lg sm:text-2xl text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </span>
                                        <div className="text-center min-w-0">
                                            <div className="text-xs sm:text-sm font-medium text-white truncate">{social.label}</div>
                                            <div className="text-xs text-gray-400 truncate hidden sm:block">{social.desc}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CollabSection;
