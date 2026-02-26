import CardWise from '../../../images/projects/CardWise.png';
import Football from '../../../images/projects/Football.png';
import Restaurant from '../../../images/projects/Restaurant.png';


export const projectListGroups = [
    // This one is not going yet
    {
       id: 201,
       title: 'Ristorante Trattoria',
       github: 'https://github.com/Valerigionetnoel/Restaurante-Trattoria',
       deployed: 'https://boiling-tundra-06853-1ddfd77a8dae.herokuapp.com/',
       description: 'A MERN Stack Group Project, for a restaurant user to create an account, leave reviews and make reservations',
       img: Restaurant,
       status: false,
       type: 'MERN',
       alt: 'Restaurant application'
     },
    //  This one is not going
      { id: 202,
       title: 'Card Wise',
       github: 'https://github.com/Pilotguide9897/CardWise',
       deployed: 'https://dry-badlands-78694.herokuapp.com/',
       status: true,
       description: 'A Full Stack Group Project, test your knowledge with various flash cards',
       img: CardWise,
       type: 'MERN',
       alt: 'Flip card application'
      },
      // This one is sort of going - need to get the github repo
      {
        id: 203,
        title: 'English Football Tracker',
        github: '',
        deployed: 'https://roseandlily33.github.io/englishFootballTracker32/',
        status: true,
        description: 'A Front End Group Project, using 2 server side APIs',
        img: Football,
        type: 'MERN',
        alt: 'English foorball tracker application'
     },

]