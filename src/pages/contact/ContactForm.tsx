import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

interface ContactFormProps {
    onSuccess?: () => void;
}

const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
};

function ContactForm({ onSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                createdAt: Timestamp.now(),
            });
            setFormData(initialFormData);
            if (onSuccess) onSuccess();
        } catch (err: any) {
            setError('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 rounded-xl border border-gray-800 p-4 sm:p-6"
        >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gray-800/50 border border-gray-700">
                    <FaPaperPlane className="text-gray-400 text-base sm:text-lg" />
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-medium">Send Message</h3>
                    <p className="text-xs text-gray-400">I'll get back to you as soon as possible</p>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="group">
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                placeholder="Yashwant Kumar"
                                required
                            />
                        </div>
                    </div>
                    <div className="group">
                        <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                                placeholder="yashwant@example.com"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="group">
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Subject</label>
                    <div className="relative">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500"
                            placeholder="What's this about?"
                            required
                        />
                    </div>
                </div>
                <div className="group">
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 group-focus-within:text-white transition-colors">Message</label>
                    <div className="relative">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-gray-900/40 border border-gray-700 focus:border-white focus:ring-1 focus:ring-white/20 transition-all placeholder:text-gray-500 resize-none min-h-[100px] sm:min-h-[120px]"
                            placeholder="Your message here..."
                            required
                        />
                    </div>
                </div>
                {error && (
                    <div className="text-xs text-red-400 py-1">{error}</div>
                )}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 text-xs sm:text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                    {isSubmitting ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                    ) : (
                        <>
                            <FaPaperPlane className="text-xs relative z-10" />
                            <span className="relative z-10">Send Message</span>
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
}

export default ContactForm; 