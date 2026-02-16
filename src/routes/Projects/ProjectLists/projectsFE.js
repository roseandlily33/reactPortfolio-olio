import Quiz from "../../../images/projects/Quiz.png";
import Weather from "../../../images/projects/Weather.png";
// import NoPhoto from "../../../images/projects/NoPhoto.jpg";
import Jammin from "../../../images/projects/Jammin.png";
import Magic8 from "../../../images/projects/Magic8.png";
import Quote from "../../../images/projects/Quote.png";
import Pictureinpicture from "../../../images/projects/Pictureinpicture.png";
import Password from "../../../images/projects/Password.png";
// import BusyBee from '../../images/projects/BusyBee.png';

//import Cake from '../../images/projects/Cake.png';

export const projectListFrontEnd = [
  {
    id: 401,
    title: "Javascript Quiz",
    github: "https://github.com/roseandlily33/Violet-Quizzlet",
    deployed: "https://roseandlily33.github.io/Violet-Quizzlet/",
    status: true,
    description:
      "Interactive quiz application designed to test and reinforce your JavaScript knowledge. Features dynamic question rendering, instant feedback, and score tracking. Developed as a school project using modern HTML, CSS, and vanilla JavaScript to demonstrate core web development skills.",
    img: Quiz,
    type: "Front End",
    school: true,
    important: true,
    alt: "Javascript quiz application",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: [],
    },
  },
  {
    id: 402,
    title: "Cloudy With A Chance Of Coding",
    github: "https://github.com/roseandlily33/cloudyWithAChanceOfCoding",
    deployed: "https://roseandlily33.github.io/cloudyWithAChanceOfCoding/",
    status: true,
    description:
      "Weather dashboard that fetches real-time data from the OpenWeather API, allowing users to search for current conditions and forecasts by city. Built as a school project with a focus on API integration, responsive design, and user-friendly UI using HTML, CSS, and JavaScript.",
    img: Weather,
    type: "Front End",
    important: true,
    school: true,
    alt: "Weather application",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: ["openWeatherAPI"],
    },
  },
  // This one is sort of working missing pictures
  // {
  //   id: 403,
  //   title: "Rose & Lily Bakery",
  //   github: "https://github.com/roseandlily33/makeMeACake",
  //   deployed: "https://roseandlily33.github.io/makeMeACake/",
  //   status: true,
  //   description: "HTML/CSS/JS, creative project of a layout for a bakery.",
  //   img: NoPhoto,
  //   type: "Front End",
  //   alt: "Bakery Application",
  //   technologies: {
  //     frontend: ["HTML", "CSS", "JS"],
  //     backend: [],
  //     extra: [],
  //   },
  // },
  //Up on render and is working - project is not finished
  {
    id: 404,
    title: "Jammin Spotify Playlist",
    github: "https://github.com/roseandlily33/silver-butterfly",
    status: true,
    deployed: "https://silver-butterfly.onrender.com",
    description:
      "Modern React application that connects with the Spotify API, enabling users to search for tracks, create custom playlists, and save them directly to their Spotify account. Features authentication, real-time search, and playlist management. Project highlights API integration, React hooks, and asynchronous data handling. Ongoing development for enhanced features.",
    img: Jammin,
    type: "Front End",
    important: true,
    alt: "Jammin Application",
    technologies: {
      frontend: ["React", "CSS"],
      backend: [],
      extra: ["Spotify API"],
    },
  },
  {
    id: 405,
    title: "Magic 8 Ball",
    github: "https://github.com/roseandlily33/8away",
    status: true,
    deployed: "https://roseandlily33.github.io/8away/",
    description:
      "Fun and interactive Magic 8 Ball simulation that provides random answers to user questions. Built with HTML, CSS, and JavaScript, this project demonstrates DOM manipulation, event handling, and simple animations for an engaging user experience.",
    img: Magic8,
    type: "Front End",
    alt: "Magic 8 Ball",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: [],
    },
  },
  {
    id: 406,
    title: "Random Quote Generator",
    github: "https://github.com/roseandlily33/potential-carnival",
    status: true,
    deployed: "https://roseandlily33.github.io/potential-carnival/",
    description:
      "Generates and displays random inspirational quotes at the click of a button. Built with HTML, CSS, and JavaScript, this project highlights array manipulation, randomization logic, and clean UI design for a simple but effective user tool.",
    img: Quote,
    type: "Front End",
    alt: "Quote Generator",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: [],
    },
  },
  {
    id: 407,
    title: "Picture in Picture",
    github: "https://github.com/roseandlily33/double-picture",
    status: true,
    deployed: "https://roseandlily33.github.io/double-picture/",
    description:
      "Implements the Picture-in-Picture web API to allow users to pop out a video into a floating, always-on-top window. Built with HTML, CSS, and JavaScript, this project demonstrates working with browser APIs and enhancing user multitasking capabilities.",
    img: Pictureinpicture,
    type: "Front End",
    alt: "Picture in Picture",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: [],
    },
  },
  // {
  //   id: 408,
  //   title: "Inifity Scroll",
  //   github: "https://github.com/roseandlily33/toInfinityAndBeyond/tree/main",
  //   status: false,
  //   deployed: "https://roseandlily33.github.io/toInfinityAndBeyond/",
  //   description: "Small Infinity Scroll application built with HTML, CSS & JS",
  //   img: NoPhoto,
  //   type: "Front End",
  //   alt: "Infinity Scroll",
  //   technologies: {
  //     frontend: ["HTML", "CSS", "JS"],
  //     backend: [],
  //     extra: [],
  //   },
  // },
  {
    id: 409,
    title: "Password Generator",
    github: "https://github.com/roseandlily33/PaSSw0rd-Gen3rat0r892",
    status: true,
    deployed: "https://roseandlily33.github.io/PaSSw0rd-Gen3rat0r892/",
    description:
      "Customizable password generator that creates secure, random passwords based on user-selected criteria such as length and character types. Built with HTML, CSS, and JavaScript, this project demonstrates form handling, validation, and randomization for practical security tools.",
    img: Password,
    type: "Front End",
    alt: "Password Generator",
    technologies: {
      frontend: ["HTML", "CSS", "JS"],
      backend: [],
      extra: [],
    },
  },
  //  {
  //   id: 9,
  //   title: 'Busy Bee Scheduler',
  //   github: 'https://github.com/roseandlily33/BusyBeeScheduler88',
  //   status: true,
  //   deployed: 'https://roseandlily33.github.io/BusyBeeScheduler88/',
  //   description: 'A daily scheduler that allows you to save your tasks for the day',
  //   img: BusyBee,
  //   type: 'Front End',
  //   alt: 'Busy Bee Scheduler'
  //  },
];
