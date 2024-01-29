import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { AllStackType, ProfileObjectInfo, SkillCardProps } from '../type/sections';
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
    info: '한양사이버대학교 - 시각디자인',
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
      title: 'react',
      name: '리액트',
      description: '설명',
      link: [''],
      color: '#1CCEFF',
    },
    reactQuery: {
      title: 'reactQuery',
      name: '리액트 쿼리',
      description: '설명',
      link: [''],
      color: '#FF475A',
    },
  },
  백엔드: {
    mongodb: {
      title: 'mongodb',
      name: '몽고 디비',
      description: '설명',
      link: [''],
      color: '#53B145',
    },
  },
  툴: {
    discord: {
      title: 'discord',
      name: '디스코드',
      description: '설명',
      link: [''],
      color: '#5A6AFA',
    },
    figma: {
      title: 'figma',
      name: '피그마',
      description: '설명',
      link: [''],
      color: '#F35328',
    },
  },
};
