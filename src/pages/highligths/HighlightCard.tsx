import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaFlask, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaBook, FaGlobe, FaChartLine } from 'react-icons/fa';
import type { Highlight } from '../../hooks/useFetchHighlights';

interface HighlightCardProps {
    highlight: Highlight;
    index: number;
}

function HighlightCard({ highlight, index }: HighlightCardProps) {
    const getCategoryIcon = (category: string) => {
        const categoryIcons: Record<string, React.JSX.Element> = {
            'research': <FaFlask />,
            'workshops': <FaUsers />,
            'travels': <FaPlane />,
            'events': <FaCalendarAlt />,
            'publications': <FaBook />,
            'awards': <FaChartLine />,
        };
        return categoryIcons[category] || <FaGlobe />;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden"
        >
            {/* Image Container */}
            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <img
                    src={highlight.imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'}
                    alt={highlight.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 p-1.5 sm:p-2 rounded-lg bg-gray-900/50 border border-gray-700">
                    {getCategoryIcon(highlight.category)}
                </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base md:text-lg font-medium line-clamp-1">{highlight.title}</h3>
                    <span className="text-xs sm:text-sm text-gray-400 flex-shrink-0 ml-2">{highlight.year}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-relaxed">{highlight.description}</p>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                    <FaMapMarkerAlt className="flex-shrink-0" />
                    <span className="truncate">{highlight.location}</span>
                </div>
                <div className="flex flex-wrap gap-1 sm:gap-2 pt-1 sm:pt-2">
                    {highlight.hashtags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                    {highlight.hashtags.length > 3 && (
                        <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full bg-gray-800/50 text-gray-400 border border-gray-700">
                            +{highlight.hashtags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default HighlightCard; 