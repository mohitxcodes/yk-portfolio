import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash.shuffle';

interface HighlightItem {
    title: string;
    description: string;
    color: string;
    height: number;
    image: string;
    x?: number;
    y?: number;
    width?: number;
}

function HighlightsSection() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Hook1: Tie media queries to the number of columns
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure();

    const highlights: HighlightItem[] = [
        {
            title: "Research Excellence",
            description: "Published 5 papers in top-tier conferences",
            color: "from-purple-500 to-blue-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Technical Innovation",
            description: "Developed novel ML algorithms",
            color: "from-emerald-500 to-teal-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Leadership",
            description: "Led teams of 10+ researchers",
            color: "from-amber-500 to-orange-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Academic Impact",
            description: "Teaching and mentoring 1000+ students",
            color: "from-red-500 to-pink-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Creative Expression",
            description: "Photography and visual storytelling",
            color: "from-indigo-500 to-purple-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Industry Recognition",
            description: "Multiple awards and accolades",
            color: "from-yellow-500 to-orange-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "AI Research",
            description: "Pioneering AI solutions for real-world problems",
            color: "from-blue-500 to-indigo-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Open Source",
            description: "Contributing to the developer community",
            color: "from-green-500 to-emerald-500",
            height: 600,
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
        }
    ];

    // Hook3: Hold items
    const [items, set] = useState<HighlightItem[]>(highlights);

    // Hook4: shuffle data every 3 seconds (faster)
    useEffect(() => {
        const t = setInterval(() => set(shuffle), 3000);
        return () => clearInterval(t);
    }, []);

    // Hook5: Form a grid of stacked items
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0);
        let gridItems = items.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights));
            const x = (width / columns) * column;
            const y = (heights[column] += child.height / 2) - child.height / 2;
            return { ...child, x, y, width: width / columns, height: child.height / 2 };
        });
        return [heights, gridItems];
    }, [columns, items, width]);

    // Hook6: Turn the static grid values into animated transitions
    const transitions = useTransition(gridItems, {
        key: (item: HighlightItem) => item.title,
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
                {/* Enhanced Section Header */}
                <motion.div
                    style={{ scale, opacity }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="relative inline-block">
                            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                                Life Recently
                            </h2>
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gray-500/50 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            />
                        </div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Capturing moments of research, innovation, and personal growth through the lens of experience
                        </p>
                    </motion.div>
                </motion.div>

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
                                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-3xl font-semibold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-300 text-lg">
                                                    {item.description}
                                                </p>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="mt-4 px-6 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-sm text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                                                >
                                                    Learn More
                                                </motion.button>
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