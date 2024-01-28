import React, { ReactNode, useEffect, useState } from 'react';
import { HeaderScrollState, ListChangeSpanColorProps, ListType, TabPropsType } from '../type/headerType';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tabs, Tab, styled as MuiStyled, Typography, useTheme } from '@mui/material';
import useMoveScroll from '../hooks/useMoveScroll';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { SvgIconComponent } from '@mui/icons-material';

// 주소 목록
// const lists = ['home', 'about', 'skills', 'project', 'contact'];
const listsLabel: { [key: string]: string } = {
  home: '홈',
  about: '소개',
  skills: '기술',
  project: '프로젝트',
  contact: '연락망',
};

const listsIcon: { [key: string]: ReactNode } = {
  홈: <HomeIcon />,
  소개: <PersonIcon />,
  기술: <ArticleIcon />,
  프로젝트: <AutoAwesomeMosaicIcon />,
  연락망: <ConnectWithoutContactIcon />,
};

// 주소 목록
const lists = ['home', 'about', 'skills', 'project', 'contact'];

/**
 *
 * @returns router에 따른 헤더
 */
export default function Index() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');

  const currentPath = useLocation();
  const navigate = useNavigate();
  const theme = useTheme().palette.mode === 'light';

  const { scrollToTop, scrollToPage } = useMoveScroll();

  // scroll에 따른 Header bg 변경
  useEffect(() => {
    let animationFrameId: number;

    const scrollHandler = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (window.scrollY > 100 && !scroll) {
          setScroll(true);
        } else if (window.scrollY <= 100 && scroll) {
          setScroll(false);
        }
      });
    };
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scroll]);

  // 화면에 들어오는 컴포넌트에 따른 주솟값 변경
  useEffect(() => {
    const scrollChangeRouter = () => {
      const section = lists.find(list => {
        const element = document.getElementById(list);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (section && section !== activeSection) {
        setActiveSection(section);
        navigate(section);
      }
    };

    window.addEventListener('scroll', scrollChangeRouter);

    return () => {
      window.removeEventListener('scroll', scrollChangeRouter);
    };
  }, [activeSection]);

  return (
    <Header $scroll={scroll}>
      <Logo variant="h1" onClick={scrollToTop}>
        Girang's
      </Logo>
      <Tabs
        value={currentPath.pathname !== '/' ? currentPath.pathname : '/home'}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: 'transparent' } }}>
        {lists.map(list => (
          <TabList
            key={list}
            label={
              <TabListWithIcons activeUrl={list === currentPath.pathname.replace('/', '')}>
                {listsIcon[listsLabel[list]]}
                <div className="labelKor">{listsLabel[list]}</div>
              </TabListWithIcons>
            }
            value={'/' + list}
            to={list}
            component={Link}
            onClick={() => scrollToPage(list)}
          />
        ))}
      </Tabs>
    </Header>
  );
}

const Header = MuiStyled('div')<HeaderScrollState>(({ theme, $scroll }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
  alignItems: 'center',
  width: '240px',
  height: '100vh',
  padding: '100px 32px 32px 32px',
  color: 'white',
  boxSizing: 'border-box',
  transition: 'all 1s',
  zIndex: 999,
  position: 'fixed',
  left: 0,
  top: 0,

  '& .MuiTab-wrapper': {
    alignItems: 'self-start',
    justifyContent: 'flex-start',
  },

  '& .MuiTabs-flexContainer': {
    display: 'flex',
    flexDirection: 'column !important',
    gap: 20,
  },

  '.visited': {
    fontWeight: '500',
    color: theme.palette.common.white,
  },

  ...(theme.palette.mode === 'dark' && {
    backgroundColor: 'transparent',

    ':visited': {
      color: theme.palette.common.white,
    },
  }),
}));

const TabListWithIcons = MuiStyled('div')<ListChangeSpanColorProps>(({ activeUrl, theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 20,

  svg: {
    width: 18,
    height: 18,
    padding: 9,
    color: `${activeUrl ? 'white' : '#9DA2B9'}`,
    backgroundColor: '#1A1B24',
    borderRadius: 5,
  },

  '.labelKor': {
    display: 'flex',
    alignItems: 'center',
    color: `${activeUrl ? 'white' : '#9DA2B9'}`,

    '& :visited': {
      color: 'white',
    },
  },
}));

const TabList = MuiStyled(Tab)<TabPropsType>(({ theme }) => ({
  display: 'flex',
  fontFamily: 'S-CoreDream-3Light',
  fontWeight: 900,
  fontSize: 18,

  a: {
    display: 'inline !important',
  },

  '& :visited': {
    color: 'white',
  },

  ...(theme.palette.mode === 'dark' && {
    color: theme.palette.common.white,
    '.Mui-selected': {
      color: `${theme.palette.common.white} !important`,
    },
  }),
}));

const Logo = MuiStyled(Typography)(({ theme }) => ({
  width: '150px',
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,

  '&:hover': {
    cursor: 'pointer',
  },

  ...(theme.palette.mode === 'dark' && {
    color: 'white',
  }),
}));
