import CardWise from './images/projects/CardWise.png';
import Quiz from './images/projects/Quiz.png';
import JATE from './images/projects/JATE.png';
import Weather from './images/projects/Weather.png';
import Blog from './images/projects/Blog.png';
import Football from './images/projects/Football.png';

const projectList = [  
   {
      id: 1,
     title: 'Ristorante Trattoria',
     github: 'https://github.com/Valerigionetnoel/Restaurante-Trattoria',
     deployed: 'https://boiling-tundra-06853-1ddfd77a8dae.herokuapp.com/',
     description: 'A MERN Stack Group Project, for a restaurant user to create an account, leave reviews and make reservations',
     img: CardWise,
     alt: 'Restaurant application'
      
   },
    { id: 2,
     title: 'Card Wise',
     github: 'https://github.com/Pilotguide9897/CardWise',
     deployed: 'https://dry-badlands-78694.herokuapp.com/',
     description: 'A Full Stack Group Project, test your knowledge with various flash cards',
     img: CardWise,
     alt: 'Flip card application'
    },
     {
        id: 3,
        title: 'Javascript Quiz',
        github: 'https://github.com/roseandlily33/Violet-Quizzlet',
        deployed: 'https://roseandlily33.github.io/Violet-Quizzlet/',
        description: 'A front end quiz to test your knowledge',
        img: Quiz,
        alt: 'Javascript quiz application'
     },
     {
        id: 4,
        title: 'Just a text editor',
        github: 'https://github.com/roseandlily33/texedDB',
        deployed: 'https://shrouded-plateau-49137.herokuapp.com/',
        description: 'A Full Stack text editor built with some starter code',
        img: JATE,
        alt: 'Text editor application'
     }, 
     {
        id: 5,
        title: 'English Football Tracker',
        github: '',
        deployed: 'https://roseandlily33.github.io/englishFootballTracker32/',
        description: 'A Front End Group Project, using 2 server side APIs',
        img: Football,
        alt: 'English foorball tracker application'
     },
      {
        id: 6,
        title: 'Cloudy with a chance of coding',
        github: 'https://github.com/roseandlily33/cloudyWithAChanceOfCoding',
        deployed: 'https://roseandlily33.github.io/cloudyWithAChanceOfCoding/',
        description: 'A Front End weather application that uses openWeatherAPI',
        img: Weather,
        alt: 'Weather application'
     }, 
     {
        id: 7, 
        title: 'Shortcake Blog',
        github: 'https://github.com/roseandlily33/cuddly-happiness',
        deployed: 'https://whispering-bastion-54456.herokuapp.com/',
        description: 'A Full Stack Application that uses authentication',
        img: Blog,
        alt: 'Shortcake Blog Application'
     }
    
 ];
export default projectList;