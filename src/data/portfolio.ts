import profilePic from "../assets/hero.jpg";

export const personalInfo = {
  name: "Pankaj Gupta",
  title: "Frontend Developer",
  tagline:
    "A passionate frontend developer who crafts scalable and elegant UIs using modern web technologies.",
  description:
    "Fueled by curiosity and creativity, I bring interfaces to life that aren't just functional, but delightful. From single-page apps to full-blown dashboards, I write code with purpose.",
  email: "pankajgupta1063@gmail.com",
  phone: "+91 85912 72429",
  location: "Mumbai, India",
  // profileImage: "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=800"
  profileImage: profilePic,
};

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5", level: 98 },
    { name: "CSS3", level: 92 },
  ],
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Vite", level: 88 },
    { name: "Material UI", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "ShadCN", level: 82 },
    { name: "Aceternity UI", level: 88 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 78 },
    { name: "RESTful APIs", level: 85 },
  ],
  databases: [
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 70 },
    { name: "Mongoose", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "Strapi", level: 70 },
    { name: "WordPress", level: 75 },
    { name: "Postman", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "Jira", level: 75 },
  ],
  other: [
    { name: "JWT Auth", level: 80 },
    { name: "Responsive Design", level: 95 },
    { name: "Problem Solving", level: 90 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Prop Harmony",
    description:
      "Prop Harmony is a role-based real estate dashboard enabling landlords, tenants, and managers to manage properties, payments, and notices via clean, modular UI.",
    image:
      "https://tasunited.com/wp-content/uploads/2024/05/Best-Property-Management-Accounting-Software-for-Landlords.jpg",
    technologies: ["React.js", "Redux", "Tailwind CSS", "ShadCN", "Recharts"],
    liveUrl: "https://prop-harmony-seven.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management Web App",
    description:
      "A task management application with real-time updates, drag-and-drop functionality, team collaboration features, and progress tracking.",
    image:
      "https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Redux", "TailwindCSS", "Recharts", "ShadCN"],
    liveUrl: "https://nipralo-jira-6j9w.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Application",
    description:
      "A beautiful weather app with Search location-based forecasts, with responsive design using OpenWeather API.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "Weather API",
      "React.js",
    ],
    liveUrl: "https://sp-weather.netlify.app/",
    githubUrl: "https://github.com/Pankaj-026/SP-Weather",
    featured: false,
  },
  {
    id: 4,
    title: "DineSPace ",
    description:
      "Analytics dashboard for social media management with data visualization, scheduling tools, engagement metrics, and multi-platform integration.",
    image:
      "https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?semt=ais_hybrid&w=740",
    technologies: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    liveUrl:
      "https://drive.google.com/file/d/1ThsSdFfdae1nAKHJGpTNfbxnDK8e_YkY/view",
    githubUrl: "https://github.com/Pankaj-026/DineSpace",
    featured: true,
  },
  {
    id: 5,
    title: "Fluent Form Management",
    description:
      "A role-based Form Management SaaS to build, manage, and analyze forms on websites with dynamic form builder, secure backend, and real-time analytics.",
    image:
      "https://images.unsplash.com/photo-1625535069654-cfeb8f829088?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmlzdWFsJTIwc3R1ZGlvJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D",
    technologies: [
      "React.js",
      "Redux",
      "MaterialUI",
      "Tailwind CSS",
      "Recharts",
      "Zod",
    ],
    liveUrl: "https://fluentform.nipralo.com/auth/login",
    githubUrl: "",
    featured: true,
  },
  {
    id: 6,
    title: "SP Vision",
    description:
      "A video streaming platform UI to explore, watch, and manage entertainment content with smooth playback and personalized recommendations.",
    image:
      "https://thumb.photo-ac.com/31/311d1ecff97f4030087a3ab708a184ea_t.jpeg",
    technologies: [
      "React.js",
      "Redux",
      "Firebase",
      "React Router",
      "Tailwind CSS",
    ],
    liveUrl: "https://spvision-9fbf3.web.app/home",
    githubUrl: "https://github.com/Pankaj-026/SP-Vision",
    featured: false,
  },
  {
    id: 7,
    title: "SP Christmas",
    description:
      "A video streaming platform UI to explore, watch, and manage entertainment content with smooth playback and personalized recommendations.",
    image:
      "https://res.cloudinary.com/drwy0czge/image/upload/v1743598368/Screenshot_2025-04-02_182232_rwo8to.png",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Scroll Reveal",
      "rellax",
    ],
    liveUrl: "https://sp-christmas.netlify.app/",
    githubUrl: "https://github.com/Pankaj-026/SP-Christmas",
    featured: false,
  },
  {
    id: 7,
    title: "SP Books",
    description:
      "A video streaming platform UI to explore, watch, and manage entertainment content with smooth playback and personalized recommendations.",
    image: "https://kitaboo.com/wp-content/uploads/2022/10/ebook-store.jpg",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP",
      "Scroll Reveal",
      "Dark Mode",
    ],
    liveUrl: "https://sp-christmas.netlify.app/",
    githubUrl: "https://github.com/Pankaj-026/SP-Christmas",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Nipralo Technologies",
    duration: "April 2025 – Present",
    type: "Internship",
    location: "Onsite",
    responsibilities: [
      "Built responsive dashboards with React and Tailwind CSS, improving user engagement by 40%",
      "Collaborated with backend team for seamless API integration and data flow optimization",
      "Worked on a lead generation web tool with role-based authentication and user management",
      "Implemented modern UI/UX patterns following industry best practices",
      "Participated in code reviews and contributed to team knowledge sharing sessions",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Strapi",
      "Tailwind CSS",
      "JavaScript",
      "ShadCn",
      "MaterialUi",
      "Wordpress",
      "REST APIs",
      "Git",
    ],
  },
  // {
  //   id: 2,
  //   title: "Software Engineer Virtual Experience",
  //   company: "JP Morgan Chase & Co.",
  //   duration: "April 2024",
  //   type: "Virtual Experience",
  //   location: "Virtual",
  //   responsibilities: [
  //     "Completed real-world tasks simulating JP Morgan's tech environment and workflows",
  //     "Built a stock price data visualization module using React and modern charting libraries",
  //     "Implemented financial data processing algorithms with performance optimization",
  //     "Worked with large datasets and created interactive dashboards for financial analysis",
  //     "Gained exposure to enterprise-level software development practices and methodologies"
  //   ],
  //   technologies: ["React", "JavaScript", "Data Visualization", "Financial APIs", "Chart.js"]
  // }
];

export const education = [
  {
    id: 1,
    institution: "LS Raheja College of Arts And Commerce",
    degree: "BSc in Information Technology",
    duration: "2022 - 2025",
    cgpa: "9.5",
    description:
      "Specialized in software development, database management, and web technologies.",
  },
  {
    id: 2,
    institution: "St Mary's High School And Junior College",
    degree: "Higher Secondary Education",
    duration: "2021 - 2022",
    percentage: "72%",
    description:
      "Built a strong foundation in logic, communication, and teamwork through academics and extracurriculars.",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Pankaj-026",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pankaj026/",
    icon: "Linkedin",
  },
  {
    name: "Mail",
    url: "https://mail.google.com/mail/?view=cm&amp;to=pankajgupta1063@gmail.com",
    icon: "Mail",
  },
];
