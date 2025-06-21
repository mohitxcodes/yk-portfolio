import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import useBlogs from "../../hooks/useFetchBlogs"
import BlogSkeletonGrid from './BlogSkeleton';
import BlogModal from './BlogModal';

function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { blogs, loading } = useBlogs();
    console.log(blogs)

    // Filter blogs based on search query
    const filteredBlogs = blogs.filter(blog => {
        return blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleReadMore = (blog: any) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBlog(null);
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                            Blogs
                        </h1>
                        {/* Search Bar */}
                        <div className="relative w-full sm:w-80 md:w-96">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 pl-8 sm:pl-10 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all text-sm sm:text-base"
                                disabled={loading}
                            />
                            <FaSearch className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && <BlogSkeletonGrid />}

                    {/* Blog Grid */}
                    {!loading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {filteredBlogs.map((blog, index) => (
                                <motion.article
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all"
                                >
                                    {/* Blog Image */}
                                    <div className="relative h-40 sm:h-48 overflow-hidden">
                                        <img
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                                        {/* Date */}
                                        <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-400">
                                            <FaCalendarAlt />
                                            <span>{blog.createdAt}</span>
                                        </div>

                                        {/* Title and Subtitle */}
                                        <div className="space-y-2">
                                            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-white truncate transition-colors line-clamp-2">
                                                {blog.title}
                                            </h3>
                                            <p className="text-gray-400 text-xs sm:text-sm line-clamp-1 leading-relaxed">
                                                {blog.subtitle}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1 sm:gap-2">
                                            {blog.hashtags.slice(0, 3).map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {blog.hashtags.length > 3 && (
                                                <span className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-400 border border-gray-700">
                                                    +{blog.hashtags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Read More Link */}
                                        <motion.button
                                            onClick={() => handleReadMore(blog)}
                                            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            Read More
                                            <FaArrowRight className="text-xs" />
                                        </motion.button>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* No Results Message */}
                    {!loading && filteredBlogs.length === 0 && (
                        <div className="text-center py-8 sm:py-12">
                            <p className="text-gray-400 text-sm sm:text-base">No articles found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Blog Modal */}
            <BlogModal
                blog={selectedBlog}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}

export default BlogPage;
