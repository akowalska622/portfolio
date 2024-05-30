import plantify from '../assets/plantify.png';
import boardGamesNext from '../assets/board-games-next.png';
import budget from '../assets/budget-app.png';
import casecobra from '../assets/casecobra.png';

export const ProjectsDB = [
  {
    id: Math.random(),
    title: 'Case cobra',
    alt: 'case-cobra',
    imgUrl: casecobra,
    description: 'NextJS, TailwindCSS, Prisma, PostgreSQL, Vercel, Stripe',
    demoUrl: 'https://casecobra-ruddy.vercel.app/',
    codeUrl: 'https://github.com/akowalska622/casecobra',
    position: 'right',
  },
  {
    id: Math.random(),
    title: 'Budget app',
    alt: 'budget-app',
    imgUrl: budget,
    description: 'React.js, Redux, Firebase, Yup, Formik',
    demoUrl: 'https://budget-app-c66a6.firebaseapp.com/',
    codeUrl: 'https://github.com/akowalska622/budget',
    position: 'left',
  },
  {
    id: Math.random(),
    title: 'Share a game',
    alt: 'share-a-game',
    imgUrl: boardGamesNext,
    description: 'Next.js and MongoDB',
    demoUrl: 'https://board-games-9vmq8zc2u-akowalska622.vercel.app/',
    codeUrl: 'https://github.com/akowalska622/boardgames',
    position: 'right',
  },

  {
    id: Math.random(),
    title: 'Plantify',
    alt: 'plantify',
    imgUrl: plantify,
    description: 'React.js, React Context (with useReducer)',
    demoUrl: 'https://170wt.csb.app/',
    codeUrl: 'https://github.com/akowalska622/plantify',
    position: 'left',
  },
];
