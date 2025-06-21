import { FaCode, FaBrain, FaChartLine, FaRocket, FaLightbulb, FaGlobe, FaUsers, FaLinkedin, FaTwitter, FaBook, FaUser, FaInstagram, } from 'react-icons/fa';
import type { IHighlights } from '../interface/IHome'


export const heroHighlights = [
    {
        title: "Research & Innovation",
        description: "Pioneering breakthrough solutions in scientific research",
        icon: <FaRocket />,
        color: "from-purple-500 to-blue-500",
        stats: "15+ Publications",
        achievements: ["Research Excellence Award", "Innovation Grant"]
    },
    {
        title: "Global Impact",
        description: "Connecting cultures and sharing knowledge worldwide",
        icon: <FaGlobe />,
        color: "from-emerald-500 to-teal-500",
        stats: "30+ Countries",
        achievements: ["Cultural Exchange Program", "International Speaker"]
    },
    {
        title: "Education & Mentorship",
        description: "Empowering the next generation of leaders",
        icon: <FaUsers />,
        color: "from-amber-500 to-orange-500",
        stats: "1000+ Students",
        achievements: ["Teaching Excellence", "Mentorship Program"]
    },
    {
        title: "AI Development",
        description: "Building next-generation AI solutions for real-world problems",
        icon: <FaBrain />,
        color: "from-blue-500 to-indigo-500",
        stats: "10+ AI Projects",
        achievements: ["AI Innovation Award", "Tech Leadership"]
    }
];

export const quickLinks = [
    { text: "About Me", icon: <FaUser />, color: "from-red-500 to-pink-500", herf: "/about" },
    { text: "Read Blog", icon: <FaBook />, color: "from-emerald-500 to-teal-500", herf: "/blogs" },
];

export const socialLinks = [
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yashwant-kumar-702ba261/", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://www.x.com/yashwant_kumarr", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/yashwant_kumarr/", label: "Instagram" },

];

export const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Research Papers", value: "15+" },
    { label: "Projects Completed", value: "30+" }
];

export const highlights: IHighlights[] = [
    {
        title: "ReactJs Workshop",
        description: "Wrokshop about the morden framework Reactjs.",
        color: "from-purple-500 to-blue-500",
        height: 600,
        image: "/highlights/highlights1.webp"
    },
    {
        title: "Morden Web Dev",
        description: "This workshop is dedicated to CSS.",
        color: "from-emerald-500 to-teal-500",
        height: 600,
        image: "/highlights/highlights9.webp"
    },
    {

        title: "Happiness",
        description: "The golden era of life.",
        color: "from-amber-500 to-orange-500",
        height: 600,
        image: "/highlights/highlights3.webp"
    },
    {
        title: "Academic Impact",
        description: "Teaching and mentoring students about web dev.",
        color: "from-red-500 to-pink-500",
        height: 600,
        image: "highlights/highlights4.webp"
    },
    {
        title: "Creative Expression",
        description: "Photography and visual storytelling",
        color: "from-indigo-500 to-purple-500",
        height: 600,
        image: "highlights/highlights5.webp"
    },
    {
        title: "The Indian Culture",
        description: "Indian culture is a vibrant blend of traditions, languages, festivals, art, and spirituality.",
        color: "from-yellow-500 to-orange-500",
        height: 600,
        image: "/highlights/highlights6.webp"
    },
    {
        title: "Data Science",
        description: "Session about data science using python.",
        color: "from-blue-500 to-indigo-500",
        height: 600,
        image: "/highlights/highlights7.webp"
    },
    {
        title: "Our Country",
        description: "The beauty of India.",
        color: "from-green-500 to-emerald-500",
        height: 600,
        image: "/highlights/highlights8.webp"
    }
];

export const experiences = [
    {
        title: "Assistant Professor",
        company: "Chandigarh University",
        period: "Dec 2023 - Present",
        description: "I'm an Assistant Professor in Computer Science with a strong focus on teaching programming languages like C, C++, Python.",
        icon: <FaBrain />,
        color: "from-purple-500/20 to-blue-500/20",
        companyLogo: "/exp/cu-logo.jpeg",
        location: "Mohali, Punjab",
        link: "https://www.cuchd.in/",
        skills: ["C", "C++", "Python", "Data Structures", "Machine Learning", "Teaching"],
        growth: "Academic Leadership"
    },
];


export const collaborationAreas = [
    {
        title: "Research",
        description: "AI & ML Research Projects",
        icon: <FaRocket />,
        color: "from-purple-500/20 to-blue-500/20",
        tags: ["AI", "ML", "Data Science"]
    },
    {
        title: "Mentoring",
        description: "Tech Workshops & Talks",
        icon: <FaLightbulb />,
        color: "from-amber-500/20 to-orange-500/20",
        tags: ["Workshops", "Talks", "Mentoring"]
    }
];