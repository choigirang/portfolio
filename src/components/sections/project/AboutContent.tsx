import React, { useRef, useState } from 'react';
import { ProjectDetailType, StackInfoType } from '../../../type/sections';
import { styled as MuiStyled } from '@mui/material';
import ProjectStackList from './ProjectStackList';

/**
 *
 * @param props 메인 페이지에서 넘겨받을, 개별 프로젝트에 대한 데이터
 * @returns 데이터에 따른 설명
 */
export default function AboutContent(props: ProjectDetailType) {
  const { projectName, github, stack, link } = props;
  const [isHover, setIsHover] = useState('');
  const txtBoxEl = useRef<HTMLDivElement | null>(null);

  const floorItems = [
    { title: '프로젝트명', value: projectName },
    { title: '스택', value: [...stack.frontend, ...stack.backend] },
    { title: '링크', value: link },
    { title: '깃허브', value: github },
  ];

  const isStackInfoArray = (value: any): value is StackInfoType[] => {
    return Array.isArray(value) && value.every(item => typeof item === 'object' && 'name' in item);
  };

  const returnTag = (title: string, value: string) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation();
    };

    if (title === '프로젝트명') {
      return <p>{value}</p>;
    } else
      return (
        <LinkValue href={value} target="_blank" className="link" onClick={handleClick}>
          {value}
        </LinkValue>
      );
  };

  return (
    <Container>
      {floorItems.map((items, index) => (
        <Floor key={index}>
          <Title>{items.title} :</Title>
          <Text
            id="txt Ref"
            ref={items.title === '스택' ? txtBoxEl : undefined}
            checkStack={items.title === '스택'}
            checkDes={items.title === '설명'}>
            {/* 스택 데이터 시 */}
            {isStackInfoArray(items.value) && (
              <ProjectStackList isHover={isHover} value={items.value} setIsHover={setIsHover} />
            )}
            {/* 이외 데이터 */}
            {!Array.isArray(items.value) && returnTag(items.title, items.value)}
          </Text>
        </Floor>
      ))}
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}));

const Floor = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(100px, auto) 1fr',
  gap: 20,
}));

const Title = MuiStyled('p')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: 18,

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {},

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 14,
  },
}));

const Text = MuiStyled('div')<{ checkStack: boolean; checkDes: boolean }>(({ checkStack, checkDes, theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',

  '.title': {
    fontWeight: 700,
  },

  ...(checkStack && {
    fontWeight: 800,
    display: 'flex',
    gap: 10,
  }),

  ...(checkDes && {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {},

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    fontSize: 14,
  },
}));

const LinkValue = MuiStyled('a')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  overflow: 'hidden',
  whiteSpace: 'wrap',
  wordBreak: 'break-all',

  '&:hover': {
    color: theme.palette.primary.main,
  },

  '&:visited': {
    whiteSpace: 'normal',
    wordBreak: 'break-all',
  },
}));
