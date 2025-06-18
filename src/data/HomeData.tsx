import { FaCode, FaBrain, FaChartLine, FaRocket, FaLightbulb, FaGlobe, FaUsers, FaGithub, FaLinkedin, FaTwitter, FaBook, FaUser, } from 'react-icons/fa';
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
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },

];

export const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Research Papers", value: "15+" },
    { label: "Projects Completed", value: "30+" }
];

export const highlights: IHighlights[] = [
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