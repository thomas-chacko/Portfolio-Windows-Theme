import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

// Project data organized by category
export const frontendProjects = [
  {
    id: 1,
    title: "Portfolio Windows Theme",
    description: "A comprehensive personal portfolio website with Windows OS theme, showcasing projects, skills, and professional journey with modern design and smooth animations.",
    liveUrl: "https://thomaschackodev.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Portfolio-Windows-Theme",
    image: project1,
    tags: ["React", "Vite", "Tailwind CSS", "Portfolio"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Spylt Web - GSAP Parallax",
    description: "A modern web application featuring innovative design patterns with GSAP animations, smooth parallax effects and cutting-edge functionality.",
    liveUrl: "https://spylt-web.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/GSAP_Parallax_Website",
    image: project2,
    tags: ["React", "Vite", "Tailwind CSS", "GSAP"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "YouTube Clone",
    description: "A fully functional YouTube clone application featuring video browsing, search functionality with RapidAPI integration, and responsive video player.",
    liveUrl: "https://youtube-appclone.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/YouTube-Clone",
    image: project3,
    tags: ["React", "Vite", "Tailwind CSS", "RapidAPI"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    title: "Royal Holiday",
    description: "An elegant travel and holiday booking platform with stunning visuals, AOS animations, interactive features and seamless user experience.",
    liveUrl: "https://royalholiday.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Travel-Website",
    image: project4,
    tags: ["HTML", "CSS", "JavaScript", "AOS", "Bootstrap"],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Starbucks Clone",
    description: "A pixel-perfect recreation of the Starbucks website featuring responsive design, smooth animations, and modern web development practices.",
    liveUrl: "https://star-bucks-websiteclone.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Starbucks-clone",
    image: project5,
    tags: ["React", "Tailwind CSS", "Clone"],
    color: "from-green-600 to-teal-600"
  },
  {
    id: 6,
    title: "Weathery Web",
    description: "A beautiful weather application providing real-time weather data using OpenWeatherMap API, forecasts, and interactive weather maps with clean design.",
    liveUrl: "https://weathery-web.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Weather-App",
    image: project6,
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap", "Bootstrap"],
    color: "from-sky-500 to-blue-500"
  }
];

export const fullstackProjects = [
  {
    id: 7,
    title: "E-Commerce Platform (Coming Soon)",
    description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
    liveUrl: "https://thomaschackodev.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Portfolio-Windows-Theme",
    image: project1,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 8,
    title: "Social Media Dashboard (Coming Soon)",
    description: "A comprehensive social media dashboard with real-time updates, user interactions, and analytics built with MERN stack.",
    liveUrl: "https://thomaschackodev.netlify.app/",
    githubUrl: "https://github.com/thomas-chacko/Portfolio-Windows-Theme",
    image: project2,
    tags: ["React", "Node.js", "MySQL", "Socket.io"],
    color: "from-pink-500 to-rose-500"
  }
];

// Combined projects array for backward compatibility
export const projects = [...frontendProjects, ...fullstackProjects];
