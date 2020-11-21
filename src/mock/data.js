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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/GHesericsu/HarryBnb-Reviews', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/GHesericsu/cloudStay-PhotoGallery', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
