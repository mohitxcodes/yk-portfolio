import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaFlask, FaCalendarAlt, FaUsers, FaBook, FaGlobe, FaChartLine, } from 'react-icons/fa';
import useHighlights from '../../hooks/useFetchHighlights';
import HighlightsSkeletonGrid from './HighlightsSkeleton';
import HighlightCard from './HighlightCard';

function HighLightPage() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const { highlights, loading } = useHighlights();

    // Get unique categories from the data
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(highlights.map(h => h.category))];
        const categoryCounts = uniqueCategories.reduce((acc, category) => {
            acc[category] = highlights.filter(h => h.category === category).length;
            return acc;
        }, {} as Record<string, number>);

        const categoryIcons: Record<string, React.JSX.Element> = {
            'research': <FaFlask />,
            'workshops': <FaUsers />,
            'travels': <FaPlane />,
            'events': <FaCalendarAlt />,
            'publications': <FaBook />,
            'awards': <FaChartLine />,
        };

        return [
            { id: 'all', label: 'All', icon: <FaGlobe />, count: highlights.length },
            ...uniqueCategories.map(category => ({
                id: category,
                label: category.charAt(0).toUpperCase() + category.slice(1),
                icon: categoryIcons[category] || <FaGlobe />,
                count: categoryCounts[category] || 0
            }))
        ];
    }, [highlights]);

    const filteredHighlights = activeCategory === 'all'
        ? highlights
        : highlights.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[50px] sm:blur-[70px] md:blur-[100px]"
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
                    className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-r from-gray-500/10 to-gray-700/10 blur-[50px] sm:blur-[70px] md:blur-[100px]"
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24">
                <div className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                    {/* Left Column - Enhanced Header and Tabs */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/4 flex-shrink-0"
                    >
                        <div className="space-y-4 sm:space-y-6">
                            {/* Header Section */}
                            <div className="space-y-3 sm:space-y-4">
                                <div className="relative inline-block">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
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
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
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
                                        className={`w-full flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 text-left transition-all relative group rounded-lg ${activeCategory === category.id
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            <span className="text-xs sm:text-sm">{category.icon}</span>
                                            <span className="text-xs sm:text-sm">{category.label}</span>
                                        </div>
                                        <span className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full bg-gray-800/50 text-gray-400">
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
                                        {hoveredTab === category.id && activeCategory !== category.id && (
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

                            {/* Recent Activity Section */}
                            <div className="space-y-2 sm:space-y-3">
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-300">Recent Activity</h4>
                                <div className="space-y-1.5 sm:space-y-2">
                                    {highlights.slice(0, 3).map((highlight, index) => (
                                        <motion.div
                                            key={highlight.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-1.5 sm:p-2 rounded-lg bg-gray-900/20 border border-gray-800/50 hover:border-gray-700 transition-all group cursor-pointer"
                                            onClick={() => setActiveCategory(highlight.category)}
                                        >
                                            <div className="flex items-start gap-1.5 sm:gap-2">
                                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gray-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs text-gray-300 group-hover:text-white transition-colors truncate">
                                                        {highlight.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
                                                        {highlight.year} • {highlight.category}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Activity Summary */}
                                <div className="pt-1.5 sm:pt-2 border-t border-gray-800/50">
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Last updated</span>
                                        <span>{highlights.length > 0 ? highlights[0].createdAt : 'Recently'}</span>
                                    </div>
                                </div>
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
                        <div className="h-full overflow-y-auto pr-0 sm:pr-2 lg:pr-4 custom-scrollbar">
                            {/* Loading State */}
                            {loading && <HighlightsSkeletonGrid />}

                            {/* Highlights Grid */}
                            {!loading && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pb-4 sm:pb-6">
                                    {filteredHighlights.map((highlight, index) => (
                                        <HighlightCard
                                            key={highlight.id}
                                            highlight={highlight}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Empty State */}
                            {!loading && filteredHighlights.length === 0 && (
                                <div className="text-center py-8 sm:py-12">
                                    <p className="text-gray-400 text-sm sm:text-base">
                                        {highlights.length === 0 ? 'No highlights available' : 'No highlights found in this category'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
}

export default HighLightPage;
