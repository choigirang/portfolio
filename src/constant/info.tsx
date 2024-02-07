import { ReactNode } from 'react';

import { AllStackType, ProfileObjectInfo, ProjectInfoType, SkillCardProps } from '../type/sections';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

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
  언어: {
    typescript: {
      name: 'typescript',
      displayName: 'Type-script',
      description: [
        '이벤트에 대한 타입 설정 및 필요한 타입을 직접 만들어서 적용할 수 있습니다.',
        'props에 대한 타입을 적용할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/01-React-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%ED%83%80%EC%9E%85/',
        'https://choigirang.github.io/posts/Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(8)-props-%ED%83%80%EC%9E%85/',
      ],
      color: '#387BC8',
    },
    javascript: {
      name: 'javascript',
      displayName: 'Java-script',
      description: [
        '객체나 배열의 메세드를 알고 사용할 수 있습니다.',
        '스코프와 호이스팅에 대한 개념을 알고 있습니다.',
        'DOM과 Node에 대한 개념을 알고 있습니다.',
        '스타일링 및 이벤트를 실행할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/1-JavaScript-%EB%8B%A4%EC%8B%9C%EB%B0%B0%EC%9A%B0%EA%B8%B0-(4)/',
        'https://choigirang.github.io/posts/JavaScript-%EB%8B%A4%EC%8B%9C%EB%B0%B0%EC%9A%B0%EA%B8%B0-(3)/',
        'https://choigirang.github.io/posts/01-JavaScript-%EB%8B%A4%EC%8B%9C%EB%B0%B0%EC%9A%B0%EA%B8%B0-(14)/',
        'https://choigirang.github.io/posts/01-JavaScript-%EB%8B%A4%EC%8B%9C%EB%B0%B0%EC%9A%B0%EA%B8%B0-(15)/',
      ],
      color: '#F4DD57',
    },
  },
  프론트엔드: {
    react: {
      name: 'react',
      displayName: 'React',
      description: [
        '컴포넌트와 JSX에 대한 개념을 이해하고 활용할 수 있습니다.',
        'State와 컴포넌트 간의 상태 흐름에 대해 알고 있습니다.',
        'useEffect 훅에 대해 이해하고 Side Effect를 실행할 수 있습니다.',
        '반복되는 로직을 줄이기 위해 커스텀 훅을 만들어 사용할 수 있습니다.',
        'lazy, suspense, dynamic을 사용하여 최적화를 해본 경험이 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/1-React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-prop/',
        'https://choigirang.github.io/posts/3-React-Redux-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC/',
        'https://choigirang.github.io/posts/1-React-Effect-Hook/',
        'https://choigirang.github.io/posts/03-React-Custom-Hooks/',
        'https://choigirang.github.io/posts/02-React-Code-Spliting/',
      ],
      color: '#1CCEFF',
    },
    nextdotJs: {
      name: 'nextdotJs',
      displayName: 'Next.js',
      description: [
        'SSR과 CSR에 대한 개념을 이해하고 있습니다.',
        '동적 경로에 대한 개념을 이해하고 활용할 수 있습니다.',
        'SSR 방식에 대한 스타일링 시 주의점을 이해하고 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/01-Next-%EB%B0%B0%EC%9A%B0%EA%B8%B0-(1)/',
        'https://choigirang.github.io/posts/01-Next-%EB%B0%B0%EC%9A%B0%EA%B8%B0-(3)/',
        'https://choigirang.github.io/posts/2-Next-(10)-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-styled-components/',
      ],
      color: '#1A1B24',
    },
    reactQuery: {
      name: 'reactQuery',
      displayName: 'React-Query',
      description: [
        '서버에 대한 요청과 데이터 활용 방식에 대해 이해하고 있습니다.',
        'CRUD에 대한 훅을 만들어서 사용할 수 있습니다.',
        '쿼리 키에 대해 활용하고 관리할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/01-React-React-Query-(1)/',
        'https://github.com/choigirang/code-container/tree/main/front/src/query',
        'https://choigirang.github.io/posts/React-Query-%EB%8B%A4%EC%8B%9C%EB%B0%B0%EC%9A%B0%EA%B8%B0(3)/',
      ],
      color: '#FF475A',
    },
    recoil: {
      name: 'recoil',
      displayName: 'Recoil',
      description: ['간단한 상태 관리를 위해 사용해본 경험이 있습니다.'],
      link: ['https://choigirang.github.io/posts/01-React-Reacoil/'],
      color: '#137EF5',
    },
    redux: {
      name: 'redux',
      displayName: 'Redux',
      description: [
        '사용 이유와 동작 방식 개념에 대해 이해하고 있습니다.',
        '상태 관리를 위해 사용해본 경험이 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/04-Interview-Redux/',
        'https://choigirang.github.io/posts/2-Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(7)-App-component/',
      ],
      color: '#8348C4',
    },
    axios: {
      name: 'axios',
      displayName: 'Axios',
      description: [
        '서버에 대한 데이터 요청과 동작 방식에 대해 이해하고 있습니다.',
        'CRUD에 대한 훅을 만들어서 사용할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/3-React-Axios/',
        'https://github.com/choigirang/why-chat/blob/master/frontend/util/api/index.ts',
      ],
      color: '#804C95',
    },
    mui: {
      name: 'mui',
      displayName: 'Material-UI',
      description: [
        '스타일링 및 애니메이션 구현을 위해 사용해본 경험이 있습니다.',
        'theme 설정에 따른 Dark Mode를 구현해본 경험이 있습니다.',
        'API를 보며 커스텀하여 사용할 수 있습니다.',
      ],
      link: [
        'https://github.com/choigirang/portfolio/blob/devAbout/src/components/sections/About/Index.tsx',
        'https://github.com/choigirang/portfolio/blob/devHeader/src/theme/palette.ts',
        'https://github.com/choigirang/portfolio/blob/devHeader/src/components/Header.tsx',
      ],
      color: '#027FFE',
    },
    framer: {
      name: 'framer',
      displayName: 'Framer-motion',
      description: ['스타일링 및 애니메이션 구현을 위해 사용해본 경험이 있습니다.'],
      link: ['https://github.com/choigirang/portfolio/blob/devProject/src/components/sections/project/Tooltip.tsx'],
      color: '#027FFE',
    },
    styledcomponents: {
      name: 'styledcomponents',
      displayName: 'styled-components',
      description: [
        '컴포넌트와 props를 활용할 수 있습니다.',
        '컴포넌트 중첩 및 확장을 활용하여 스타일링 할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/1-React-styled-component/',
        'https://choigirang.github.io/posts/Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(5)-styled-component/',
      ],
      color: '#E07793',
    },
  },
  백엔드: {
    express: {
      name: 'express',
      displayName: 'express',
      description: [
        'Request, Response, Middleware, Router에 대한 이해를 하고 있습니다.',
        '인증 및 CRUD를 위해 서버를 구현해본 경험이 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/1-Node-Express-(1)/',
        'https://choigirang.github.io/posts/1-Node-%EA%B8%B0%EC%B4%88/',
      ],
      color: 'black',
    },
    mongodb: {
      name: 'mongodb',
      displayName: '몽고 디비',
      description: [
        'MongoDB를 활용하여 데이터를 관리해본 경험이 있습니다.',
        '데이터에 대한 모델링을 구현할 수 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/MongoDB-%EB%AC%B8%EB%B2%95/',
        'https://choigirang.github.io/posts/2-MongDB-(1)/',
      ],
      color: '#53B145',
    },
    amazonec2: {
      name: 'amazonec2',
      displayName: 'EC2',
      description: [
        '개인 프로젝트 배포를 위해 활용해본 경험이 있습니다.',
        'https 연결을 위해 SSL인증 및 로드 밸런서를 적용해본 경험이 있습니다.',
      ],
      link: ['https://choigirang.github.io/posts/AWS-EC2/', 'https://choigirang.github.io/posts/AWS-EC2-2%EC%9E%A5/'],
      color: '#F0921E',
    },
    amazons3: {
      name: 'amazons3',
      displayName: 'S3',
      description: ['버킷 생성과 접근 권한 등에 대한 개념을 이해하고 데이터를 저장할 수 있습니다.'],
      link: ['https://choigirang.github.io/posts/Node-S3-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C/'],
      color: '#53B145',
    },
    jsonwebtokens: {
      name: 'jsonwebtokens',
      displayName: 'JWT',
      description: [
        'JWT에 대한 개념과 필요성에 대해 이해하고 있습니다.',
        'AccessToken과 RefreshToken을 직접 만들어서 인증을 처리하는 로직을 구현해본 경험이 있습니다.',
      ],
      link: [
        'https://choigirang.github.io/posts/2-Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(2)-%EB%A1%9C%EA%B7%B8%EC%9D%B8/',
        'https://choigirang.github.io/posts/1-Next-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(3)-%EC%BF%A0%ED%82%A4/',
      ],
      color: '#D741FE',
    },
  },
  툴: {
    git: {
      name: 'git',
      displayName: 'Git',
      description: ['Git Flow에 대해 이해하고 사용해본 경험이 있습니다.'],
      link: ['https://choigirang.github.io/posts/1-Git-GitFlow/'],
      color: '#F05032',
    },
    github: {
      name: 'github',
      displayName: 'Github',
      description: ['Git을 이용해서 관리하는 코드를 공유 및 저장하기 위해 사용합니다.'],
      link: ['https://choigirang.github.io/posts/01-Git-GitFlow/'],
      color: 'black',
    },
    visualstudiocode: {
      name: 'visualstudiocode',
      displayName: 'VSCode',
      description: ['사용하는 에디터 입니다.'],
      link: [''],
      color: '#177BBB',
    },
    figma: {
      name: 'figma',
      displayName: 'Figma',
      description: ['피그마를 UI/UX 디자인이 가능하며 원활한 소통 및 협업이 가능합니다.'],
      link: [''],
      color: '#F35328',
    },
    windows: {
      name: 'windows11',
      displayName: 'Windows',
      description: ['현재 사용 중인 운영 체재입니다.'],
      link: [''],
      color: '#127CD5',
    },
    macos: {
      name: 'macos',
      displayName: 'Mac',
      description: ['현재 사용 중인 운영 체재입니다.'],
      link: [''],
      color: 'black',
    },
  },
};

