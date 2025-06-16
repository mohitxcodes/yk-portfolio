import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaBrain, FaChartLine, FaAward, FaLightbulb, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaArrowUp, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useSpring, animated, useTrail } from '@react-spring/web';

function Experience() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Timeline animation spring with enhanced config
    const [timelineSpring, api] = useSpring(() => ({
        from: { scaleY: 0, opacity: 0 },
        to: { scaleY: 1, opacity: 1 },
        config: { tension: 280, friction: 20 }
    }));

    // Enhanced dots animation with shadow effect
    const dotsTrail = useTrail(3, {
        from: { scale: 0, opacity: 0, boxShadow: '0 0 0 rgba(255,255,255,0)' },
        to: { scale: 1, opacity: 1, boxShadow: '0 0 20px rgba(255,255,255,0.2)' },
        config: { tension: 280, friction: 20 },
        delay: 200
    });

    const experiences = [
        {
            title: "Senior Research Scientist",
            company: "Tech Innovations Lab",
            period: "2022 - Present",
            description: "Leading research in AI and machine learning applications. Published 5 papers in top-tier conferences.",
            icon: <FaBrain />,
            tags: ["AI Research", "Machine Learning", "Team Leadership"],
            achievements: ["Best Paper Award 2023", "Research Grant Recipient"],
            color: "from-purple-500/20 to-blue-500/20",
            companyLogo: "https://via.placeholder.com/150",
            location: "San Francisco, CA",
            link: "#",
            highlights: [
                "Led a team of 10 researchers in AI projects",
                "Secured $2M in research funding",
                "Published in top-tier conferences"
            ],
            growth: "Senior Leadership",
            impact: "High",
            skills: ["AI/ML", "Leadership", "Research"]
        },
        {
            title: "Software Engineer",
            company: "Global Tech Solutions",
            period: "2020 - 2022",
            description: "Developed scalable applications using modern technologies. Led a team of 5 developers.",
            icon: <FaCode />,
            tags: ["Full Stack", "Team Lead", "Cloud Architecture"],
            achievements: ["Employee of the Year 2021", "Innovation Award"],
            color: "from-emerald-500/20 to-teal-500/20",
            companyLogo: "https://via.placeholder.com/150",
            location: "New York, NY",
            link: "#",
            highlights: [
                "Architected cloud-native solutions",
                "Reduced system latency by 40%",
                "Mentored junior developers"
            ],
            growth: "Technical Leadership",
            impact: "Medium",
            skills: ["Full Stack", "Cloud", "Architecture"]
        },
        {
            title: "Research Associate",
            company: "University Research Center",
            period: "2018 - 2020",
            description: "Conducted research in data science and published findings in international journals.",
            icon: <FaChartLine />,
            tags: ["Data Science", "Research", "Publications"],
            achievements: ["Research Excellence Award", "3 Publications"],
            color: "from-amber-500/20 to-orange-500/20",
            companyLogo: "https://via.placeholder.com/150",
            location: "Boston, MA",
            link: "#",
            highlights: [
                "Developed novel ML algorithms",
                "Collaborated with international teams",
                "Presented at major conferences"
            ],
            growth: "Research Excellence",
            impact: "Medium",
            skills: ["Data Science", "ML", "Research"]
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
                {/* Enhanced Section Header */}
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
                                Career Journey
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
                            Exploring the path of growth, innovation, and leadership through professional milestones
                        </p>
                    </motion.div>
                </motion.div>

                {/* Experience Cards with Centered Timeline */}
                <div className="max-w-7xl mx-auto relative">
                    {/* Centered Timeline Line */}
                    <animated.div
                        style={timelineSpring}
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 to-gray-900"
                    />

                    {experiences.map((exp, index) => {
                        const [ref, inView] = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={exp.title}
                                ref={ref}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`mb-12 relative ${isEven ? 'pr-[50%]' : 'pl-[50%]'}`}
                            >
                                {/* Timeline Dot with Shadow Effect */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0, boxShadow: '0 0 0 rgba(255,255,255,0)' }}
                                    animate={inView ? {
                                        scale: 1,
                                        opacity: 1,
                                        boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                                    } : {
                                        scale: 0,
                                        opacity: 0,
                                        boxShadow: '0 0 0 rgba(255,255,255,0)'
                                    }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                    className={`absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 border-2 border-gray-800 z-10 transition-all duration-300`}
                                />

                                <motion.div
                                    className={`bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden ${isEven ? 'mr-6' : 'ml-6'}`}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-4">
                                            {/* Left Column */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <motion.div
                                                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} backdrop-blur-sm flex items-center justify-center text-xl text-white border border-gray-700`}
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    >
                                                        {exp.icon}
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-0.5">
                                                            <span>{exp.company}</span>
                                                            <span>•</span>
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 text-sm mb-4">{exp.description}</p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {exp.skills.map((skill) => (
                                                        <motion.span
                                                            key={skill}
                                                            className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                                                            whileHover={{
                                                                scale: 1.05,
                                                                backgroundColor: "rgba(255,255,255,0.1)"
                                                            }}
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div className="flex flex-col items-end gap-3">
                                                <motion.span
                                                    className="px-3 py-1 rounded-full bg-gray-800/50 text-xs text-gray-400 border border-gray-700"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {exp.period}
                                                </motion.span>

                                                <motion.div
                                                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-800/50 text-xs text-gray-300 border border-gray-700"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <FaRocket className="text-yellow-500" />
                                                    <span>{exp.growth}</span>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="border-t border-gray-800 pt-4">
                                            <motion.a
                                                href={exp.link}
                                                className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <span>View Company Profile</span>
                                                <FaExternalLinkAlt />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Experience;
