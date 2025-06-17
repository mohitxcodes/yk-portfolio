import { motion, } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash.shuffle';
import SectionHeader from '../../../components/common/SectionHeader';
import { highlights } from "../../../data/HomeData"
import type { IHighlights } from '../../../interface/IHome'


function HighlightsSection() {

    // Hook1: Tie media queries to the number of columns
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure();



    // Hook3: Hold items
    const [items, set] = useState<IHighlights[]>(highlights);

    // Hook4: shuffle data every 3 seconds (faster)
    useEffect(() => {
        const t = setInterval(() => set(shuffle), 3000);
        return () => clearInterval(t);
    }, []);

    // Hook5: Form a grid of stacked items
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0);
        let gridItems = items.map((child) => {
            const column = heights.indexOf(Math.min(...heights));
            const x = (width / columns) * column;
            const y = (heights[column] += child.height / 2) - child.height / 2;
            return { ...child, x, y, width: width / columns, height: child.height / 2 };
        });
        return [heights, gridItems];
    }, [columns, items, width]);

    // Hook6: Turn the static grid values into animated transitions
    const transitions = useTransition(gridItems, {
        key: (item: IHighlights) => item.title,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 3, tension: 500, friction: 50 }, // Faster animation
        trail: 15, // Reduced trail for faster transitions
    });

    return (
        <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeader
                    title="Life Recently"
                    description="Capturing moments of research, innovation, and personal growth through the lens of experience"
                />

                {/* Masonry Grid */}
                <div ref={ref} className="relative" style={{ height: Math.max(...heights) }}>
                    {transitions((style, item) => (
                        <a.div
                            style={{
                                ...style,
                                position: 'absolute',
                                padding: '8px',
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden h-full aspect-square group"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                                }}
                            >
                                <div className="relative h-full">
                                    {/* Image */}
                                    <div className="relative h-full overflow-hidden">
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-110"
                                        />
                                        {/* Title Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm mb-4">
                                                    {item.description}
                                                </p>
                                                <motion.a
                                                    href="/highlights"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-sm text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                                                >
                                                    <span>Explore</span>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </a.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Custom hook for media queries
function useMedia(queries: string[], values: number[], defaultValue: number): number {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const mediaQueryLists = queries.map(q => window.matchMedia(q));
        const getValue = () => {
            const index = mediaQueryLists.findIndex(mql => mql.matches);
            return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
        };

        setValue(getValue);
        const handler = () => setValue(getValue);
        mediaQueryLists.forEach(mql => mql.addListener(handler));
        return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, [queries, values, defaultValue]);

    return value;
}

export default HighlightsSection;