// PROJECT
export const projects: ProjectInfoType = {
  // portfolio: {
  //   name: 'portfolio',
  //   projectName: 'Portfolio 포트폴리오',
  //   description: [
  //     '소개를 위한 포트폴리오를 제작한 프로젝트입니다.',
  //     'Typescript로 *데이터 형태의 다양한 타입들을 커스텀*하여 사용하였습니다.',
  //     '웹과 모바일 등 접근성을 높이기 위해 *반응형웹*으로 제작하였습니다.',
  //     'MUI를 사용하여 *테마 적용, TextFild, Tabs, Switch 등의 컴포넌트를 커스텀*하여 적용하였습니다.',
  //     'FramerMotion을 사용하여 *Tooltip 등에 대한 애니메이션을 적용*하였습니다.',
  //     'lazyloading, WebP, source, picture 등을 이용하여 *최적화를 진행*하였습니다.',
  //     'ReactQuery를 사용하여 *이미지 요청을 최소화* 하였습니다.',
  //     '*EC2를 이용하여 배포*하였습니다.',
  //   ],
  //   github: 'https://github.com/choigirang/portfolio',
  //   link: '',
  //   stack: {
  //     frontend: [
  //       { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
  //       { name: 'react', displayName: 'React', color: '#1CCEFF' },
  //       { name: 'reactquery', displayName: 'React-query', color: '#FF475A' },
  //       { name: 'mui', displayName: 'MaterialUi', color: '#027FFE' },
  //       { name: 'framer', displayName: 'Framer-motion', color: '#027FFE' },
  //     ],
  //     backend: [
  //       { name: 'amazonec2', displayName: 'EC2', color: '#F0921E' },
  //       { name: 'amazons3', displayName: 'S3', color: '#53B145' },
  //     ],
  //   },
  // },
  pokemon: {
    name: 'pokemon',
    projectName: 'Pokemon Choi 포켓몬최',
    description: [
      '고전게임 포켓몬스터를 웹페이지에서 사용해보기 위해 제작한 프로젝트입니다.',
      '*애니메이션 및 페이지 전환에 대한 빠른 대응을 위해 Next.js*로 제작하였습니다.',
      '드래그 및 캐릭터 좌표 이동에 대한 *렌더링 과다를 해결하기 위해 useMemo, useCallback*에 대해 학습하였습니다.',
      'Typescript로 *키보드, 마우스 등의 이벤트에 대한 타입을 학습하며 커스텀*하여 사용하였습니다.',
      '*동일한 이벤트*가 반복적으로 사용되어 다양한 *커스텀 훅*을 만들어 사용하였습니다.',
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
    description: [
      '코드를 재활용하기 위해 제작한 프로젝트입니다.',
      '*게시글에 대한 CRUD, 검색, 모아보기* 기능들을 구현하였습니다.',
      'Redux를 사용해 *클라이언트에 간단한 사용자 인증, 작성한 게시글 데이터를 저장*하였습니다.',
      'ReactQuery를 사용해 서버 요청을 하였으며, *invalidateQueries를 사용하여 사용자가 작성한 데이터의 즉각적인 피드백*이 가능하도록 하였습니다.',
      'Express, MongoDB를 이용해 서버를 구현하여 데이터를 구성하였습니다.',
      'Editior와 Viewer에서 다수의 컴포넌트가 사용되어, 각 항목별로 컴포넌트를 분리하는 데에 고민하였습니다.',
      '*EC2를 이용하여 배포*하였습니다.',
    ],
    github: 'https://github.com/choigirang/code-container',
    link: '',
    stack: {
      frontend: [
        { name: 'typescript', displayName: 'Type-script', color: '#387BC8' },
        { name: 'react', displayName: 'React', color: '#1CCEFF' },
        { name: 'redux', displayName: 'Redux', color: '#8348C4' },
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
      '*유저/게시글/댓글 CRUD, 좋아요, 검색* 기능들을 구현하였습니다.',
      'JWT를 이용해 직접 *access/refresh token을 만들어 관리하는 로직을 구현*해봄으로써 JWT와 쿠키를 이용한 *인증 방식에 대해 학습*하였습니다.',
      'ReactQuery를 이용해 *서버 요청을 최소화*시키며, *캐시 데이터를 사용하는 것을 학습*하였습니다.',
      'Redux를 이용해 *클라이언트 데이터를 저장하고 활용*하였습니다. ',
      'Express, MongoDB를 이용해 *서버를 구현하여 데이터 통신에 대해 학습*하였습니다.',
      '도메인을 구입하고 *AWS-Route53, ACM을 통해 SSL 인증하고 EC2로 배포*하였습니다.',
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
      '피그마를 이용한 화면 정의서 구현, 피드백을 받고 코드를 수정하는 과정을 겪으면서 *FE끼리 혹은 FE와 BE간의 대한 협업에 대한 전반적인 과정에 대해 경험*할 수 있었습니다.',
      '*API/인증 등에 대해 백엔드 개발자들과 협업*하는 과정을 통해 많은 얘기를 나누고 각자의 입장을 이해하는데 도움이 되었습니다.',
      '팀원으로 *게시글에 대한 CRUD, 검색, 전반적인 스타일 및 애니메이션 구현을 담당*하였습니다.',
      '*styled-components의 사용법*, *전역 세팅 방법*, *TypeScript 적용 방법을 이해*하고 코드에 적용했습니다',
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
