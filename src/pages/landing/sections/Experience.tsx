import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCode, FaRocket, FaBrain, FaChartLine, FaAward, FaLightbulb, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt, FaArrowUp, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useSpring, animated, useTrail } from '@react-spring/web';

function Experience() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Timeline animation spring
    const [timelineSpring, api] = useSpring(() => ({
        from: { scaleY: 0, opacity: 0 },
        to: { scaleY: 1, opacity: 1 },
        config: { tension: 280, friction: 20 }
    }));

    // Timeline dots animation
    const dotsTrail = useTrail(3, {
        from: { scale: 0, opacity: 0 },
        to: { scale: 1, opacity: 1 },
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
                {/* Section Header */}
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Career Journey
                    </motion.h2>
                </motion.div>

                {/* Experience Cards with Timeline */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Animated Timeline Line */}
                    <animated.div
                        style={timelineSpring}
                        className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 to-gray-900"
                    />

                    {experiences.map((exp, index) => {
                        const [ref, inView] = useInView({
                            triggerOnce: true,
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                key={exp.title}
                                ref={ref}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="mb-8 relative pl-16"
                            >
                                {/* Timeline Dot */}
                                <animated.div
                                    style={dotsTrail[index]}
                                    className="absolute left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 border-2 border-gray-800 z-10"
                                />

                                <motion.div
                                    className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden"
                                    whileHover={{
                                        scale: 1.01,
                                        boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-6">
                                            {/* Left Column */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <motion.div
                                                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} backdrop-blur-sm flex items-center justify-center text-xl text-white border border-gray-700`}
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    >
                                                        {exp.icon}
                                                    </motion.div>
                                                    <div>
                                                        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-sm text-gray-400">
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
                                            <div className="flex flex-col items-end gap-4">
                                                <motion.span
                                                    className="px-3 py-1 rounded-full bg-gray-800/50 text-xs text-gray-400 border border-gray-700"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {exp.period}
                                                </motion.span>

                                                <div className="flex items-center gap-2">
                                                    <FaStar className="text-yellow-500" />
                                                    <span className="text-xs text-gray-400">{exp.impact} Impact</span>
                                                </div>

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
                                        <div className="mt-6 pt-6 border-t border-gray-800">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    {exp.highlights.map((highlight, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="flex items-center gap-2 text-xs text-gray-300"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                                                            <span>{highlight}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                <div className="space-y-2">
                                                    {exp.achievements.map((achievement) => (
                                                        <motion.div
                                                            key={achievement}
                                                            className="flex items-center gap-2 text-xs text-gray-300"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            <FaAward className="text-yellow-500 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <motion.a
                                                href={exp.link}
                                                className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300"
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
