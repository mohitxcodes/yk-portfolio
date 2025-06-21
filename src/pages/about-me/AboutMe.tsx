import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaDownload, FaGlobe } from 'react-icons/fa';
import { skills, achievements, quickLinks } from "../../data/AboutMeData"
import { socialLinks } from "../../data/HomeData"

function AboutMe() {

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-28 relative z-10 pt-20 sm:pt-24">
                {/* Main Content */}
                <div className="max-w-5xl mx-auto pb-12 sm:pb-20">
                    {/* Profile Section */}
                    <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-start">
                        {/* Left Column - Header, Avatar and Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="lg:w-1/3 space-y-6 sm:space-y-8"
                        >
                            {/* Header Section */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="relative inline-block">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                        About Me
                                    </h2>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: false }}
                                    />
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="relative flex justify-center lg:justify-start">
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gray-800">
                                    <img
                                        src="/images/yashwant.jpeg"
                                        alt="Yashwant Kumar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.a
                                    href="/myresume.pdf"
                                    target="_blank"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:translate-x-0 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm"
                                >
                                    <FaDownload />
                                    <span>Resume</span>
                                </motion.a>
                            </div>

                            {/* Quick Info */}
                            <div className="space-y-2 sm:space-y-3">
                                <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                                    <FaGraduationCap className="text-base sm:text-lg flex-shrink-0" />
                                    <span className="text-sm sm:text-base">Assistant Professor</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                                    <FaCode className="text-base sm:text-lg flex-shrink-0" />
                                    <span className="text-sm sm:text-base">5+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <FaGlobe className="text-base sm:text-lg flex-shrink-0" />
                                        <span className="text-sm sm:text-base">Based in India</span>
                                        <span className="text-base sm:text-lg">🇮🇳</span>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="pt-2 sm:pt-3 border-t border-gray-800">
                                    <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start">
                                        {socialLinks.map((social) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                whileHover={{ scale: 1.2, y: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-lg sm:text-xl text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="pt-3 sm:pt-4 border-t border-gray-800">
                                    <h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Recent Achievements</h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        {achievements.map((achievement, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300"
                                            >
                                                <span className="text-gray-400 flex-shrink-0">{achievement.icon}</span>
                                                <span className="leading-relaxed">{achievement.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="pt-3 sm:pt-4 border-t border-gray-800">
                                    <h3 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Quick Links</h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        {quickLinks.map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.link}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                <span className="text-gray-400 flex-shrink-0">{link.icon}</span>
                                                <span>{link.text}</span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - About and Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="lg:w-2/3 space-y-6 sm:space-y-8"
                        >
                            {/* About Section */}
                            <div className="space-y-3 sm:space-y-4">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-300">Hi, I'm Yashwant Kumar,</h2>
                                <div className="space-y-3 sm:space-y-4 text-gray-300/80">
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        currently pursuing a Ph.D. in Artificial Intelligence and Machine Learning at <strong> NIT Jalandhar.</strong> I'm a former <strong> Assistant Professor </strong>in the Department of Computer Science at <strong> Chandigarh University,</strong> where I had the opportunity to teach and mentor future technologists.
                                    </p>
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        My expertise lies in AI, Machine Learning, and Full Stack Development, and I've conducted various workshops and hands-on sessions in these domains. I take pride in making complex topics accessible and engaging teaching isn't just a profession for me, it's a true calling.
                                    </p>
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        Beyond the academic and tech world, I'm passionate about <strong> traveling, photography, and videography. </strong>I believe every place has a story, and I love capturing those moments through my lens. I'm also a fitness enthusiast, always working to keep both mind and body sharp.
                                    </p>
                                    <p className="text-sm sm:text-base leading-relaxed">
                                        Let's connect, grow, and create together.
                                    </p>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-3 sm:space-y-4">
                                <h2 className="text-xl sm:text-2xl font-semibold">Skills & Expertise</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                                        >
                                            <span className="text-gray-300 flex-shrink-0">{skill.icon}</span>
                                            <span className="truncate">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

