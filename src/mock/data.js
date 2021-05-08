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
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
  cta: '',
  btn: '',
  email: '',
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
