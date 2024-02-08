import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useMoveScroll from '../../hooks/useMoveScroll';
import { HeaderProps, ListChangeSpanColorProps, TabPropsType } from '../../type/sections';

import { headerLists, headerListsIcon, headerLabel } from '../../constant/info';

import { Tabs, Tab, styled as MuiStyled, Typography, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
/**
 *
 * @returns router에 따른 헤더
 */
export default function Index() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');
  const [mobileNav, setMobileNav] = useState(false);

  const currentPath = useLocation();
  const navigate = useNavigate();

  const { scrollToTop, scrollToPage } = useMoveScroll();

  // scroll에 따른 Header bg 변경
  useEffect(() => {
    let animationFrameId: number;

    const scrollHandler = () => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        if (window.scrollY > 50 && !scroll) {
          setScroll(true);
        } else if (window.scrollY <= 50 && scroll) {
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
      const section = headerLists.find(list => {
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
  }, [activeSection, navigate]);

  return (
    <Header $scroll={scroll} $mobileNav={mobileNav}>
      {/* 로고 */}
      <Logo variant="h1" onClick={scrollToTop}>
        Girang's
      </Logo>
      {/* 리스트 */}
      <TabsContainer
        value={currentPath.pathname !== '/' ? currentPath.pathname : '/home'}
        sx={{ '& .MuiTabs-indicator': { backgroundColor: 'transparent' } }}>
        {headerLists.map(list => (
          <TabList
            key={list}
            label={
              <TabListWithIcons activeUrl={list === currentPath.pathname.replace('/', '')}>
                {headerListsIcon[headerLabel[list]]}
                <div className="labelKor">{headerLabel[list]}</div>
              </TabListWithIcons>
            }
            value={'/' + list}
            to={list}
            component={Link}
            onClick={() => scrollToPage(list)}
          />
        ))}
      </TabsContainer>
      {/* 모바일 시 메뉴 버튼 */}
      <MenuIconBtn
        $mobileNav={mobileNav}
        startIcon={mobileNav ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
        onClick={() => setMobileNav(prev => !prev)}></MenuIconBtn>
    </Header>
  );
}

const Header = MuiStyled('div')<HeaderProps>(({ theme, $scroll, $mobileNav }) => ({
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    padding: 0,
    backgroundColor: $scroll ? 'rgba(0, 0, 0, 0.7)' : 'none',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    gap: 0,
    backgroundColor: 'black',
    padding: '100px 0 0 30px',
    alignItems: 'start',
    transform: $mobileNav ? 'translateX(-100%)' : '0',
  },
}));

const TabsContainer = MuiStyled(Tabs)(({ theme }) => ({
  '& .MuiTab-wrapper': {
    alignItems: 'self-start',
    justifyContent: 'flex-start',
  },

  '& .MuiTabs-flexContainer': {
    display: 'flex',
    flexDirection: 'column !important',
    gap: 20,
  },

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexDirection: 'row !important',
      gap: 20,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    width: '100%',
    height: '100%',
    paddingTop: 100,

    '& .MuiTabs-flexContainer': {
      display: 'flex',
      flexDirection: 'column !important',
      gap: 20,
      height: '100%',
      alignItems: 'start',
      justifyContent: 'start',
    },
  },
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    justifyContent: 'center',
    svg: {
      display: 'none',
    },
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {},
}));

const TabList = MuiStyled(Tab)<TabPropsType>(({ theme }) => ({
  display: 'flex',
  fontFamily: 'SCoreDream',
  fontWeight: 500,
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {},

  /* 모바일 */
  '@media screen and (max-width:767px)': {},
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    display: 'none',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    display: 'block',
  },
}));

const MenuIconBtn = MuiStyled(Button)<{ $mobileNav: boolean }>(({ theme, $mobileNav }) => ({
  display: 'none',

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    display: 'none',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    display: 'block',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-70px',

    svg: {
      backgroundColor: 'white',
      padding: 10,
      width: 20,
      height: 20,
      opacity: 0.5,
      borderRadius: '50%',
    },

    span: {
      width: 20,
      height: 20,
    },
  },
}));
