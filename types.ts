
export interface Job {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  repo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Activity {
  id: string;
  organization: string;
  role: string;
  period: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  phone: string;
  resumeUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
