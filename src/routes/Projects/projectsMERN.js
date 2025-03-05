import Blog from '../../images/projects/Blog.png';
//import SmartBrain from './images/projects/SmartBrain.png';
import NASA from '../../images/projects/NASA.png';
import Boutique from '../../images/projects/Boutique.png';
import YODA from '../../images/projects/YODA.png';
import LemonLime from '../../images/projects/LemonLime.png';
 
 export const projectListMERN = [
  {
    id: 1,
    title: 'Lemon - Lime',
    github: 'https://github.com/roseandlily33/lemon-lime',
    deployed: 'https://lemon-lime.onrender.com',
    status: true,
    description: 'Recipe Application, where you can create an account, share, edit and delete recipes, favorite recipes, see new recipes, search for recipes. Full Stack: React, GraphQL, etc.',
    img: LemonLime,
    type: 'MERN',
    technologies: [
      'bcrypt', 'cors', 'cookie-parser', 'dotenv', 'express', 
      'helmet', 'mongodb', 'mongoose', 'morgan', 'sharp', 'tinify',
      'Auth0', 'cloudinary', 'tanstack query', 'react', 'react-router-dom',
      'styled-components', 'uuid'
    ],
    alt: 'Lemon Lime Application'
    },
    // This one is completed
    {
    id: 2,
    title: 'YODA Safety Services - Client Project',
    github: '',
    deployed: 'https://www.yodasafetyservices.com/',
    description: 'Full Stack Application that I created for a client (Github repo is not availble for that reason). MERN Stack. You can create an account, take online training, purchase courses, and download your certificate from the course.',
    img: YODA,
    type: 'MERN',
    technologies:['bcrypt', 'cors', 'dotenv',
      'express', 'helmet', 'mongodb', 'mongoose', 'helmet',
      'morgan', 'jsonwebtoken', 'multer', 'nodemailer', 'nodemailer-express-handlebars',
      'uuid', 'styled-components', 'react', 'react-router-dom'
    ],
    status: false,
    alt: 'YODA Application'
  },
     {
        id: 3,
        title: 'Rose & Lily Boutique',
        github: 'https://github.com/roseandlily33/sunshine_boutique',
        deployed: 'https://superb-croquembouche-bbcbcb.netlify.app/',
        status: true,
        description: 'E-Commerce Full Stack: React, Redux, Styled Components, Firebase and Stripe',
        img: Boutique,
        type: 'MERN',
        alt: 'Rose and Lily Boutique Application'
     },
     {
      id: 4,
      title: 'NASA - To The Stars',
      github: 'https://github.com/roseandlily33/space-doodle',
      deployed: 'https://space-doodle-nasa.onrender.com',
      status: true,
      description: 'See the names of different spaceships and see if the launch was a success or failure. Full Stack App using Node, GraphQL, React',
      img: NASA,
      type: 'MERN',
      alt: 'NASA Application'

   },
    // This one needs to be done on render, took it off heroku
     {
      id: 6, 
      title: 'Shortcake Blog',
      github: 'https://github.com/roseandlily33/cuddly-happiness',
      deployed: '',
      status: true,
      description: 'A Full Stack Application that uses authentication, Handlebars.js, CSS, Express, Sequelize',
      img: Blog,
      type: 'Full Stack',
      alt: 'Shortcake Blog Application'
   },
 ]