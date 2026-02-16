// import Blog from "../../images/projects/Blog.png";
//import SmartBrain from './images/projects/SmartBrain.png';
import NASA from "../../../images/projects/NASA.png";
import Boutique from "../../../images/projects/Boutique.png";
import LemonLime from "../../../images/projects/LemonLime.png";
import DesignTemplate from "../../../images/projects/DesignTemplate.png";
import AlgoAtlas from "../../../images/projects/AlgoAtlas.png";

export const projectListMERN = [
  {
    id: 1022,
    title: "AlgoAtlas",
    github: "https://github.com/roseandlily33/algoatlas",
    deployed: "https://algoatlas.onrender.com",
    status: false,
    showMainPage: true,
    important: true,
    description:
      "AlgoAtlas is a comprehensive algorithm practice platform built with Next.js and MongoDB, designed to help users master coding challenges in a supportive environment. Users can register accounts, solve algorithm problems in an integrated code editor, track their progress over time, and discover new challenges tailored to their skill level. The platform features secure authentication, persistent user profiles, and a scalable backend. *Responsive design in progress.",
    keyFeatures: [
      "User authentication and authorization with Auth0",
      "Algorithm practice and progress tracking with detailed statistics",
      "Integrated code editor for real-time coding and testing",
    ],
    role: "Sole developer: designed, built, and deployed the entire application.",
    challenges: [
      "Seamless code editor integration for interactive algorithm practice",
      "Robust database schema design for algorithms, solutions, and user profiles",
    ],
    img: AlgoAtlas,
    type: "Next.js & MongoDB",
    // outcome: 'I was able to prac',
    technologies: {
      frontend: ["react"],
      backend: [
        "express",
        "mongodb",
        "mongoose",
        "morgan",
        "helmet",
        "cookie-parser",
        "dotenv",
        "bcrypt",
        "cors",
      ],
      extra: [],
    },
    alt: "AlgoAtlas Application",
  },
  {
    id: 100,
    title: "Design Template",
    github: "https://github.com/roseandlily33/design-template/",
    deployed: "https://design-template-eotn.onrender.com",
    status: true,
    important: true,
    showMainPage: true,
    description:
      "A fully customizable design system builder that empowers users to create, preview, and export unique design templates. Users can mix and match fonts, color palettes, spacing, and button styles, visualizing their choices in real time on a predesigned template. The platform includes accessibility tools, export features, and persistent user accounts for saving projects. Built with Next.js and MongoDB for a seamless, modern experience.",
    keyFeatures: [
      "Three sets of interchangeable options for colors, fonts, and more",
      "Accessibility chart for each color palette",
      "Font scale chart for desktop, tablet, and mobile",
      "Export design choices for easy project integration",
      "Spacing scale chart and customizable button creation",
      "Logo insertion and border radius selection",
      "User accounts to save and manage projects",
    ],
    role: "Sole developer: designed and implemented both frontend and backend.",
    challenges: [
      "Supporting multiple sets of fonts and colors with dynamic preview",
      "Displaying selected color variables instantly on the template",
      "Implementing authentication with cookies for persistent sessions",
    ],
    img: DesignTemplate,
    type: "Next.js & MongoDB",
    technologies: {
      frontend: ["Next.js"],
      backend: ["Node", "express", "Mongo-DB"],
      extra: [],
    },
    alt: "Design Template",
  },
  {
    id: 101,
    title: "Lemon - Lime",
    github: "https://github.com/roseandlily33/lemon-lime",
    deployed: "https://lemon-lime.onrender.com",
    status: false,
    important: true,
    showMainPage: true,
    description:
      "* There is currently an issue with the Login that I will fix eventually when I have time. Lemon-Lime is a robust recipe management platform built with the MERN stack, offering users a seamless way to create, share, edit, and discover recipes. The app features secure authentication, advanced search and filtering, and the ability to favorite and manage recipes. Integrated image upload and optimization ensure fast performance and beautiful displays. Designed for both desktop and mobile, Lemon-Lime is a one-stop solution for food enthusiasts and home cooks alike.",
    keyFeatures: [
      "User authentication and authorization with Auth0",
      "Advanced recipe search, filtering, and trending sections",
      "Image upload and optimization with Cloudinary and Sharp",
      "Favorites, personalized recipe management, and responsive design",
    ],
    role: "Sole developer: designed, built, and deployed the entire application.",
    challenges: [
      "Efficient image upload and optimization for performance using Cloudinary",
      "Fully responsive design for all devices",
      "Secure authentication and authorization with Auth0 integration",
      "Complex database schema for recipes, users, and favorites",
    ],
    img: LemonLime,
    type: "MERN",
    technologies: {
      frontend: [
        "react",
        "react-router-dom",
        "styled-components",
        "tanstack query",
      ],
      backend: [
        "express",
        "mongodb",
        "mongoose",
        "morgan",
        "helmet",
        "cookie-parser",
        "dotenv",
        "bcrypt",
        "cors",
        "sharp",
        "tinify",
        "Auth0",
        "cloudinary",
        "uuid",
        "Node",
      ],
      extra: [],
    },
    alt: "Lemon Lime Application",
  },
  {
    id: 103,
    title: "Rose & Lily Boutique",
    github: "https://github.com/roseandlily33/sunshine_boutique",
    deployed: "https://superb-croquembouche-bbcbcb.netlify.app/",
    status: true,
    important: true,
    description:
      "A modern e-commerce platform for boutique shopping, offering a curated product catalog, real-time inventory, and a secure, streamlined checkout process. Built with React, Redux, and Firebase for instant updates and user authentication, and Stripe for payment processing. The site features a responsive design, intuitive navigation, and a focus on user experience from browsing to purchase.",
    keyFeatures: [
      "Real-time product inventory and updates with Firebase",
      "Shopping cart, secure Stripe checkout, and order management",
      "Fully responsive design for seamless shopping on any device",
    ],
    role: "Full-stack developer: handled all aspects from UI to backend integration.",
    challenges: [
      "Crafting a responsive, mobile-first shopping experience",
      "Integrating Firebase for real-time data and authentication",
      "Managing complex state with Redux for smooth UI interactions",
    ],
    futureDevelopment: [
      "Admin panel for product management",
      "User reviews and ratings",
    ],
    img: Boutique,
    type: "MERN",
    technologies: {
      frontend: ["React", "Redux", "React-Router", "Styled-components"],
      backend: ["Firebase"],
      extra: [],
    },
    alt: "Rose and Lily Boutique Application",
  },
  {
    id: 104,
    title: "NASA - To The Stars",
    github: "https://github.com/roseandlily33/space-doodle",
    deployed: "https://space-doodle-nasa.onrender.com",
    status: true,
    important: true,
    description:
      "NASA - To The Stars is an interactive space exploration dashboard that brings live NASA data to users in a visually engaging format. Users can browse spaceship names, track launch statuses, and review mission outcomes in real time. Built with Node, GraphQL, and React, informative experience.",
    keyFeatures: [
      "Live data integration from multiple NASA APIs",
      "Interactive dashboard for mission status and exploration",
    ],
    role: "Sole developer: designed and implemented both frontend and backend.",
    challenges: [
      "Efficiently handling and normalizing inconsistent API data for fast, reliable loading",
    ],
    img: NASA,
    type: "MERN",
    technologies: {
      frontend: ["React", "styled-components"],
      backend: ["Node", "express", "Mongo-DB"],
      extra: [],
    },
    alt: "NASA Application",
  },
  // {
  //   id: 6,
  //   title: "Shortcake Blog",
  //   github: "https://github.com/roseandlily33/cuddly-happiness",
  //   deployed: "",
  //   status: true,
  // important: true,
  //   description:
  //     "A full stack blogging platform with user authentication, post creation/editing, and comment functionality. Built with Handlebars.js, Express, Sequelize, and custom CSS for a clean, user-friendly experience.",
  //   keyFeatures: [
  //     "User authentication and session management",
  //     "Rich text post editor",
  //     "Commenting system",
  //     "Custom CSS for unique branding",
  //   ],
  //   role: "Full-stack developer: built all features and designed the UI.",
  //   challenges:
  //     "Implemented secure authentication and optimized database queries.",
  //   img: Blog,
  //   type: "Full Stack",
  //   alt: "Shortcake Blog Application",
  // },
];
