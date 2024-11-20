import Quiz from '../../images/projects/Quiz.png';
import Weather from '../../images/projects/Weather.png';

export const projectListFrontEnd = [  
  // Small issue with the score not showing up at the end
    {
        id: 1,
        title: 'Javascript Quiz',
        github: 'https://github.com/roseandlily33/Violet-Quizzlet',
        deployed: 'https://roseandlily33.github.io/Violet-Quizzlet/',
        status: 'Completed',
        description: 'A front end quiz application to test your knowledge on Javascript. Built with HTML, CSS and JS.',
        img: Quiz,
        alt: 'Javascript quiz application'
     },
     //This one is working
      {
        id: 2,
        title: 'Cloudy With A Chance Of Coding',
        github: 'https://github.com/roseandlily33/cloudyWithAChanceOfCoding',
        deployed: 'https://roseandlily33.github.io/cloudyWithAChanceOfCoding/',
        status: 'Completed',
        description: 'A Front End weather application that uses openWeatherAPI. Built with HTML, CSS, and JS.',
        img: Weather,
        alt: 'Weather application'
     }, 
     // This one is sort of working missing pictures
     {
      id: 3,
      title: 'Rose & Lily Bakery',
      github: 'https://github.com/roseandlily33/makeMeACake?tab=readme-ov-file',
      deployed: 'https://roseandlily33.github.io/makeMeACake/',
      status: 'Completed',
      description: 'HTML/CSS/JS, creative project of a layout for a bakery.',
      img: '',
      alt: 'Bakery Application'
     }, 
     //Up on render and is working - project is not finished
     {
      id: 4,
      title: 'Jammin Spotify Playlist',
      github: 'https://github.com/roseandlily33/silver-butterfly',
      status: 'Currently Under Development',
      deployed: 'https://silver-butterfly.onrender.com',
      description: 'React Application. Uses Spotify API to create your own spotify playlist that has all your favourite songs. Currently still under development.',
      img: '',
      alt: 'Jammin Application'
     }
]