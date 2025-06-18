import { motion } from 'framer-motion';
import { FaFilePdf, FaFilePowerpoint, FaDownload, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

// Dummy data - Replace with actual data from backend
const studyMaterials = [
    {
        id: 1,
        title: "Introduction to Machine Learning",
        type: "pdf",
        size: "2.4 MB",
        date: "March 15, 2024",
        url: "#",
        icon: <FaFilePdf className="text-red-500" />
    },
    {
        id: 2,
        title: "Cloud Computing Fundamentals",
        type: "ppt",
        size: "4.1 MB",
        date: "March 10, 2024",
        url: "#",
        icon: <FaFilePowerpoint className="text-orange-500" />
    },
    {
        id: 3,
        title: "Data Structures and Algorithms",
        type: "pdf",
        size: "3.2 MB",
        date: "March 5, 2024",
        url: "#",
        icon: <FaFilePdf className="text-red-500" />
    },
    {
        id: 4,
        title: "Web Development Workshop",
        type: "ppt",
        size: "5.6 MB",
        date: "February 28, 2024",
        url: "#",
        icon: <FaFilePowerpoint className="text-orange-500" />
    },
    {
        id: 5,
        title: "Database Management Systems",
        type: "pdf",
        size: "3.8 MB",
        date: "February 25, 2024",
        url: "#",
        icon: <FaFilePdf className="text-red-500" />
    },
    {
        id: 6,
        title: "System Design Patterns",
        type: "ppt",
        size: "4.5 MB",
        date: "February 20, 2024",
        url: "#",
        icon: <FaFilePowerpoint className="text-orange-500" />
    }
];

function StudentPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredMaterials = studyMaterials.filter(material =>
        material.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header with Search */}
                    <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Study Materials
                            </h1>
                            <p className="mt-4 text-gray-400 max-w-2xl">
                                Access comprehensive study materials, lecture notes, and presentations from various workshops and courses.
                            </p>
                        </div>
                        <div className="relative w-full md:w-80">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search materials..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20 transition-all placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Materials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMaterials.map((material, index) => (
                            <motion.div
                                key={material.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-600 transition-all"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-colors">
                                            {material.icon}
                                        </div>
                                        <motion.a
                                            href={material.url}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-gray-600 transition-colors"
                                        >
                                            <FaDownload className="text-gray-400" />
                                        </motion.a>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                                        {material.title}
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-xs">
                                                {material.type.toUpperCase()}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm text-gray-400">
                                            <span>{material.size}</span>
                                            <span>{material.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredMaterials.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-2">No materials found</div>
                            <p className="text-sm text-gray-500">Try adjusting your search criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentPage;
