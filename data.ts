
import { Job, Profile, Project, SkillCategory, Education, Certification, Activity, ShowcaseItem } from './types';

export const profile: Profile = {
  name: "Muhammad Haqimi Bin Harun",
  title: "Analyst Programmer",
  tagline: "Specializing in Backend Development, Deployment Operations, and CI/CD Automation.",
  about: "Analyst Programmer specializing in backend development, deployment operations, and CI/CD automation. Lead development tasks for the Faz-Drill system, managing staging and production environments, containerized services, and monitoring platforms. Experienced with PHP, PostgreSQL, JavaScript, Docker, GitLab pipelines, Prometheus, and Grafana. Graduated with First Class Honours and Anugerah Naib Canselor (ANC), demonstrating strong academic and leadership capabilities.",
  email: "mhaqimiharun15@gmail.com",
  github: "github.com/haqimiharun15", 
  linkedin: "linkedin.com/in/haqimiharun15",
  location: "Pasir Puteh, Kelantan",
  phone: "+60179819856",
  resumeUrl: "resume.pdf"
};

export const experience: Job[] = [
  {
    id: "1",
    company: "Faazmiar Technology Sdn. Bhd.",
    role: "Analyst Programmer",
    period: "February 2025 - Present",
    description: "Lead system development tasks for Faz-Drill, including backend module updates, performance fixes, and data workflow improvements. Manage both staging and production environments, ensuring deployments, updates, and configurations run smoothly. Develop and maintain GitLab CI/CD pipelines, containerize services using Docker, and configure Prometheus + Grafana for monitoring.",
    skills: ["PHP", "PostgreSQL", "Docker", "GitLab CI/CD", "Prometheus", "Grafana"]
  },
  {
    id: "2",
    company: "Faazmiar Technology Sdn. Bhd.",
    role: "Internship",
    period: "August 2024 - January 2025",
    description: "Contributed to developing the F-2401 system by improving data integration workflows and interface usability. Set up and configured Synology NAS server for secure data storage. Collaborated with technical teams to solve challenges related to system performance. Led optimization efforts improving system efficiency by 20%.",
    skills: ["System Development", "Synology NAS", "Data Integration", "Optimization", "Troubleshooting"]
  },
  {
    id: "3",
    company: "Web Impian Sdn. Bhd.",
    role: "Internship",
    period: "February 2021 - July 2021",
    description: "Contributed to the F-2401 project, focusing on database optimization and data integration. Assisted in the setup and configuration of the Synology server. Actively participated in progress update meetings and technical discussions. Developed practical skills in software development and server management.",
    skills: ["Database Optimization", "Server Management", "Project Coordination", "Backend Data Services"]
  },
  {
    id: "4",
    company: "Ice Lab Coffee",
    role: "Part-time Barista",
    period: "July 2022 - August 2022",
    description: "Developed strong interpersonal skills by providing exceptional customer service in a fast-paced environment. Contributed to team morale and cohesion by collaborating with colleagues to ensure smooth operations.",
    skills: ["Customer Service", "Teamwork", "Communication"]
  },
  {
    id: "5",
    company: "7 Eleven Sdn. Bhd. (Cherang Ruku Branch)",
    role: "Part-time Retail Cashier",
    period: "January 2018 - June 2018",
    description: "Enhanced communication skills by effectively engaging with customers and addressing inquiries. Collaborated with team members to optimize store operations.",
    skills: ["Retail Operations", "Communication", "Customer Engagement"]
  }
];

