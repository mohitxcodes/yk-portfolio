import { FaAward, FaBook, FaRocket, FaCalendarAlt, FaEnvelope, FaPython, FaReact, FaCode, FaBrain, FaChartBar, } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export const skills = [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <FaCode /> },
    { name: "TensorFlow", icon: <FaBrain /> },
    { name: "Scikit-learn", icon: <FaChartBar /> },
    { name: "Pandas", icon: <FaChartBar /> },
    { name: "NumPy", icon: <FaChartBar /> },
    { name: "Matplotlib", icon: <FaChartBar /> },
    { name: "Seaborn", icon: <FaChartBar /> },
];

export const achievements = [
    { icon: <FaAward />, text: "Research Excellence Award 2023" },
    { icon: <FaRocket />, text: "Top 10 Innovators in Tech" },
    { icon: <FaBook />, text: "Published 15+ Technical Articles" }
];

export const quickLinks = [
    { icon: <FaCalendarAlt />, text: "Schedule a Meeting", link: "/contact" },
    { icon: <FaEnvelope />, text: "Send an Email", link: "mailto:yashwantkumar9566@gmail.com" },
];