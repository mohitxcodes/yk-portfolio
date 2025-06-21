import { motion } from 'framer-motion';

function BlogSkeleton() {
    return (
        <div className="group bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
            {/* Image Skeleton */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
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
            </div>

            {/* Content Skeleton */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {/* Date Skeleton */}
                <div className="flex items-center gap-2">
                    <motion.div
                        className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-700/50 rounded"
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

                {/* Title and Subtitle Skeleton */}
                <div className="space-y-2">
                    <motion.div
                        className="h-5 sm:h-6 bg-gray-700/50 rounded w-3/4"
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
                    <motion.div
                        className="h-3 sm:h-4 bg-gray-700/50 rounded w-2/3"
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
                <div className="flex flex-wrap gap-1 sm:gap-2">
                    <motion.div
                        className="w-12 h-5 sm:w-16 sm:h-6 bg-gray-800/50 rounded-full border border-gray-700"
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
                        className="w-16 h-5 sm:w-20 sm:h-6 bg-gray-800/50 rounded-full border border-gray-700"
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
                        className="w-14 h-5 sm:w-14 sm:h-6 bg-gray-800/50 rounded-full border border-gray-700"
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

                {/* Read More Link Skeleton */}
                <motion.div
                    className="flex items-center gap-2 w-20 sm:w-24"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div className="h-3 sm:h-4 bg-gray-700/50 rounded w-12 sm:w-16" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-700/50 rounded" />
                </motion.div>
            </div>
        </div>
    );
}

function BlogSkeletonGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <BlogSkeleton />
                </motion.div>
            ))}
        </div>
    );
}

export default BlogSkeletonGrid; 