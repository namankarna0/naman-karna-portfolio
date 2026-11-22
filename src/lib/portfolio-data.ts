// All portfolio content lives here so it can be updated without touching layout code.
import defenderImg from "@/assets/project-defender.webp";
import qrImg from "@/assets/project-qr.webp";
import pandasCertificate from "../assets/pandas.jpeg";
import OAMCertificate from "../assets/OAM.jpeg";
import BasicLinuxCertificate from "..//assets/Basic Linux & AWS EC2.jpeg";
import DataScienceCertificate from "../assets/Data Science with Python.jpeg";
import FirstCapAWSCertificate from "../assets/First Cap into AWS.jpeg";
import BackendCertificate from "../assets/Fundamentals of Backend.jpeg";
import InternCertificate from "../assets/Intern.jpeg";
import LearningCertificate from "../assets/Learning Challenge.jpeg";
import LORCertificate from "../assets/LOR.jpeg";
import nodejsCertificate from "../assets/Nodejs.jpeg";
import offerletterCertificate from "../assets/Offerletter.jpeg";
import PythonCertificate from "../assets/Python.jpeg";
import pythonCertificate from "../assets/Python_1.jpeg";
import ReactNativeExpoCertificate from "../assets/React Native & Expo.jpeg";
import profilePhoto from "../assets/namanpic.jpeg";

export const profile = {
  name: "Naman Karna",
  initials: "NK",
  headline: "Aspiring AI/ML Engineer & Computer Engineering Student",
  subheadline:
    "Exploring Artificial Intelligence, Machine Learning, Data Science, and Backend Development.",
  intro:
    "I'm a Computer Engineering student passionate about exploring emerging technologies, solving real-world problems, and transforming ideas into practical solutions through code.",
  roles: [
    "AI/ML Enthusiast",
    "Python Developer",
    "Backend Developer",
    "Data Science Learner",
    "Creative Problem Solver",
  ],
  tagline: "Learning. Building. Creating. Improving.",
  email: "namankarna0@gmail.com",
  phone: "+977 9704555094",
  phoneHref: "tel:+9779704555094",
  location: "Biratnagar, Nepal",
  // Set to an image URL once a profile photo is provided; the monogram shows until then.
  photo: profilePhoto,
};

export type SocialKey = "github" | "linkedin" | "facebook" | "instagram";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "github", label: "GitHub", href: "https://github.com/namankarna0" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/namankarna/" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/Namankarna0" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/namankarna" },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  lead: "Aspiring Computer Engineer | AI/ML Enthusiast | Backend Developer | Creative Problem Solver",
  paragraphs: [
    "I'm a second-year Computer Engineering student at IOE, Purwanchal Campus, Tribhuvan University, passionate about exploring technology and building solutions that make a difference.",
    "Currently developing my skills in Python, AI/ML, Data Science, Backend Development, and Web Technologies. I enjoy learning by building, experimenting with new technologies, and turning ideas into practical projects.",
    "With experience in backend development through my internship at CodeAlpha and graphic design at Purwanchal Dance Club, I bring together technical thinking and creativity.",
    "Recently completed the Pandas course on Kaggle as another milestone in my AI/ML learning journey.",
    "I believe in continuous learning, consistency, and growing one project at a time. Always excited to connect, collaborate, and explore opportunities that challenge me to become better.",
  ],
  highlights: [
    { icon: "cpu", label: "Computer Engineering Student" },
    { icon: "brain", label: "AI/ML Enthusiast" },
    { icon: "server", label: "Backend Developer" },
    { icon: "sprout", label: "Continuous Learner" },
  ],
} as const;

export const education = [
  {
    degree: "Bachelor in Computer Engineering",
    institution: "Tribhuvan University – Institute of Engineering (IOE), Purwanchal Campus",
    location: "Dharan, Nepal",
    status: "Second Year, Third Semester",
    period: "Expected graduation: 2030",
    current: true,
  },
  {
    degree: "High School",
    institution: "Orchid Public School",
    location: "Biratnagar, Nepal",
    current: false,
  },
  {
    degree: "School",
    institution: "Sirjana Gyankunja Higher Secondary School",
    location: "Biratnagar, Nepal",
    current: false,
  },
];

