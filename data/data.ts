import
{ PlayIcon, 
 CommandLineIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ServerStackIcon,
  CameraIcon
} from "@heroicons/react/24/solid";

import type { About, Profile, Stats, Project, Learning } from "./types";

export const profile: Profile = {
    role: "Frontend Developer",
    name: "Radhanz aja",
    overview: "Experienced frontend developer with a passion for creating beautiful and functional user interfaces.",
    cvUrl: "https://example.com/cv",
    whatsappUrl: "https://wa.me/81210633016"
};

export const about = {
    heading: "About Me",
    description: "I am a frontend developer with experience in building responsive and user-friendly web applications. I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new technologies and improve my skills.",
    imageUrl: "https://example.com/about.jpg",
    skills: [
        {
            icon: PlayIcon,
            title: "HTML",
            description: "I have a strong understanding of HTML and can create semantic and accessible markup."
        },
    ],
};

export const stats: Stats [] = [
    {
        title: "Projects Completed",
        value: 25
    },
    {
        title: "Clients",
        value: 15
    },
    {
        title: "Awards",
        value: 5,
    },
];

export const projects: Project = {
    heading: "My Projects",
    items: [
        {
            title: "Project 1",
            description: "Description for Project 1",
            imageUrl: "https://example.com/project1.jpg",
            projectUrl: "https://example.com/project1"
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            imageUrl: "https://example.com/project2.jpg",
            projectUrl: "https://example.com/project2"
        },
        {
            title: "Project 3",
            description: "Description for Project 3",
            imageUrl: "https://example.com/project3.jpg",
            projectUrl: "https://example.com/project3"
        },
        {
            title: "Project 4",
            description: "Description for Project 4",
            imageUrl: "https://example.com/project4.jpg",
            projectUrl: "https://example.com/project4"
        }
    ],
};

export const learning: Learning = {
    heading: "Learning",
    description: "I am constantly learning and improving my skills. Here are some of the technologies I am currently learning:",
    items: [
        {
            icon: PlayIcon,
            title: "Jaz Academy",
            description: "I am currently learning TypeScript to improve my JavaScript development skills."
        },
        {
            icon: PlayIcon,
            title: "TypeScript",
            description: "I am currently learning TypeScript to improve my JavaScript development skills."
        },
        {
            icon: PlayIcon,
            title: "TypeScript",
            description: "I am currently learning TypeScript to improve my JavaScript development skills."
        },
        {
            icon: PlayIcon,
            title: "TypeScript",
            description: "I am currently learning TypeScript to improve my JavaScript development skills."
        },
       
    ],
};

export const contact = {
    heading: "Contact Me",
    description: "Feel free to reach out to me for any inquiries or collaborations.",
    email: "radhanwahid553@gmail.com",
    phone: "+6281210633016",
    address: "Bandung, Indonesia",
    socialLinks: [
        {
            icon: PlayIcon,
            platform: "LinkedIn",
            url: "https://linkedin.com/in/example"
        },
        {
            icon: PlayIcon,
            platform: "GitHub",
            url: "https://github.com/example"
        },
        {
            icon: PlayIcon,
            platform: "Twitter",
            url: "https://twitter.com/example"
        },
        {
            icon: PlayIcon,
            platform: "Twitter",
            url: "https://twitter.com/example"
        },
    ],
};