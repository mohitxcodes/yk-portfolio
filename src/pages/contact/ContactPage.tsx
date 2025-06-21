import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaCheck, FaCopy } from 'react-icons/fa';
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
    const [copied, setCopied] = useState(false);

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

    // Contact info: only Email and Location, simple style
    const contactInfo = [
        {
            icon: <FaEnvelope className="text-gray-400" />, label: 'Email', value: 'yashwantkumar9566@gmail.com', link: 'mailto:yashwantkumar9566@gmail.com',
        },
        {
            icon: <FaMapMarkerAlt className="text-gray-400" />, label: 'Location', value: 'Punjab, India', link: 'https://goo.gl/maps/xyz',
        },
    ];


    const socialLinks = [
        { icon: <FaInstagram />, label: 'Instagram', url: 'https://www.instagram.com/yashwant_kumarr/', desc: 'Daily Life & Updates' },
        { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/yashwant-kumar-702ba261/', desc: 'Professional Network' },
        { icon: <FaTwitter />, label: 'Twitter', url: 'https://www.x.com/yashwant_kumarr', desc: 'Thoughts & Updates' },
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

            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
                {/* Main Content */}
                <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto pb-10 sm:pb-16 md:pb-20">
                    {/* Header Section - like StudentPage */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 sm:mb-10 md:mb-12 text-left px-1 sm:px-0"
                    >
                        <div className="relative inline-block">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Contact
                            </h2>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: false }}
                            />
                        </div>
                        <p className="mt-3 sm:mt-4 text-gray-400 max-w-xl text-xs sm:text-sm">
                            Have a question or want to work together? Feel free to reach out through any of the channels below.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* Contact Form - improved theme */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="bg-black/20 rounded-xl border border-gray-800 p-4 sm:p-6"
                        >
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                                    <FaPaperPlane className="text-gray-400 text-base sm:text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-medium">Send Message</h3>
                                    <p className="text-xs text-gray-400">I'll get back to you as soon as possible</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div className="group">
                                        <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Name</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                                placeholder="Yashwant Kumar"
                                                required
                                            />
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
                                                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                                placeholder="yashwant@example.com"
                                                required
                                            />
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
                                            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                            placeholder="What's this about?"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Message</label>
                                    <div className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500 resize-none min-h-[100px] sm:min-h-[120px]"
                                            placeholder="Your message here..."
                                            required
                                        />
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
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
                            {/* Contact Info - reverted, minimal */}
                            <div className="bg-black/10 rounded-xl border border-gray-800 p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Contact Information</h3>
                                <div className="space-y-2 sm:space-y-3">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={info.label}
                                            href={info.link}
                                            className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors group"
                                            target={info.label === 'Location' ? '_blank' : undefined}
                                            rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                                        >
                                            <span className="text-gray-400 group-hover:scale-110 transition-transform text-base sm:text-lg">{info.icon}</span>
                                            <div>
                                                <div className="text-xs text-gray-400">{info.label}</div>
                                                <div>{info.value}</div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Divider and subtitle */}
                            <div className="flex items-center gap-2 sm:gap-3 my-2">
                                <div className="flex-1 h-px bg-gray-800" />
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Other Ways to Connect</span>
                                <div className="flex-1 h-px bg-gray-800" />
                            </div>

                            {/* Social Links - CollabSection style */}
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Connect</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex flex-col items-center gap-1.5 sm:gap-2 p-2.5 sm:p-4 border border-gray-700 hover:border-gray-500 rounded-lg transition-all duration-300 group"
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
                                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800">
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
