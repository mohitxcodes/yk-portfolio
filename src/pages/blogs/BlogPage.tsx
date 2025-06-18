import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

// Mock data - Replace with your actual blog data
const blogs = [
    {
        id: 1,
        title: "Understanding Cloud Architecture",
        subTitle: "A deep dive into modern cloud architecture patterns and best practices for scalable applications.",
        date: "March 15, 2024",
        tags: ["Cloud", "Architecture", "AWS"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "The Future of AI in Healthcare",
        subTitle: "Exploring how artificial intelligence is transforming healthcare delivery and patient care.",
        date: "March 10, 2024",
        tags: ["AI", "Healthcare", "Technology"],
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Building Scalable Microservices",
        subTitle: "Best practices and patterns for designing and implementing scalable microservices architecture.",
        date: "March 5, 2024",
        tags: ["Microservices", "Architecture", "Scalability"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Machine Learning Fundamentals",
        subTitle: "A comprehensive guide to understanding the basics of machine learning and its applications.",
        date: "February 28, 2024",
        tags: ["ML", "AI", "Data Science"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "DevOps Best Practices",
        subTitle: "Essential DevOps practices for modern software development and deployment.",
        date: "February 20, 2024",
        tags: ["DevOps", "CI/CD", "Automation"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Web Development Trends 2024",
        subTitle: "Exploring the latest trends and technologies shaping web development in 2024.",
        date: "February 15, 2024",
        tags: ["Web Dev", "Trends", "Technology"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    }
];

function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter blogs based on search query
    const filteredBlogs = blogs.filter(blog => {
        return blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.subTitle.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-6 md:mb-0">
                            Blogs
                        </h1>
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-900/30 border border-gray-800 focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition-all"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                {/* Blog Content */}
                                <div className="p-6 space-y-4">
                                    {/* Date */}
                                    <div className="flex items-center gap-1 text-sm text-gray-400">
                                        <FaCalendarAlt />
                                        <span>{blog.date}</span>
                                    </div>

                                    {/* Title and Subtitle */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">
                                            {blog.subTitle}
                                        </p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <motion.a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        Read More
                                        <FaArrowRight className="text-xs" />
                                    </motion.a>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No articles found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
