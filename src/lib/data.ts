import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/friendChat.png";
import rmtdevImg from "../../public/dreaddit.png";
import wordanalyticsImg from "../../public/campKorba.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Software Developer Intern",
    location: "Live247.ai",
    description:
      "I worked as a React Developer.Integrated a dashboard, role-based access control system, alerts system, and other features to monitor patients' vital trends.",
    icon: React.createElement(FaReact),
    date: "06/2021 - 03/2022",
  },
  {
    title: "FullStack Developer Intern",
    location: "Uttertale",
    description:
      "Worked as a Full Stack Developer, managing React frontend and Node backend. Implemented reply, mention, file upload, search, and role-based interactions in a chat app using Redis and AWS S3.",
    icon: React.createElement(FaReact),
    date: "02/2023 - 07/2023",
  },
  {
    title: "Systems Engineer",
    location: "Tata Consultancy Services",
    description:
      "As a Full Stack Developer, I slashed manual tracking by 80% by implementing third-party vendor onboarding on Enbridge's platform using shadcnui, React Hook Forms, and Zod.",
    icon: React.createElement(FaReact),
    date: "08/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FriendChat ",
    description:
      "Next.js chat application with real-time messaging, email-based friend requests, and Google authentication.",
    tags: ["TypeScript", "Next.js", "Redis", "Tailwind", "Pusher"],
    imageUrl: corpcommentImg,
    link: "https://friend-chats.vercel.app/dashboard",
  },
  {
    title: "Dreaddit",
    description:
      "A Modern Fullstack Reddit Clone. Incorporated dynamic post loading with infinite scrolling, and integrated NextAuth with Google for streamlined authentication.",
    tags: ["Next.js", "Redis", "Tailwind", "React-Query", "TypeScript"],
    imageUrl: rmtdevImg,
    link: "https://dreaddit.vercel.app/",
  },
  {
    title: "CampKorba",
    description:
      "a full-stack, fully functional web application where people can submit campgrounds and users can review them.",
    tags: ["Node.js", "Express", "MongoDB", "Bootstrap", "ejs"],
    imageUrl: wordanalyticsImg,
    link: "https://campkorba-dewansh16.onrender.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "Recoil",
  "Redis",
  "Framer Motion",
] as const;