export const education: Education[] = [
  {
    id: "edu1",
    institution: "Universiti Tun Hussein Onn Malaysia (UTHM)",
    degree: "Bachelor of Computer Science (Software Engineering)",
    period: "October 2021 - March 2025",
    gpa: "3.85",
    achievements: [
      "Dean’s List Award (Semester 1, 2, 3 & 4)",
      "Graduated with First Class Honours",
      "Awarded Anugerah Naib Canselor (ANC) during convocation"
    ]
  },
  {
    id: "edu2",
    institution: "Politeknik Ungku Omar",
    degree: "Diploma in Information Technology (Digital Technology)",
    period: "August 2018 - August 2022",
    gpa: "3.91",
    achievements: ["Dean’s List Award (All semester)"]
  },
  {
    id: "edu3",
    institution: "MRSM Jeli",
    degree: "Sijil Pelajaran Malaysia (SPM)",
    period: "2016 - 2017",
    achievements: []
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
  },
  {
    id: "c8",
    name: "English Enhancement Student Facilitator Programme (EnESFP)",
    issuer: "UTHM",
    date: "April 2020"
  }
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Faz-Drill System",
    description: "Lead system development tasks including backend module updates, performance fixes, and data workflow improvements. Managed staging and production environments and automated deployments via GitLab CI/CD.",
    techStack: ["PHP", "PostgreSQL", "JavaScript", "Docker", "GitLab CI/CD"],
    link: "#",
    repo: "#"
  },
  {
    id: "p2",
    title: "F-2401 System (Drilling Ops)",
    description: "Contributed to developing the F-2401 system by improving data integration workflows and interface usability. Key components built for data entry and reporting. Led efforts to fix bugs improving system efficiency by 20%.",
    techStack: ["System Development", "Data Integration", "Reporting", "Synology NAS"],
    link: "#",
    repo: "#"
  },
  {
    id: "p3",
    title: "Daily Cuti Journal",
    description: "Enhanced website SEO and social media engagement, contributing to a 15% increase in traffic. Streamlined system documentation processes improving team productivity by 15%.",
    techStack: ["SEO", "Social Media Marketing", "Documentation", "Project Management"],
    link: "#",
    repo: "https://github.com/haqimiharun15/daily-cuti"
  },
  {
    id: "fyp",
    title: "Nurdaya Craft Shop (Published Research)",
    description: "Developed a comprehensive e-commerce platform for a local craft business. Integrated AI chatbots and real-time inventory management. Published in AITCS Journal.",
    techStack: ["PHP", "MySQL", "Rasa AI", "JavaScript"],
    link: "https://publisher.uthm.edu.my/periodicals/index.php/aitcs", 
    repo: "https://github.com/haqimiharun15/nurdaya-craft-shop"
  }
];

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "s1",
    title: "Grafana Monitoring Dashboard",
    description: "A centralized dashboard visualizing system health, CPU/Memory usage, and request latency. Configured using Prometheus as the data source to ensure real-time observability of production environments. Includes alerts for high-latency endpoints and server resource exhaustion.",
    images: [
        "https://placehold.co/1200x800/1e293b/10b981?text=Main+Grafana+Dashboard",
        "https://placehold.co/1200x800/1e293b/10b981?text=CPU+Usage+Metrics",
        "https://placehold.co/1200x800/1e293b/10b981?text=Latency+Analysis"
    ],
    techBadges: ["Grafana", "Prometheus", "Observability"],
    demoType: "monitoring"
  },
  {
    id: "s2",
    title: "GitLab CI/CD Pipeline",
    description: "Automated deployment pipeline showcasing Build, Test, and Deploy stages. This workflow ensures zero-downtime deployments and consistent code quality checks before merging. The pipeline includes separate jobs for unit testing, Docker image building, and deployment to staging/production servers.",
    images: [
        "https://placehold.co/1200x800/1e293b/3b82f6?text=Pipeline+Overview",
        "https://placehold.co/1200x800/1e293b/3b82f6?text=Build+Stage+Logs",
        "https://placehold.co/1200x800/1e293b/3b82f6?text=Deployment+Success"
    ],
    techBadges: ["GitLab CI", "DevOps", "Automation"],
    demoType: "pipeline"
  },
  {
    id: "s3",
    title: "Docker Container Architecture",
    description: "Visualization of the containerized environment, isolating PHP application services, PostgreSQL databases, and NGINX web servers. The setup uses Docker Compose for local development and Kubernetes manifests for production orchestration, ensuring consistency across all environments.",
    images: [
        "https://placehold.co/1200x800/1e293b/0ea5e9?text=Container+Architecture",
        "https://placehold.co/1200x800/1e293b/0ea5e9?text=Docker+Compose+Config",
        "https://placehold.co/1200x800/1e293b/0ea5e9?text=Service+Logs"
    ],
    techBadges: ["Docker", "Containers", "Microservices"],
    demoType: "architecture"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Software Development",
    items: ["PHP", "JavaScript", "PostgreSQL", "Backend Modules", "API Integrations", "Data Workflows"]
  },
  {
    category: "Operations & Environment",
    items: ["Staging & Production", "Synology NAS", "Server Checks", "Log Reviews", "Configuration Updates"]
  },
  {
    category: "DevOps & Automation",
    items: ["GitLab CI/CD", "Docker", "Prometheus", "Grafana", "Pipeline Automation", "System Monitoring"]
  },
  {
    category: "Project Management",
    items: ["SEO", "Documentation", "Agile", "Team Collaboration", "Problem Solving"]
  },
  {
    category: "Languages",
    items: ["English (Professional)", "Bahasa Melayu (Native)", "Japanese (Elementary)"]
  }
];

export const activities: Activity[] = [
  {
    id: "a1",
    organization: "Student Representative Council Election Committee",
    role: "Committee Member",
    period: "2023 - 2024",
    items: [
      "Technical and Logistic Committee for 'Nomination Day'",
      "Technical and Logistic Committee for 'Student Representative Council Election'",
      "Appeal and Protest Committee for 'Student Representative Council Election'",
      "Successfully attracted post-graduate students to participate, resulting in a 60% increase in involvement."
    ]
  },
  {
    id: "a2",
    organization: "Information Technology Club",
    role: "Exco Partner",
    period: "2022 - 2023",
    items: [
      "Program Secretary (AWS Cloud Essentials for Learners)",
      "Program Secretary (2D Night Run Festkon UTHM)",
      "Program Secretary (Exploring Democracy and Publishing)"
    ]
  },
  {
    id: "a3",
    organization: "Robotic Club (MRSM Jeli)",
    role: "Member / Competitor",
    period: "2016 - 2017",
    items: [
      "Participated in (Space Challenge) Robotics Competition Lego Education Competition (2017)",
      "Best Innovative Award in National Robotics Competition (NRC 2016)",
      "Final Competitor in the National Robotics Competition (NRC 2014)"
    ]
  }
];