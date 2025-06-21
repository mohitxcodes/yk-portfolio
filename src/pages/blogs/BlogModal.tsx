import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaArrowLeft, FaShare, } from 'react-icons/fa';

interface Blog {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    imageUrl: string;
    createdAt: string;
    hashtags: string[];
    author?: string;
    readTime?: string;
}

interface BlogModalProps {
    blog: Blog | null;
    isOpen: boolean;
    onClose: () => void;
}

function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {

    if (!blog) return null;

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: blog.title,
                text: blog.subtitle,
                url: window.location.href,
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
                    onClick={onClose}
                >
                    {/* Background effects matching BlogPage */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
                    </div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-800">
                            <div className="flex items-center gap-2 sm:gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-1.5 sm:p-2 rounded-lg bg-gray-900/30 border border-gray-800 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.button>
                                <div>
                                    <h2 className="text-base sm:text-lg font-semibold text-white">Blog Article</h2>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleShare}
                                    className="p-1.5 sm:p-2 rounded-lg bg-gray-900/30 border border-gray-800 text-gray-400 hover:text-white transition-colors"
                                    title="Share"
                                >
                                    <FaShare className="w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className="p-1.5 sm:p-2 rounded-lg bg-gray-900/30 border border-gray-800 text-gray-400 hover:text-white transition-colors"
                                >
                                    <FaTimes className="w-3 h-3 sm:w-4 sm:h-4" />
                                </motion.button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-80px)]">
                            {/* Hero Image */}
                            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Article Content */}
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Article Header */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                                        <FaCalendarAlt />
                                        <span>{blog.createdAt}</span>
                                        {blog.author && (
                                            <>
                                                <span>•</span>
                                                <span>By {blog.author}</span>
                                            </>
                                        )}
                                    </div>

                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text leading-tight">
                                        {blog.title}
                                    </h1>

                                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                        {blog.subtitle}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
                                        {blog.hashtags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Article Body */}
                                <div className="prose prose-invert max-w-none">
                                    <div className="text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                                        {/* Split content into paragraphs for better readability */}
                                        {blog.content.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-sm sm:text-base leading-6 sm:leading-7">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Article Footer */}
                                <div className="pt-4 sm:pt-6 border-t border-gray-800">
                                    <div className="flex items-center justify-end">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={onClose}
                                            className="px-3 sm:px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors text-xs sm:text-sm font-medium"
                                        >
                                            Close
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BlogModal; 