import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap, FaPlane, FaFlask, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaAward, FaBook, FaGlobe, FaChartLine, FaLightbulb, FaCode, FaUniversity } from 'react-icons/fa';
import { useState } from 'react';

function HighLightPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);

    const categories = [
        { id: 'all', label: 'All', icon: <FaGlobe />, count: 6 },
        { id: 'research', label: 'Research', icon: <FaFlask />, count: 2 },
        { id: 'workshops', label: 'Workshops', icon: <FaUsers />, count: 2 },
        { id: 'travels', label: 'Travels', icon: <FaPlane />, count: 1 },
        { id: 'events', label: 'Events', icon: <FaCalendarAlt />, count: 1 }
    ];

    const stats = [
        { label: 'Total Highlights', value: '6', icon: <FaChartLine /> },
        { label: 'Researches', value: '15+', icon: <FaBook /> },
        { label: 'Workshops', value: '20+', icon: <FaUsers /> },
        { label: 'Travels', value: '10+', icon: <FaPlane /> },
        { label: 'Events', value: '25+', icon: <FaCalendarAlt /> }
    ];

    const achievements = [
        { icon: <FaAward />, text: 'Research Excellence Award 2023' },
        { icon: <FaLightbulb />, text: 'Innovation Grant Recipient' },
        { icon: <FaUniversity />, text: 'Guest Speaker at MIT' }
    ];

    const highlights = [
        {
            id: 1,
            category: 'research',
            title: 'AI Research at Stanford',
            description: 'Leading research in machine learning and artificial intelligence',
            date: '2023',
            location: 'Stanford University',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
            icon: <FaFlask />,
            tags: ['AI', 'ML', 'Research']
        },
        {
            id: 2,
            category: 'workshops',
            title: 'Cloud Computing Workshop',
            description: 'Conducted workshop on cloud architecture and best practices',
            date: '2023',
            location: 'Tech Conference 2023',
            image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000',
            icon: <FaUsers />,
            tags: ['Cloud', 'Workshop', 'Architecture']
        },
        {
            id: 3,
            category: 'travels',
            title: 'Tech Tour in Europe',
            description: 'Visited leading tech companies and research centers',
            date: '2023',
            location: 'Europe',
            image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000',
            icon: <FaPlane />,
            tags: ['Travel', 'Tech', 'Networking']
        },
        {
            id: 4,
            category: 'events',
            title: 'Tech Summit 2023',
            description: 'Keynote speaker at annual technology summit',
            date: '2023',
            location: 'San Francisco',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000',
            icon: <FaCalendarAlt />,
            tags: ['Conference', 'Speaking', 'Networking']
        },
        {
            id: 5,
            category: 'research',
            title: 'Quantum Computing Research',
            description: 'Pioneering work in quantum algorithms and applications',
            date: '2023',
            location: 'MIT Research Lab',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000',
            icon: <FaFlask />,
            tags: ['Quantum', 'Research', 'Innovation']
        },
        {
            id: 6,
            category: 'workshops',
            title: 'Data Science Bootcamp',
            description: 'Teaching advanced data science techniques to professionals',
            date: '2023',
            location: 'Online Workshop',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
            icon: <FaUsers />,
            tags: ['Data Science', 'Teaching', 'Workshop']
        }
    ];

    const filteredHighlights = activeCategory === 'all'
        ? highlights
        : highlights.filter(item => item.category === activeCategory);

    return (
        <div className="h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
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

            <div className="container mx-auto px-4 relative z-10 h-full pt-20">
                <div className="h-[calc(100vh-5rem)] flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Enhanced Header and Tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/4 flex-shrink-0"
                    >
                        <div className="space-y-6">
                            {/* Header Section */}
                            <div className="space-y-4">
                                <div className="relative inline-block">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                        Highlights
                                    </h2>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        viewport={{ once: false }}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    A collection of my journey through research, workshops, travels, and events.
                                </p>
                            </div>



                            {/* Categories as Enhanced Tabs */}
                            <div className="space-y-1 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 p-2">
                                {categories.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        onHoverStart={() => setHoveredTab(category.id)}
                                        onHoverEnd={() => setHoveredTab(null)}
                                        className={`w-full flex items-center justify-between px-3 py-2 text-left transition-all relative group rounded-lg ${activeCategory === category.id
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">{category.icon}</span>
                                            <span className="text-sm">{category.label}</span>
                                        </div>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-400">
                                            {category.count}
                                        </span>
                                        {activeCategory === category.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-white/5 rounded-lg"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                        {hoveredTab === category.id && !activeCategory && (
                                            <motion.div
                                                layoutId="hoverTab"
                                                className="absolute inset-0 bg-white/5 rounded-lg"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            />
                                        )}
                                    </motion.button>
                                ))}
                            </div>


                            {/* Stats Section - More Compact */}
                            <div className="space-y-2">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between py-2 border-b border-gray-800/50"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400">{stat.icon}</span>
                                            <span className="text-sm text-gray-400">{stat.label}</span>
                                        </div>
                                        <span className="text-sm font-medium bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                            {stat.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                    {/* Right Column - Scrollable Gallery Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-3/4 flex-grow"
                    >
                        <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                                {filteredHighlights.map((highlight, index) => (
                                    <motion.div
                                        key={highlight.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-48 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                                            <img
                                                src={highlight.image}
                                                alt={highlight.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4 p-2 rounded-lg bg-gray-900/50 border border-gray-700">
                                                {highlight.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-medium">{highlight.title}</h3>
                                                <span className="text-sm text-gray-400">{highlight.date}</span>
                                            </div>
                                            <p className="text-sm text-gray-400">{highlight.description}</p>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <FaMapMarkerAlt />
                                                <span>{highlight.location}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {highlight.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
}

export default HighLightPage;