export const experience = [
  {
    role: "Graphics Designer",
    organization: "Purwanchal Dance Club",
    period: "March 2026 – Present",
    summary: null as string | null,
    points: [
      "Designed promotional posters and social media content for club events.",
      "Managed visual branding consistency across digital platforms.",
      "Created visual materials using Canva and Figma.",
    ],
    tags: ["Canva", "Figma", "Branding"],
    current: true,
    link: { href: "https://drive.google.com/drive/folders/1MWQObqGQNbR7glwcwum1oQjM1ChWlKur?usp=drive_link", label: "See My Designs" },
      
  },
  
  {
    role: "Intern Back End Developer",
    organization: "CodeAlpha",
    period: "20 October 2026 – 20 November 2026",
    summary: "One-month virtual internship in Backend Development.",
    points: [
      "Completed a virtual internship focused on Backend Development.",
      "Recognized by the CEO for excellent analytical skills and high productivity.",
      "Quickly acquired new skills and adapted to emerging technologies.",
      "Collaborated with and assisted team members.",
      "Formally recommended as a valuable asset to prospective employers.",
    ],
    tags: ["Backend", "APIs", "Virtual Internship"],
    current: false,
    link : { href: "https://github.com/namankarna0/codealpha_tasks", label :" Internship Tasks on GitHub"},
  },
];

export type SkillGroup = {
  title: string;
  icon: "brain" | "code" | "server" | "globe" | "database" | "git" | "palette";
  skills: { name: string; featured?: boolean }[];
  featured?: boolean;
  note?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: "brain",
    featured: true,
    note: "Primary focus — the direction I'm growing toward.",
    skills: [{ name: "Machine Learning" }, { name: "Pandas" }, { name: "NumPy" }, { name: "Data Analysis" }],
  },
  {
    title: "Programming Languages",
    icon: "code",
    featured: true,
    note: "Python is my main language.",
    skills: [{ name: "Python", featured: true }, { name: "C" }, { name: "C++" }],
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: [
      { name: "Django" },
      { name: "Flask" },
      { name: "FastAPI" },
      { name: "Backend Development" },
      { name: "API Development" },
      {name: "Postman" },
      {name: "Thunder Client" },
      {name: "Node.js" },
    ],
  },
  {
    title: "Web Development",
    icon: "globe",
    skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "React" }],
  },
  { title: "Database", icon: "database", skills: [{ name: "SQL" }, { name: "MongoDB" }] },
  { title: "Tools & Version Control", icon: "git", skills: [{ name: "Git" }, { name: "GitHub" }, {name: "Expo"}] },
  { title: "Graphic Design", icon: "palette", skills: [{ name: "Canva" }, { name: "Figma" }] },
];

export type Project = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string[];
  features?: string[];
  stack: string[];
  contributors: string[];
  github?: string;
  details?: string;
};

export const projects: Project[] = [
  {
    title: "DEFENDER++",
    subtitle: "A Cyber Security Toolkit",
    image: defenderImg,
    imageAlt: "Abstract glowing wireframe shield over a hexagonal circuit grid",
    description: [
      "DEFENDER++ is a C++-based cybersecurity toolkit that combines practical security utilities with a web-based interface.",
      "It includes password tools, text and file encryption/decryption, a port scanner, and system monitoring features.",
      "A custom HTTP server written in C++ handles API routing, frontend-backend communication, static file serving, JSON requests, and file operations.",
    ],
    stack: ["C++", "CMake", "HTML", "CSS", "JavaScript", "HTTP", "JSON", "POSIX Sockets", "Linux"],
    contributors: ["Krishal", "Nikhil", "Krishna"],
    github: "https://github.com/namankarna0/DEFENDER-A-Cyber-Security-Toolkit",
    details: "https://www.linkedin.com/in/namankarna/details/projects/edit/forms/659840187/",
  },
  {
    title: "QR Attendance System",
    subtitle: "Mobile attendance with QR codes",
    image: qrImg,
    imageAlt: "Glowing smartphone outline scanning a QR code beside check and calendar icons",
    description: [
      "A QR-based attendance management system designed to simplify attendance tracking through QR code generation and scanning.",
      "Teachers can generate QR codes, while students can scan them to record attendance. The application includes student profile management, attendance recording with date and time, duplicate attendance prevention, and attendance history for teachers.",
      "The system provides a clean, user-friendly interface for managing attendance efficiently.",
    ],
    features: [
      "Teacher QR code generation",
      "Student QR code scanning",
      "Student profile management",
      "Attendance recording with date and time",
      "Duplicate attendance prevention",
      "Attendance history for teachers",
      "Clean and user-friendly interface",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Expo Camera",
      "React Native QRCode SVG",
      "AsyncStorage",
      "Android Studio",
    ],
    contributors: ["Nirman"],
    details: "https://www.linkedin.com/in/namankarna/details/projects/edit/forms/659410971/",
  },
];

