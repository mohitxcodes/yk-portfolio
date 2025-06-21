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
        title: "Senior Research Scientist",
        company: "Tech Innovations Lab",
        period: "2022 - Present",
        description: "Leading research in AI and machine learning applications. Published 5 papers in top-tier conferences.",
        icon: <FaBrain />,
        tags: ["AI Research", "Machine Learning", "Team Leadership"],
        achievements: ["Best Paper Award 2023", "Research Grant Recipient"],
        color: "from-purple-500/20 to-blue-500/20",
        companyLogo: "https://via.placeholder.com/150",
        location: "San Francisco, CA",
        link: "#",
        highlights: [
            "Led a team of 10 researchers in AI projects",
            "Secured $2M in research funding",
            "Published in top-tier conferences"
        ],
        growth: "Senior Leadership",
        impact: "High",
        skills: ["AI/ML", "Leadership", "Research"]
    },
    {
        title: "Software Engineer",
        company: "Global Tech Solutions",
        period: "2020 - 2022",
        description: "Developed scalable applications using modern technologies. Led a team of 5 developers.",
        icon: <FaCode />,
        tags: ["Full Stack", "Team Lead", "Cloud Architecture"],
        achievements: ["Employee of the Year 2021", "Innovation Award"],
        color: "from-emerald-500/20 to-teal-500/20",
        companyLogo: "https://via.placeholder.com/150",
        location: "New York, NY",
        link: "#",
        highlights: [
            "Architected cloud-native solutions",
            "Reduced system latency by 40%",
            "Mentored junior developers"
        ],
        growth: "Technical Leadership",
        impact: "Medium",
        skills: ["Full Stack", "Cloud", "Architecture"]
    },
    {
        title: "Research Associate",
        company: "University Research Center",
        period: "2018 - 2020",
        description: "Conducted research in data science and published findings in international journals.",
        icon: <FaChartLine />,
        tags: ["Data Science", "Research", "Publications"],
        achievements: ["Research Excellence Award", "3 Publications"],
        color: "from-amber-500/20 to-orange-500/20",
        companyLogo: "https://via.placeholder.com/150",
        location: "Boston, MA",
        link: "#",
        highlights: [
            "Developed novel ML algorithms",
            "Collaborated with international teams",
            "Presented at major conferences"
        ],
        growth: "Research Excellence",
        impact: "Medium",
        skills: ["Data Science", "ML", "Research"]
    }
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