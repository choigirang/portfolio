import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { AllStackType, ProfileObjectInfo, ProjectInfoType, SkillCardProps } from '../type/sections';
import { ReactNode } from 'react';

// HEADER
export const headerLabel: { [key: string]: string } = {
  home: '홈',
  about: '소개',
  skills: '기술',
  project: '프로젝트',
  contact: '연락처',
};

export const headerListsIcon: { [key: string]: ReactNode } = {
  홈: <HomeIcon />,
  소개: <PersonIcon />,
  기술: <ArticleIcon />,
  프로젝트: <AutoAwesomeMosaicIcon />,
  연락처: <ConnectWithoutContactIcon />,
};

// 주소 목록
export const headerLists = ['home', 'about', 'skills', 'project', 'contact'];

// ABOUT
export const profileInfo: { [key: string]: ProfileObjectInfo } = {
  nameInfo: {
    title: '이름',
    info: '최기랑',
    icon: '🧑🏻‍💻',
  },
  numberInfo: {
    title: '연락처',
    info: '010-7255-7942',
    icon: '🤙🏻',
  },
  mailIfon: {
    title: '이메일',
    info: 'choigirang@kakao.com',
    icon: '📧',
  },
  educationInfo: {
    title: '학력',
    info: `한양사이버대학교 미디어,시각디자인`,
    icon: '🧑🏻‍🎓',
  },
  githubInfo: {
    title: '깃허브',
    info: 'https://github.com/choigirang',
    icon: '🖥️',
  },
  blogInfo: {
    title: '블로그',
    info: 'https://choigirang.github.io',
    icon: '📚',
  },
};

// SKILLS
export const skillCardInfo: { [key: string]: SkillCardProps } = {
  first: {
    src: 'skills',
    txt: '기술 스택',
    bedge: 'skills',
    color: 'purple',
  },
  second: {
    src: 'contact',
    txt: '연락처',
    bedge: 'contact',
    color: 'green',
  },
};

export const skillsList: { [key: string]: string } = {
  first: 'frontend',
  second: 'backend',
  third: 'tools',
};

export const allStack: AllStackType = {
  프론트엔드: {
    react: {
      name: 'react',
      displayName: 'React',
      description: '설명',
      link: [''],
      color: '#1CCEFF',
    },
    nextdotJs: {
      name: 'next.js',
      displayName: 'Next.js',
      description: '설명',
      link: [''],
      color: '#1A1B24',
    },
    reactQuery: {
      name: 'reactQuery',
      displayName: 'React-Query',
      description: '설명',
      link: [''],
      color: '#FF475A',
    },
    recoil: {
      name: 'recoil',
      displayName: 'Recoil',
      description: '설명',
      link: [''],
      color: '#137EF5',
    },
    redux: {
      name: 'redux',
      displayName: 'Redux',
      description: '설명',
      link: [''],
      color: '#8348C4',
    },
    axios: {
      name: 'axios',
      displayName: 'Axios',
      description: '설명',
      link: [''],
      color: '#804C95',
    },
    mui: {
      name: 'mui',
      displayName: 'Material-UI',
      description: '설명',
      link: [''],
      color: '#027FFE',
    },
    framer: {
      name: 'framer',
      displayName: 'Framer-motion',
      description: '설명',
      link: [''],
      color: '#027FFE',
    },
    styledcomponents: {
      name: 'styledcomponents',
      displayName: '스타일 컴포넌트',
      description: '설명',
      link: [''],
      color: '#E07793',
    },
  },
  백엔드: {
    express: {
      name: 'express',
      displayName: 'express',
      description: '설명',
      link: [''],
      color: 'black',
    },
    mongodb: {
      name: 'mongodb',
      displayName: '몽고 디비',
      description: '설명',
      link: [''],
      color: '#53B145',
    },
    amazonec2: {
      name: 'amazonec2',
      displayName: 'EC2',
      description: '설명',
      link: [''],
      color: '#F0921E',
    },
    amazons3: {
      name: 'amazons3',
      displayName: 'S3',
      description: '설명',
      link: [''],
      color: '#53B145',
    },
    jsonwebtokens: {
      name: 'jsonwebtokens',
      displayName: 'JWT',
      description: '설명',
      link: [''],
      color: '#D741FE',
    },
  },
  툴: {
    git: {
      name: 'git',
      displayName: '깃',
      description: '설명',
      link: [''],
      color: '#F05032',
    },
    github: {
      name: 'github',
      displayName: '깃허브',
      description: '설명',
      link: [''],
      color: 'black',
    },
    visualstudiocode: {
      name: 'visualstudiocode',
      displayName: 'VSCode',
      description: '설명',
      link: [''],
      color: '#177BBB',
    },
    figma: {
      name: 'figma',
      displayName: '피그마',
      description: '설명',
      link: [''],
      color: '#F35328',
    },
    windows: {
      name: 'windows11',
      displayName: '윈도우',
      description: '설명',
      link: [''],
      color: '#127CD5',
    },
    macos: {
      name: 'mac',
      displayName: '맥',
      description: '설명',
      link: [''],
      color: 'black',
    },
  },
};