export const services = [
  { icon: "brain", title: "AI/ML Model Development", text: "Exploring and developing machine learning solutions for practical problems." },
  { icon: "chart", title: "Data Analysis & Visualization", text: "Analyzing datasets, extracting insights, and presenting meaningful information." },
  { icon: "code", title: "Python Development", text: "Building Python-based applications, scripts, and automation solutions." },
  { icon: "server", title: "Backend Development", text: "Developing backend systems, APIs, and server-side functionality." },
  { icon: "globe", title: "Web Development", text: "Creating responsive and functional web experiences." },
  { icon: "database", title: "Database Management", text: "Working with SQL databases and structured data." },
  { icon: "palette", title: "Graphic Design", text: "Designing promotional materials, digital graphics, and visual content using Canva and Figma." },
] as const;

export type Certification = {
  title: string;
  issuer: string;
  status: string;
  description: string;
  // Add when available — never invent these.
  image?: string;
  verifyUrl?: string;
};


export const certifications: Certification[] = [
  {
    title: "Internship Completion Certificate",
    issuer: "CodeAlpha",
    status: "Completed",
    description:
      "Successfully completed a one-month virtual internship in Backend Development at CodeAlpha, gaining practical experience and recognition for analytical skills and productivity.",
    image: InternCertificate,
  },
  {
    title: "Letter of Recommendation (LOR)",
    issuer: "CodeAlpha",
    status: "Received",
    description:
      "Received a Letter of Recommendation from CodeAlpha for outstanding performance during the Backend Development internship, highlighting analytical skills, productivity, and adaptability.",
    image: LORCertificate,
  },
  {
    title: "Offer Letter",
    issuer: "CodeAlpha",
    status: "Received",
    description:
      "Received an offer letter from CodeAlpha for a Backend Development role, recognizing skills and potential demonstrated during the internship.",
    image: offerletterCertificate,
  },

  {
    title: "Pandas Course",
    issuer: "Kaggle",
    status: "Completed",
    description:
      "Successfully completed the Pandas course on Kaggle as part of my continuous learning journey in Python, Data Science, and Artificial Intelligence.",
    image: pandasCertificate,
    verifyUrl: "https://www.kaggle.com/learn/certification/namankarna0/pandas",   
  },
  {
    title: "Basic Linux & AWS EC2",
    issuer: "AWS Student Builder Group",
    status: "Completed",
    description:
      "Successfully completed the Basic Linux & AWS EC2 course, gaining foundational knowledge in Linux and cloud computing with Amazon Web Services.",
    image: BasicLinuxCertificate,
  },
  {
    title: "Data Science with Python",
    issuer: "Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the Data Science with Python course, gaining foundational knowledge in data analysis and machine learning using Python.",
    image: DataScienceCertificate,
  },
  {
    title: "Python",
    issuer:"freeCodeCamp",
    status: "Completed",
    description:
      "Successfully completed the 300 hours of Python course on freeCodeCamp, gaining foundational knowledge in Python programming and its applications.",
    image: PythonCertificate,
    verifyUrl: "https://www.freecodecamp.org/certification/namankarna/python-v9",
  },
  {
    title:"First Cap into AWS",
    issuer: "AWS Student Builder Group",
    status: "Completed",
    description:
      "Successfully completed the First Cap into AWS course, gaining foundational knowledge in cloud computing and Amazon Web Services.",
    image: FirstCapAWSCertificate,
  },
  {
    title:"Fundamentals of Backend",
    issuer: "Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the Fundamentals of Backend course, gaining foundational knowledge in backend development and its applications.",
    image: BackendCertificate,
  },
  {
    title:"React Native & Expo",
    issuer: "Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the React Native & Expo course, gaining foundational knowledge in mobile app development using React Native and Expo.",
    image: ReactNativeExpoCertificate,
  },

  {
    title: "Python",
    issuer:"Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the Python course, gaining foundational knowledge in Python programming and its applications.",
    image: pythonCertificate,
  },
  {
    title:"Node.js",
    issuer: "Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the Node.js course, gaining foundational knowledge in server-side JavaScript and its applications.",
    image: nodejsCertificate,
  },
  {
    title:"Learning Challenge",
    issuer: "Association of Computer Engineering Students (ACES)",
    status: "Completed",
    description:
      "Successfully completed the 15 days Learning Challenge course on Web Development, gaining foundational knowledge in learning strategies and techniques.",
    image: LearningCertificate,
  },
   {
    title:"Office Application Management",
    issuer: "Complete Information Technology (CIT)",
    status: "Completed",
    description:
      "Successfully completed the Office Application Management course, gaining foundational knowledge in using office applications effectively.",
    image: OAMCertificate,
  },
  
];
