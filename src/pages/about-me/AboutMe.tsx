import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaGlobe, FaArrowRight, FaAward, FaBook, FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope, FaPython, FaReact, FaAws, FaDocker, FaDatabase, FaInstagram } from 'react-icons/fa';
import { SiGo, SiTypescript, SiKubernetes, SiTerraform, SiApachekafka, SiGraphql, SiPostgresql, SiRedis, SiArangodb } from 'react-icons/si';

function AboutMe() {
    const skills = [
        { name: "Go", icon: <SiGo className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Google Cloud", icon: <FaGlobe className="text-blue-500" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Terraform", icon: <SiTerraform className="text-purple-500" /> },
        { name: "NATS", icon: <FaDatabase className="text-green-500" /> },
        { name: "Kafka", icon: <SiApachekafka className="text-gray-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
        { name: "Postgres", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "ArangoDB", icon: <SiArangodb className="text-blue-600" /> }
    ];

    const achievements = [
        { icon: <FaAward />, text: "Research Excellence Award 2023" },
        { icon: <FaRocket />, text: "Top 10 Innovators in Tech" },
        { icon: <FaBook />, text: "Published 15+ Technical Articles" }
    ];

    const quickLinks = [
        { icon: <FaCalendarAlt />, text: "Schedule a Meeting", link: "#" },
        { icon: <FaEnvelope />, text: "Send an Email", link: "mailto:contact@example.com" },
    ];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-28 relative z-10 pt-24">
                {/* Main Content */}
                <div className="max-w-5xl mx-auto pb-20">
                    {/* Profile Section */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Left Column - Header, Avatar and Quick Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="lg:w-1/3 space-y-8"
                        >
                            {/* Header Section */}
                            <div className="space-y-6">
                                <div className="relative inline-block">
                                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
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
                            <div className="relative">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-800">
                                    <img
                                        src="/avatar.jpg"
                                        alt="Yashwant Kumar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 text-sm"
                                >
                                    <FaDownload />
                                    <span>Resume</span>
                                </motion.a>
                            </div>

                            {/* Quick Info */}
                            <div className="space-y-2 ">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <FaCode className="text-lg" />
                                    <span>Cloud Engineer at Apple</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <FaGraduationCap className="text-lg" />
                                    <span>5+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <FaGlobe className="text-lg" />
                                    <span>Based in San Francisco</span>
                                </div>

                                {/* Social Links */}
                                <div className="pt-2 border-t border-gray-800">
                                    <div className="flex gap-4">
                                        {[
                                            { icon: <FaGithub />, label: "GitHub" },
                                            { icon: <FaLinkedin />, label: "LinkedIn" },
                                            { icon: <FaTwitter />, label: "Twitter" },
                                            { icon: <FaInstagram />, label: "Instagram" }

                                        ].map((social) => (
                                            <motion.a
                                                key={social.label}
                                                href="#"
                                                whileHover={{ scale: 1.2, y: -5 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="text-xl text-gray-400 hover:text-white transition-colors duration-300"
                                                aria-label={social.label}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="pt-4 border-t border-gray-800">
                                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Recent Achievements</h3>
                                    <div className="space-y-3">
                                        {achievements.map((achievement, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-2 text-sm text-gray-300"
                                            >
                                                <span className="text-gray-400">{achievement.icon}</span>
                                                <span>{achievement.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Links */}
                                <div className="pt-4 border-t border-gray-800">
                                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Quick Links</h3>
                                    <div className="space-y-3">
                                        {quickLinks.map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.link}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                <span className="text-gray-400">{link.icon}</span>
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
                            className="lg:w-2/3 space-y-8"
                        >
                            {/* About Section */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-gray-300">Hi, I'm Yashwant Kumar</h2>
                                <div className="space-y-4 text-gray-300/80">
                                    <p className="leading-relaxed">
                                        A software engineer who aims to evolve, innovate, and inspire through technology.
                                    </p>
                                    <p className="leading-relaxed">
                                        Currently, I am working as a <strong>Cloud Engineer</strong> at <strong>Apple</strong>, focusing on building scalable and secure cloud infrastructure.
                                    </p>
                                    <p className="leading-relaxed">
                                        Previously, I was a Senior Software Engineer at Guardian Life, and a Senior Engineer at Curebase where I contributed to the creation of a decentralized clinical trial platform and scaling infrastructure with an emphasis on security, HIPAA compliance, and GDPR compliance.
                                    </p>
                                    <p className="leading-relaxed">
                                        Outside of work, I've written technical articles, contributed to open-source projects, and actively participate in the tech community.
                                    </p>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                        >
                                            {skill.icon}
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Call to Action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5 }}
                                className="pt-4"
                            >
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                                >
                                    <span>View My Work</span>
                                    <FaArrowRight />
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

