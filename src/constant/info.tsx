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
      description: [''],
      link: [''],
      color: '#1CCEFF',
    },
    nextdotJs: {
      name: 'next.js',
      displayName: 'Next.js',
      description: [''],
      link: [''],
      color: '#1A1B24',
    },
    reactQuery: {
      name: 'reactQuery',
      displayName: 'React-Query',
      description: [''],
      link: [''],
      color: '#FF475A',
    },
    recoil: {
      name: 'recoil',
      displayName: 'Recoil',
      description: [''],
      link: [''],
      color: '#137EF5',
    },
    redux: {
      name: 'redux',
      displayName: 'Redux',
      description: [''],
      link: [''],
      color: '#8348C4',
    },
    axios: {
      name: 'axios',
      displayName: 'Axios',
      description: [''],
      link: [''],
      color: '#804C95',
    },
    mui: {
      name: 'mui',
      displayName: 'Material-UI',
      description: [''],
      link: [''],
      color: '#027FFE',
    },
    framer: {
      name: 'framer',
      displayName: 'Framer-motion',
      description: [''],
      link: [''],
      color: '#027FFE',
    },
    styledcomponents: {
      name: 'styledcomponents',
      displayName: '스타일 컴포넌트',
      description: [''],
      link: [''],
      color: '#E07793',
    },
  },
  백엔드: {
    express: {
      name: 'express',
      displayName: 'express',
      description: [''],
      link: [''],
      color: 'black',
    },
    mongodb: {
      name: 'mongodb',
      displayName: '몽고 디비',
      description: [''],
      link: [''],
      color: '#53B145',
    },
    amazonec2: {
      name: 'amazonec2',
      displayName: 'EC2',
      description: [''],
      link: [''],
      color: '#F0921E',
    },
    amazons3: {
      name: 'amazons3',
      displayName: 'S3',
      description: [''],
      link: [''],
      color: '#53B145',
    },
    jsonwebtokens: {
      name: 'jsonwebtokens',
      displayName: 'JWT',
      description: [''],
      link: [''],
      color: '#D741FE',
    },
  },
  툴: {
    git: {
      name: 'git',
      displayName: '깃',
      description: [''],
      link: [''],
      color: '#F05032',
    },
    github: {
      name: 'github',
      displayName: '깃허브',
      description: [''],
      link: [''],
      color: 'black',
    },
    visualstudiocode: {
      name: 'visualstudiocode',
      displayName: 'VSCode',
      description: [''],
      link: [''],
      color: '#177BBB',
    },
    figma: {
      name: 'figma',
      displayName: '피그마',
      description: [''],
      link: [''],
      color: '#F35328',
    },
    windows: {
      name: 'windows11',
      displayName: '윈도우',
      description: [''],
      link: [''],
      color: '#127CD5',
    },
    macos: {
      name: 'mac',
      displayName: '맥',
      description: [''],
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
    description: [''],
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
    description: [
      '고전게임 포켓몬스터를 웹페이지에서 사용해보기 위해 제작한 프로젝트입니다.',
      '애니메이션 및 페이지 전환에 대한 빠른 ',
    ],
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
    description: ['코드를 재활용하기 위해 제작한 프로젝트입니다.', ''],
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
    description: [
      '협업 프로젝트가 끝나고 부족한 부분을 학습하기 위해 제작한 커뮤니티입니다.',
      '유저/게시글/댓글 CRUD, 좋아요, 검색 기능들을 구현했습니다.',
      'JWT를 이용해 직접 access/refresh token을 만들어 관리하는 로직을 구현해봄으로써 JWT와 쿠키를 이용한 인증 방식에 대해 학습하였습니다.',
      'ReactQuery를 이용해 서버 요청을 최소화시키며, 캐시 데이터를 사용하는 것을 학습하였습니다.',
      'Redux를 이용해 클라이언트 데이터를 저장하고 활용하였습니다. ',
      'Express, MongoDB를 이용해 서버를 구현하여 데이터 통신에 대해 학습하였습니다.',
      '도메인을 구입하고 AWS-Route53, ACM을 통해 SSL 인증하고 EC2로 배포하였습니다.',
    ],
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
    description: [
      '사이드 프로젝트를 진행할 수 있는 커뮤니티입니다.',
      '피그마를 이용한 화면 정의서 구현, 피드백을 받고 코드를 수정하는 과정을 겪으면서 FE끼리 혹은 FE와 BE간의 대한 협업에 대한 전반적인 과정에 대해 경험할 수 있었습니다.',
      'API/인증 등에 대해 백엔드 개발자들과 협업하는 과정을 통해 많은 얘기를 나누고 각자의 입장을 이해하는데 도움이 되었습니다.',
      '팀원으로 게시글에 대한 CRUD, 검색, 전반적인 스타일 및 애니메이션 구현을 담당하였습니다.',
      'styled-components의 사용법, 전역 세팅 방법, TypeScript 적용 방법을 이해하고 코드에 적용했습니다',
    ],
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
