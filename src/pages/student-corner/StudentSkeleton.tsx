import { motion } from 'framer-motion';

function StudentSkeleton() {
    return (
        <div className="group bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800">
            <div className="p-3">
                {/* Header Row Skeleton */}
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        {/* Icon Skeleton */}
                        <motion.div
                            className="w-8 h-8 bg-gray-800/50 border border-gray-700 rounded-md"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Type Badge Skeleton */}
                        <motion.div
                            className="w-12 h-5 bg-gray-800/50 border border-gray-700 rounded"
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
                    {/* Download Button Skeleton */}
                    <motion.div
                        className="w-16 h-6 bg-gray-800/50 border border-gray-700 rounded-md"
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

                {/* Title Skeleton */}
                <motion.div
                    className="h-4 bg-gray-700/50 rounded w-full mb-2"
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
                    className="h-4 bg-gray-700/50 rounded w-3/4 mb-2"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Footer Skeleton */}
                <div className="flex items-center justify-between">
                    <motion.div
                        className="h-3 bg-gray-700/50 rounded w-20"
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
                        className="h-3 bg-gray-700/50 rounded w-24"
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

function StudentSkeletonGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <StudentSkeleton />
                </motion.div>
            ))}
        </div>
    );
}

export default StudentSkeletonGrid; 