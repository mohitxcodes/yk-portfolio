import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaClock, FaCheck, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('contact');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        { icon: <FaEnvelope />, label: 'Email', value: 'contact@example.com', link: 'mailto:contact@example.com' },
        { icon: <FaPhone />, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
        { icon: <FaMapMarkerAlt />, label: 'Location', value: 'San Francisco, CA', link: '#' }
    ];

    const socialLinks = [
        { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/yourusername' },
        { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://linkedin.com/in/yourusername' },
        { icon: <FaTwitter />, label: 'Twitter', link: 'https://twitter.com/yourusername' },
        { icon: <FaInstagram />, label: 'Instagram', link: 'https://instagram.com/yourusername' }
    ];

    const quickActions = [
        { icon: <FaCalendarAlt />, label: 'Schedule Meeting', description: 'Book a 30-min call', link: '#' },
        { icon: <FaGlobe />, label: 'Join Community', description: 'Connect with others', link: '#' },
        { icon: <FaGlobe />, label: 'Project Ideas', description: 'Share your thoughts', link: '#' }
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Enhanced Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />

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
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                {/* Main Content */}
                <div className="max-w-5xl mx-auto pb-20">
                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="relative inline-block">
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Let's Connect
                            </h2>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false }}
                            />
                        </div>
                        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
                            Have a question or want to work together? Feel free to reach out through any of the channels below.
                        </p>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                    >
                        {quickActions.map((action, index) => (
                            <motion.a
                                key={action.label}
                                href={action.link}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-4 hover:border-gray-600 transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-gray-400">{action.icon}</span>
                                    <span className="font-medium">{action.label}</span>
                                </div>
                                <p className="text-sm text-gray-400">{action.description}</p>
                            </motion.a>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                                    <FaPaperPlane className="text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">Send Message</h3>
                                    <p className="text-xs text-gray-400">I'll get back to you as soon as possible</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Name</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                                placeholder="John Doe"
                                                required
                                            />
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-focus-within:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Email</label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                                placeholder="john@example.com"
                                                required
                                            />
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-focus-within:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Subject</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                            placeholder="What's this about?"
                                            required
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-focus-within:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Message</label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-3 py-2.5 text-sm rounded-lg bg-gray-800/50 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500 resize-none min-h-[160px]"
                                            placeholder="Your message here..."
                                            required
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-focus-within:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                                        />
                                    ) : (
                                        <>
                                            <FaPaperPlane className="text-xs relative z-10" />
                                            <span className="relative z-10">Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info & Social Links */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            {/* Contact Info */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                <h3 className="text-lg font-medium mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.label}
                                            href={info.link}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <span className="text-gray-400 group-hover:scale-110 transition-transform">{info.icon}</span>
                                            <div>
                                                <div className="text-xs text-gray-400">{info.label}</div>
                                                <div>{info.value}</div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-medium">Connect</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <FaGlobe className="text-gray-500" />
                                        <span>Follow me</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-500 transition-all"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/0 via-gray-700/10 to-gray-700/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                            <div className="relative flex items-center gap-2 p-2.5">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900/50 border border-gray-700 group-hover:border-gray-500 transition-colors">
                                                    <span className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                                        {social.icon}
                                                    </span>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-medium truncate">{social.label}</div>
                                                    <div className="text-xs text-gray-400 truncate">@{social.label.toLowerCase()}</div>
                                                </div>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-800">
                                    <div className="flex items-center justify-between text-xs text-gray-400">
                                        <span>Latest updates</span>
                                        <span className="text-gray-500">Active now</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Success Message */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
                    >
                        <FaCheck />
                        <span>Message sent successfully!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ContactPage;
