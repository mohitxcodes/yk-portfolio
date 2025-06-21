import { motion } from 'framer-motion';

function HighlightSkeleton() {
    return (
        <div className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            {/* Image Container Skeleton */}
            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <motion.div
                    className="w-full h-full bg-gray-800/30"
                    animate={{
                        background: [
                            "linear-gradient(90deg, #374151 0%, #4B5563 50%, #374151 100%)",
                            "linear-gradient(90deg, #4B5563 0%, #6B7280 50%, #4B5563 100%)",
                            "linear-gradient(90deg, #374151 0%, #4B5563 50%, #374151 100%)",
                        ],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Icon Badge Skeleton */}
                <motion.div
                    className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gray-900/50 border border-gray-700 rounded-lg"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content Skeleton */}
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                {/* Title and Date Row */}
                <div className="flex items-center justify-between">
                    <motion.div
                        className="h-4 sm:h-5 bg-gray-700/50 rounded w-2/3"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="h-3 sm:h-4 bg-gray-700/50 rounded w-12 sm:w-16"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Description Skeleton */}
                <motion.div
                    className="h-3 sm:h-4 bg-gray-700/50 rounded w-full"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Location Skeleton */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <motion.div
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-700/50 rounded"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="h-3 sm:h-4 bg-gray-700/50 rounded w-20 sm:w-24"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-1 sm:gap-2 pt-1 sm:pt-2">
                    <motion.div
                        className="w-10 h-4 sm:w-12 sm:h-5 bg-gray-800/50 border border-gray-700 rounded-full"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="w-14 h-4 sm:w-16 sm:h-5 bg-gray-800/50 border border-gray-700 rounded-full"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="w-12 h-4 sm:w-14 sm:h-5 bg-gray-800/50 border border-gray-700 rounded-full"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

function HighlightsSkeletonGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pb-4 sm:pb-6">
            {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <HighlightSkeleton />
                </motion.div>
            ))}
        </div>
    );
}

export default HighlightsSkeletonGrid; 