import type {ComponentType} from "react";

export interface Profile {
    role: string;
    name: string;
    overview: string;
    cvUrl: string;
    whatsappUrl: string;
}

export interface About {
    heading: string;
    description: string;
    skills: {
        icon?: ComponentType<{className?: string}>;
        title: string;
        description: string;
    }
    imageUrl?: "https://example.com/about.jpg";
}

export interface Stats {
    title: string;
    value: number;
}[];

export interface Project {
    heading: string;
    items: {
        title: string;
        description: string;
        imageUrl: string;
        projectUrl: string;
    }[];
}

export interface Learning {
    heading: string;
    description: string;
    items: {
        icon?: ComponentType<{className?: string}>;
        title: string;
        description: string;
    }[];
}

export interface Contact {
    heading: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socialLinks: {
        icon?: ComponentType<{className?: string}>;
        platform: string;
        url: string;
    }[];
}