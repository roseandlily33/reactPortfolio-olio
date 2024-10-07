import Blog from './images/projects/Blog.png';
import SmartBrain from './images/projects/SmartBrain.png';
import NASA from './images/projects/NASA.png';
import Boutique from './images/projects/Boutique.png';
 
 export const projectListMERN = [
    {
        id: 1, 
        title: 'Shortcake Blog',
        github: 'https://github.com/roseandlily33/cuddly-happiness',
        deployed: 'https://whispering-bastion-54456.herokuapp.com/',
        description: 'A Full Stack Application that uses authentication, Handlebars.js, CSS, Express, Sequelize',
        img: Blog,
        alt: 'Shortcake Blog Application'
     },
     {
        id: 2,
        title: 'Rose & Lily Boutique',
        github: 'https://github.com/roseandlily33/sunshine_boutique',
        deployed: 'https://65ba4085942a7100087be5bc--superb-croquembouche-bbcbcb.netlify.app/',
        description: 'E-Commerce Full Stack: React, Redux, Styled Components, Firebase and Stripe',
        img: Boutique,
        alt: 'Rose and Lily Boutique Application'
     },
     {
        id: 3,
        title: 'Smart Brain',
        github: 'https://github.com/roseandlily33/space-brain',
        deployed: 'https://space-brain.onrender.com',
        description: 'Full Stack: React, Node.js, Knex.js, Clarafai API',
        img: SmartBrain,
        alt: 'Smart Brain Application'
     },
     {
        id: 4,
        title: 'NASA - To The Stars',
        github: 'https://github.com/roseandlily33/space-doodle',
        deployed: '',
        description: 'See the names of different spaceships and see if the launch was a success or failure. Full Stack App using Node, GraphQL, React',
        img: NASA,
        alt: 'NASA Application'

     },
     {
        id: 5,
        title: 'Lemon - Lime',
        github: 'https://github.com/roseandlily33/lemon-lime',
        deployed: 'https://lemon-lime.onrender.com',
        description: 'Full Stack: React, GraphQL, etc. ',
        img: SmartBrain,
        alt: 'Lemon Lime Application'
     },
     {
      id: 6,
      title: 'YODA Safety Services- Client Project',
      github: '',
      deployed: 'https://www.yodasafetyservices.com/',
      description: 'Full Stack Application that I created for a client (Github repo is not availble for that reason). MERN Stack. You can create an account, take online training, purchase courses, and download your certificate from the course.',
      img: '',
      alt: 'YODA Application'
   }
 ]