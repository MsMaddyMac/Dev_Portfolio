import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'MsMaddyMac | Software Engineer', // e.g: 'Name | Engineer'
  lang: '', // e.g: en, es, fr, jp
  description:
    'Welcome to my portfolio website where you will learn a bit about me and my software engineering skills.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Madeline I. McIntosh',
  subtitle: 'I am a Software Engineer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Although I am a Junior Engineer, I have come a long way since starting this journey. By attending Lambda School and shedding a little blood, sweat, and tears (well, maybe not blood), I was equipped with the basic knowledge of what it takes to be a strong, competitive developer in this field. That knowledge coupled with my passion and skill to learn new things and learn them quickly has allowed me to expand my skill set exponentially.',
  paragraphTwo:
    'Being a people person, I enjoy building strong relationships through communicating, collaborating, listening, and planning to deliver a quality product and amazing experience, of course while having some fun! ',
  paragraphThree: 'Ever curious, I am eager to learn more, do more, and teach more.',
  resume: 'resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MentorMe.png',
    title: 'MentorMe',
    info:
      'MentorMe was the very first marketing/landing page I ever designed and created using HTML, CSS & LESS. This project was built during my fourth week learning to become a Software Engineer. It afforded me the opportunity to work with a diverse team of people and allow our creative minds to work.',
    info2:
      'This little landing page will always be one of my faves because it was this project that made me fall in love with web development!',
    url: 'https://mentor-me1.netlify.app/index.html',
    repo: 'https://github.com/lambdabw-Mentor-Me/UserInterface', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'LambdiPet.png',
    title: 'LambdiPet',
    info:
      'I built this API during the third month in the Web Development track at Lambda School while learning Node.js and Express. In 3 days, I was able to brainstorm with a team and create the endpoints required to make the front end app work, complete with authorization.',
    info2:
      'I am proud of what this project represents. It is a direct reflection of my ability to learn and implement functional code in a short period of time. It also is a display of my early documentation skills.',
    url: 'https://lambdipet.netlify.app/',
    repo: 'https://github.com/Build-Week-GigaPet3/BackEnd/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Tetris.png',
    title: 'Tetris',
    info:
      'Fun Tetris game clone challenge I used to help solidify my JavaScript understanding and strengthen my skills. I enjoyed being able to create a fully functional game I used to enjoy during my childhood. I had a real sense of nostalgia once it was done. I have to admit, I still enjoy this game as an adult.',
    info2: '',
    url: 'https://tetris-nine-henna.vercel.app/',
    repo: 'https://github.com/MsMaddyMac/tetris', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Power.png',
    title: 'Power Engineers',
    info:
      'Power represents where I am today. This project was my first undertaking as an independent contractor after the business I worked for as a Software Engineer II closed due to COVID. Power is a 622 page app built with Gatsby and Prismic CMS. It utilizes GraphQL which is a query language I absolutely love.',
    info2:
      "My first task was swapping out an old plugin (gatsby-source-prismic-graphql) for a new plugin (gatsby-source-prismic) to enable the client to utilize Prismic's unpublished previews feature. I had the chance to dive into a code base I did not create (which comes with its own challenges) and learn Prismic CMS. I learned the true power of grit and humility through being able to push through the seemingly endless errors, admit when I needed help, and reach out to the Prismic community for support. I implement features as the client requests and squash bugs as they arise.",
    url: 'https://www.powereng.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'maddy@msmaddymac.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MsMaddy_Mac',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/msmaddymac/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MsMaddyMac/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
