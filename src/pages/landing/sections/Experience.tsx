import { motion, } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaExternalLinkAlt, FaCode, FaPython, FaDatabase, FaBrain, FaGraduationCap } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from 'react-icons/si';
import { useSpring, animated, } from '@react-spring/web';
import SectionHeader from '../../../components/common/SectionHeader';
import { experiences } from '../../../data/HomeData'

function Experience() {
    // Timeline animation spring with enhanced config
    const [timelineSpring] = useSpring(() => ({
        from: { scaleY: 0, opacity: 0 },
        to: { scaleY: 1, opacity: 1 },
        config: { tension: 280, friction: 20 }
    }));

    // Function to get icon for skill
    const getSkillIcon = (skill: string) => {
        const skillIcons: Record<string, React.ReactElement> = {
            'C': <FaCode className="text-gray-300" />,
            'C++': <SiCplusplus className="text-gray-300" />,
            'Python': <FaPython className="text-gray-300" />,
            'JavaScript': <SiJavascript className="text-gray-300" />,
            'React': <SiReact className="text-gray-300" />,
            'Node.js': <SiNodedotjs className="text-gray-300" />,
            'MongoDB': <SiMongodb className="text-gray-300" />,
            'PostgreSQL': <SiPostgresql className="text-gray-300" />,
            'Data Structures': <FaDatabase className="text-gray-300" />,
            'Machine Learning': <FaBrain className="text-gray-300" />,
            'Teaching': <FaGraduationCap className="text-gray-300" />,
        };
        return skillIcons[skill] || <FaCode className="text-gray-400" />;
    };

    return (
        <section className="min-h-screen bg-black text-white py-12 sm:py-16 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Career Journey"
                    description="Exploring the path of growth, innovation, and leadership through professional milestones"
                />

                {/* Experience Cards with Left Timeline */}
                <div className="max-w-6xl mx-auto relative">
                    {/* Left Timeline Line */}
                    <animated.div
                        style={timelineSpring}
                        className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-700 to-gray-900"
                    />

                    {experiences.map((exp, index) => {
                        const [ref, inView] = useInView({
                            triggerOnce: false,
                            threshold: 0.1,
                        });

                        return (
                            <motion.div
                                key={exp.title}
                                ref={ref}
                                initial={{ opacity: 0, x: 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="mb-6 sm:mb-8 relative pl-12 sm:pl-20"
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
                                    className="absolute left-4 sm:left-8 top-4 -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 border-2 border-gray-800 z-10 transition-all duration-300"
                                />

                                <motion.div
                                    className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                                    }}
                                >
                                    <div className="p-3 sm:p-4 lg:p-5">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            {/* Left Column */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                                    <motion.img
                                                        src={exp.companyLogo}
                                                        alt={`${exp.company} logo`}
                                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-gradient-to-br from-gray-800 to-gray-700 backdrop-blur-sm object-cover border border-gray-700 flex-shrink-0"
                                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                                    />
                                                    <div className="min-w-0 flex-1">
                                                        <h3 className="text-base sm:text-lg font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text truncate">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400 mt-0.5">
                                                            <span className="truncate">{exp.company}</span>
                                                            <span className="hidden sm:inline">•</span>
                                                            <span className="truncate">{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                                                {/* Skills with Icons */}
                                                <div className="mb-2 sm:mb-3">
                                                    <h4 className="text-xs font-medium text-gray-400 mb-2">Technologies & Skills</h4>
                                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                                        {exp.skills.map((skill) => (
                                                            <motion.div
                                                                key={skill}
                                                                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                                                                whileHover={{
                                                                    scale: 1.05,
                                                                    backgroundColor: "rgba(255,255,255,0.05)"
                                                                }}
                                                            >
                                                                <span className="text-sm group-hover:scale-110 transition-transform duration-300">
                                                                    {getSkillIcon(skill)}
                                                                </span>
                                                                <span className="text-xs text-gray-300 font-medium">{skill}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column */}
                                            <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
                                                <motion.span
                                                    className="px-2 py-1 rounded-full bg-gray-800/50 text-xs text-gray-400 border border-gray-700 whitespace-nowrap"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {exp.period}
                                                </motion.span>

                                                <motion.div
                                                    className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-800/50 text-xs text-gray-300 border border-gray-700 whitespace-nowrap"
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <FaRocket className="text-yellow-500 text-xs" />
                                                    <span className="hidden sm:inline">{exp.growth}</span>
                                                    <span className="sm:hidden">Leadership</span>
                                                </motion.div>
                                            </div>
                                        </div>

                                        {/* Bottom Section */}
                                        <div className="border-t border-gray-800 pt-2 sm:pt-3">
                                            <motion.a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-white transition-colors duration-300"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <span>View Company Profile</span>
                                                <FaExternalLinkAlt className="text-xs" />
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
