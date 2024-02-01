import React from 'react';
import { ProfileObjectInfo } from '../../../type/sections';
import { styled as MuiStyled } from '@mui/material';

export default function ProfileCard({ name, value }: { name: string; value: ProfileObjectInfo }) {
  const { title, info, icon } = value;

  const linkInfo = (title: string) => {
    switch (title) {
      case '이름':
        return 'none';
        break;
      case '연락처':
        return `tel:${info}`;
        break;
      case '이메일':
        return `mailto:${info}`;
        break;
      case '학력':
        return 'none';
        break;
      case '깃허브':
        return `${info}`;
        break;
      case '블로그':
        return `${info}`;
        break;
      default:
        return;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (linkInfo(title) === 'none') {
      event.preventDefault();
    }
  };

  return (
    <Container>
      <Link href={linkInfo(title)} target={title === '깃허브' || '블로그' ? '_blank' : ''} onClick={handleClick}>
        <InfoWithIcon>
          <span className="title">{title}</span>
          <span className="icon">{icon}</span>
        </InfoWithIcon>
        <Title className="info">{info}</Title>
      </Link>
    </Container>
  );
}

const Container = MuiStyled('li')(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '5%',
  backgroundColor: '#1A1B24',
  color: 'white',
  borderRadius: 10,
  transition: 'all .5s',

  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#30313d',

    '.title': {
      color: 'white',
    },

    '.info': {
      color: theme.palette.primary.main,
    },
  },
}));

const Link = MuiStyled('a')(({ href, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  cursor: href !== 'none' ? 'pointer' : 'default',

  ...(href !== 'none' && { target: '_blank' }),
}));

const Title = MuiStyled('span')(({ theme }) => ({
  fontSize: 32,

  '& :hover': {
    color: theme.palette.primary.main,
  },
}));

const InfoWithIcon = MuiStyled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'end',
  fontSize: 32,
  whiteSpace: 'nowrap', // 줄바꿈 방지
  overflow: 'hidden', // 넘치는 텍스트 숨김
  textOverflow: 'ellipsis',

  '.title': {
    color: theme.palette.primary.main,
  },

  '.icon': {
    fontSize: 40,
  },
}));