// PROJECT
export const projects: ProjectInfoType = {
  portfolio: {
    name: 'portfolio',
    projectName: 'Portfolio 포트폴리오',
    description: '',
    github: 'https://github.com/choigirang/portfolio',
    link: '',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'react', displayName: 'React', color: '#1CCEFF' },
        { name: 'reactquery', displayName: 'React-query', color: '#FF475A' },
        { name: 'mui', displayName: 'MaterialUi', color: '#027FFE' },
        { name: 'framer', displayName: 'Framer-motion', color: '#027FFE' },
      ],
      backend: [],
    },
  },
  pokemon: {
    name: 'pokemon',
    projectName: 'Pokemon Choi 포켓몬최',
    description: '',
    github: 'https://github.com/choigirang/pokemon-choi',
    link: 'https://pocketmon-choi-yeda.vercel.app/',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'nextdotjs', displayName: 'Next.js', color: 'white' },
        { name: 'recoil', displayName: 'Recoil', color: '#137EF5' },
        { name: 'styledcomponents', displayName: 'Styled-components', color: '#FF475A' },
      ],
      backend: [],
    },
  },
  codeContainer: {
    name: 'codeContainer',
    projectName: 'Code Container 코드컨테이너',
    description: '',
    github: 'https://github.com/choigirang/code-container',
    link: '',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'react', displayName: 'React', color: '#1CCEFF' },
        { name: 'reactquery', displayName: 'React-query', color: '#FF475A' },
        { name: 'styledcomponents', displayName: 'Styled-components', color: '#FF475A' },
      ],
      backend: [
        { name: 'express', displayName: 'Express', color: 'white' },
        { name: 'mongodb', displayName: 'MongoDB', color: '#53B145' },
        { name: 'amazonec2', displayName: 'EC2', color: '#F0921E' },
      ],
    },
  },
  whyCommunity: {
    name: 'whyCommunity',
    projectName: 'Why Community 이왜진 커뮤니티',
    description: '',
    github: 'https://github.com/choigirang/why-chat',
    link: 'https://www.why-chat-fe.shop/',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'nextdotjs', displayName: 'Next.js', color: 'white' },
        { name: 'redux', displayName: 'Redux', color: '#8348C4' },
        { name: 'reactquery', displayName: 'React-query', color: '#FF475A' },
        { name: 'styledcomponents', displayName: 'Styled-components', color: '#FF475A' },
      ],
      backend: [
        { name: 'express', displayName: 'Express', color: 'white' },
        { name: 'mongodb', displayName: 'MongDB', color: '#53B145' },
        { name: 'jsonwebtokens', displayName: 'JWT', color: '#D741FE' },
        { name: 'amazonec2', displayName: 'EC2', color: '#F0921E' },
        { name: 'amazons3', displayName: 'S3', color: '#53B145' },
      ],
    },
  },
  sideQuest: {
    name: 'sideQuest',
    projectName: 'Side Quest 사이드 퀘스트',
    description: '',
    github: 'https://github.com/codestates-seb/seb43_main_032',
    link: 'https://www.sidequest.co.kr/',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'nextdotjs', displayName: 'Next.js', color: 'white' },
        { name: 'reactquery', displayName: 'React-query', color: '#FF475A' },
        { name: 'recoil', displayName: 'Recoil', color: '#137EF5' },
        { name: 'axios', displayName: 'Axios', color: '#804C95' },
        { name: 'styledcomponents', displayName: 'Styled-components', color: '#FF475A' },
        { name: 'amazonec2', displayName: 'EC2', color: '#F0921E' },
      ],
      backend: [],
    },
  },
};
