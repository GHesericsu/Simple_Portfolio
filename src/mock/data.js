import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Eric Su | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Eric Su's portfolio site`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi My name is',
  name: 'Eric Su',
  subtitle: `I'm a Software Engineer`,
  cta: 'Know more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'eric_su_photo_square_medium.jpg',
  paragraphOne: `I'm a software engineer with a background in sales and finance and I previously worked in the Payments industry for 7 years.`,
  paragraphTwo: `As a Software Engineer, I have built a number of web applications with the following technologies:

  Front-end: JavaScript, React, Redux, Jest/Enzyme, Mocha/Chai, HTML, CSS3+, jQuery, Webpack, Babel, Styled Components, Material-UI
  
  Back-end/DB: Node.js/Express, MongoDB, MySQL, PostgreSQL, AWS(S3, EC2, CloudFront), Docker, Apache Cassandra, Nginx`,
  paragraphThree: `I'm energized by new challenges that give me chance to grow as a person. Having experiences from traveling around the world and living in 5 very different places so far in my life has given me pretty broad perspectives on many things and you can say I'm very adaptable and open to new ideas. And I'm constantly in search of meanings.

  My friends would describe me as a calm and sociable person who likes to bring joy and fun experiences to others.`,
  resume: 'https://drive.google.com/file/d/1aMGFH2Cyx8Ju_qziuLY3o-fbMtchBqTE/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'HARRYSQL_REVIEWS.png',
    title: `Harry's BnB`,
    info:
      'I designed and implemented the UI of the users reviews microservice and achieved 100/100 on Google PageSpeed Insights by optimizing user images. Interesting features include dynamic text truncating, a pop-up modal to see more lazy-loaded reviews, and dynamic rating bars',
    info2: 'The module is deployed with AWS(EC2, CloudFront) and Docker containers',
    url: 'https://youtu.be/p5fqJuJXYno',
    repo: 'https://github.com/GHesericsu/HarryBnb-Reviews', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cloudStaysStats.png',
    title: 'CloundStay',
    info:
      'I redesigned the APIs of the photo gallery microservice to accommodate 100MM primary records.',
    info2: `I also optimize the MySQL database queries and scaled out 8 servers with Nginx load balancer in order to increase throughput to around 700 requests per second and less than 10ms average latency. The backend is stress tested with Loader.io and results measured with New Relic'`,
    url: 'https://github.com/GHesericsu/cloudStay-PhotoGallery',
    repo: 'https://github.com/GHesericsu/cloudStay-PhotoGallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ERIC_SU_LIVE.png',
    title: 'Mix Streams',
    info: '',
    info2: '',
    url: 'https://youtu.be/jvZLXbWiUmg',
    repo: 'https://github.com/GHesericsu/Mix-Streams', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Want to have a quick chat? :)`,
  btn: 'Email Me',
  email: 'esericsu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/esericsu/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GHesericsu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
