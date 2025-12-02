
import { Job, Profile, Project, SkillCategory, Education, Certification } from './types';

export const profile: Profile = {
  name: "Muhammad Haqimi Bin Harun",
  title: "Analyst Programmer",
  tagline: "Specializing in Laravel, Modern DevOps, and High-Performance System Architecture.",
  about: "Analyst Programmer at Faazmiar Technology with a strong foundation in software engineering. Proven expertise in full-stack development using Laravel, PHP, PostgreSQL, and JavaScript. Skilled in optimizing system performance (achieving 40% reduction in API response times), implementing DevOps practices with Docker and GitLab CI/CD, and delivering innovative digital solutions. During my studies, I spearheaded the development of the Nurdaya Craft Shop system, integrating AI chatbots and real-time inventory management.",
  email: "mhaqimiharun15@gmail.com",
  github: "github.com/haqimiharun15", 
  linkedin: "linkedin.com/in/haqimiharun15",
  location: "Kuala Lumpur, Malaysia",
  phone: "+60179819856",
  resumeUrl: "/resume.pdf"
};

export const experience: Job[] = [
  {
    id: "1",
    company: "Faazmiar Technology Sdn. Bhd.",
    role: "Analyst Programmer",
    period: "Feb 2025 - Present",
    description: "Transitioned to Laravel framework, delivering production-ready modules. Optimized system functionality using PHP, PostgreSQL, and JavaScript. Led performance initiatives by integrating Redis caching (reducing API times by 40%). Refactored backend logic into modular services. Designed GitLab CI/CD pipelines with Docker for streamlined deployments.",
    skills: ["Laravel", "Redis", "Docker", "GitLab CI/CD", "System Architecture"]
  },
  {
    id: "2",
    company: "Faazmiar Technology Sdn. Bhd.",
    role: "Software Engineer Intern",
    period: "Aug 2024 - Jan 2025",
    description: "Key contributor to the F-2401 Project (drilling operations platform). Built components for data entry and reporting. Managed Synology NAS server for secure data storage. Led debugging efforts improving system efficiency by 20%. Researched and introduced Node.js for future-proofing architecture.",
    skills: ["System Development", "Synology NAS", "Data Integration", "Node.js", "Debugging"]
  },
  {
    id: "3",
    company: "Web Impian Sdn. Bhd.",
    role: "Website Developer Intern",
    period: "Feb 2021 - July 2021",
    description: "Managed updates for the Daily Cuti journal website. Enhanced SEO and social media engagement contributing to 15% traffic increase. Analyzed performance metrics and executed creative marketing strategies.",
    skills: ["SEO", "Web Development", "Content Strategy", "Analytics"]
  }
];

export const education: Education[] = [
  {
    id: "edu1",
    institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    degree: "Bachelor of Computer Science (Software Engineering)",
    period: "Oct 2021 - March 2025",
    gpa: "3.85",
    achievements: [
      "Dean's List Award (Semester 1, 2, 3 & 4)",
      "Published Researcher: 'Nurdaya Craft Shop (Online Store System)' in AITCS Journal"
    ]
  },
  {
    id: "edu2",
    institution: "Politeknik Ungku Omar",
    degree: "Diploma in Information Technology (Digital Technology)",
    period: "Aug 2018 - Aug 2022",
    gpa: "3.91",
    achievements: ["Dean's List Award (All semesters)"]
  }
];

export const certifications: Certification[] = [
  {
    id: "c1",
    name: "Microsoft Power Apps – Digitization thru Apps Making Low Code",
    issuer: "Microsoft",
    date: "October 2024"
  },
  {
    id: "c2",
    name: "Google Project Planning: Putting It All Together",
    issuer: "Google",
    date: "May 2024"
  },
  {
    id: "c3",
    name: "Google Foundations: Data, Data Everywhere",
    issuer: "Google",
    date: "April 2024"
  },
  {
    id: "c4",
    name: "Google Foundations of Project Management",
    issuer: "Google",
    date: "April 2024"
  },
  {
    id: "c5",
    name: "Google Project Initiation: Starting a Successful Project",
    issuer: "Google",
    date: "April 2024"
  },
  {
    id: "c6",
    name: "AWS Cloud Essential for Business Leaders",
    issuer: "AWS",
    date: "December 2023"
  },
  {
    id: "c7",
    name: "CISCO CCNA: Introduction to network",
    issuer: "Cisco",
    date: "October 2023"
  }
];

export const projects: Project[] = [
  {
    id: "fyp",
    title: "Nurdaya Craft Shop (E-Commerce & AI)",
    description: "Final Year Project & Published Research. Developed a comprehensive e-commerce platform for a local craft business. Integrated a Rasa AI chatbot for 24/7 automated customer support. Features include real-time inventory synchronization between physical/online stores, pickup scheduling, and AI-assisted advertising. Validated with a 97.22% testing pass rate.",
    techStack: ["PHP", "MySQL", "Rasa AI", "JavaScript", "MVC Architecture"],
    link: "https://publisher.uthm.edu.my/periodicals/index.php/aitcs", 
    repo: "https://github.com/haqimiharun15/nurdaya-craft-shop"
  },
  {
    id: "p1",
    title: "F-2401 Project (Drilling Ops Platform)",
    description: "A comprehensive drilling operations management platform. Delivered modular report generation, user role customization, and hierarchical data processing. Implemented Redis caching for 40% faster API response.",
    techStack: ["Laravel", "Redis", "PostgreSQL", "Modular Architecture"],
    link: "#",
    repo: "https://github.com/haqimiharun15/f-2401-drilling-ops"
  },
  {
    id: "p2",
    title: "Faz-Drill System Enhancements",
    description: "Improved data integration workflows and interface usability. Refactored core logic into dedicated service files for better scalability and testability.",
    techStack: ["System Analysis", "Backend Refactoring", "UI/UX Optimization"],
    link: "#",
    repo: "https://github.com/haqimiharun15/faz-drill-enhancements"
  },
  {
    id: "p3",
    title: "Daily Cuti Journal",
    description: "Optimized website SEO and implemented social media strategies resulting in a 15% increase in traffic. Enhanced content for better user engagement.",
    techStack: ["SEO", "Web Analytics", "Content Management"],
    link: "#",
    repo: "https://github.com/haqimiharun15/daily-cuti"
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Backend & AI",
    items: ["Laravel", "PHP", "Node.js", "Rasa AI", "PostgreSQL", "Redis", "MySQL"]
  },
  {
    category: "DevOps & Infrastructure",
    items: ["Docker", "GitLab CI/CD", "Synology NAS", "Server Security", "Version Control"]
  },
  {
    category: "Methodologies",
    items: ["Agile", "MVC", "Clean Architecture", "Unit Testing", "Incremental Prototyping"]
  },
  {
    category: "Frontend & Tools",
    items: ["JavaScript", "CSS", "HTML", "Git"]
  }
];