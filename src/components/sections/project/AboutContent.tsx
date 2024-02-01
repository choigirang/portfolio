import React, { useEffect, useRef, useState } from 'react';
import { ProjectDetailType } from '../../../type/sections';
import { styled as MuiStyled } from '@mui/material';
import { Variants, motion } from 'framer-motion';
import Tooltip from './Tooltip';

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutContent(props: ProjectDetailType) {
  const { projectName, description, github, stack, link } = props;
  const [isHover, setIsHover] = useState('');
  const [childWidth, setChildWidth] = useState(0);
  const txtBoxEl = useRef<HTMLDivElement | null>(null);
  const childEls = useRef<HTMLDivElement | null>(null);

  const floorItems = [
    { title: '프로젝트명', value: projectName },
    { title: '스택', value: [...stack.frontend, ...stack.backend] },
    { title: '링크', value: link },
    { title: '깃허브', value: github },
    { title: '설명', value: description },
  ];

  const moveLink = '링크' || '깃허브';

  const handleImageInteraction = (event: React.MouseEvent<HTMLElement, MouseEvent>, el: string) => {
    event.stopPropagation();
    if (event.type === 'mouseenter') {
      setIsHover(el);
    } else if (event.type === 'mouseleave') {
      setIsHover('');
    }
  };

  useEffect(() => {
    const hideAndAddPlusBtn = () => {
      const txtBoxWidth = txtBoxEl.current?.getBoundingClientRect().width;

      if (!txtBoxEl.current) return;
    };

    const handleChildrenWidth = () => {
      hideAndAddPlusBtn();
    };

    window.addEventListener('resize', handleChildrenWidth);
    handleChildrenWidth();
    return () => {
      window.removeEventListener('resize', handleChildrenWidth);
    };
  }, [txtBoxEl.current]);

  // 컴포넌트 분리하기

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
            {items.title === '스택' &&
              Array.isArray(items.value) &&
              items.value.map(item => (
                <DisplayImgWithTooltip
                  onMouseEnter={e => handleImageInteraction(e, item.name)}
                  onMouseLeave={e => handleImageInteraction(e, item.name)}
                  variants={variants}
                  role="button"
                  key={item.displayName}>
                  <img
                    className="stack-img"
                    src={`https://cdn.simpleicons.org/${item.name}/${item.color}`}
                    alt="stack-icon"
                    width="32"
                    height="32"
                  />
                  <Tooltip
                    show={isHover}
                    name={item.name}
                    displayName={item.displayName}
                    color={item.color}
                    horizon="center"
                    vertical="bottom"
                  />
                </DisplayImgWithTooltip>
              ))}
            {/* 이외 데이터 */}
            {!Array.isArray(items.value) && (
              <a href={items.value} target="_blank">
                {items.value}
              </a>
            )}
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
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'minmax(100px, auto) 1fr',
  gap: 20,
}));

const Title = MuiStyled('p')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: 18,
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
}));

const DisplayImgWithTooltip = MuiStyled(motion.figure)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
}));
