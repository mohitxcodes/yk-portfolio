import { motion } from 'framer-motion';
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaFileExcel, FaFileArchive, FaFileAlt, FaDownload, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import useFetchStudyMaterial from '../../hooks/useFetchStudy';
import StudentSkeletonGrid from './StudentSkeleton';

function StudentPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const { materials, loading } = useFetchStudyMaterial();

    const getFileIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'pdf':
                return <FaFilePdf className="text-red-500" />;
            case 'ppt':
            case 'pptx':
                return <FaFilePowerpoint className="text-orange-500" />;
            case 'doc':
            case 'docx':
                return <FaFileWord className="text-blue-500" />;
            case 'xls':
            case 'xlsx':
                return <FaFileExcel className="text-green-500" />;
            case 'zip':
            case 'rar':
                return <FaFileArchive className="text-purple-500" />;
            default:
                return <FaFileAlt className="text-gray-400" />;
        }
    };

    const filteredMaterials = materials.filter(material =>
        material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header with Search */}
                    <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Study Materials
                            </h1>
                            <p className="mt-2 sm:mt-4 text-gray-400 max-w-2xl text-sm sm:text-base">
                                Access comprehensive study materials, lecture notes, and presentations from various workshops and courses.
                            </p>
                        </div>
                        <div className="relative w-full sm:w-80">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400 text-sm sm:text-base" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search materials..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                disabled={loading}
                                className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800 focus:border-gray-600 focus:ring-2 focus:ring-gray-600/20 transition-all placeholder:text-gray-500 text-sm sm:text-base"
                            />
                        </div>
                    </div>

                    {/* Loading State */}
                    {loading && <StudentSkeletonGrid />}

                    {/* Materials Grid */}
                    {!loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            {filteredMaterials.map((material, index) => (
                                <motion.div
                                    key={material.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-600 transition-all"
                                >
                                    <div className="p-3">
                                        {/* Header Row */}
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-md bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-colors">
                                                    {getFileIcon(material.type)}
                                                </div>
                                                <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-gray-800/50 border border-gray-700 text-gray-300">
                                                    {material.type.toUpperCase()}
                                                </span>
                                            </div>
                                            <motion.a
                                                href={material.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-800/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-800/70 transition-all text-xs font-medium"
                                                title="Download"
                                            >
                                                <FaDownload className="text-gray-400 text-xs" />
                                                <span className="text-gray-300">Download</span>
                                            </motion.a>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-sm font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2 leading-tight">
                                            {material.name}
                                        </h3>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <span>Study Material</span>
                                            <span>{material.uploadedAt}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {!loading && filteredMaterials.length === 0 && (
                        <div className="text-center py-8 sm:py-12">
                            <div className="text-gray-400 mb-2 text-sm sm:text-base">
                                {materials.length === 0 ? 'No study materials available' : 'No materials found'}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-500">
                                {materials.length === 0 ? 'Check back later for new materials' : 'Try adjusting your search criteria'}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentPage;
