import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    description: string;
    className?: string;
}

function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    return (
        <motion.div
            style={{ scale, opacity }}
            className={`text-center mb-16 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
                className="space-y-6 flex flex-col justify-center items-center"
            >
                <div className="relative inline-block">
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                        {title}
                    </h2>
                    <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                    />
                </div>
                <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </motion.div>
    );
}

export default SectionHeader;