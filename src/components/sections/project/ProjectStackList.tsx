import React, { Dispatch, SetStateAction } from 'react';
import { String } from 'aws-sdk/clients/acm';
import Tooltip from './Tooltip';

import { StackInfoType } from '../../../type/sections';

import { styled as MuiStyled } from '@mui/material';
import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/**
 *
 * @param props 프로젝트 사용 기술에 대한 값과 툴팁으로 사용될 hover 상태
 * @returns 프로젝트 스킬 모음
 */
export default function ProjectStackList(props: {
  isHover: string;
  setIsHover: Dispatch<SetStateAction<String>>;
  value: StackInfoType[];
}) {
  const { isHover, setIsHover, value } = props;

  const handleImageInteraction = (event: React.MouseEvent<HTMLElement, MouseEvent>, el: string) => {
    event.stopPropagation();
    if (event.type === 'mouseenter') {
      setIsHover(el);
    } else if (event.type === 'mouseleave') {
      setIsHover('');
    }
  };

  return (
    <React.Fragment>
      {value.map(item => (
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
    </React.Fragment>
  );
}

const DisplayImgWithTooltip = MuiStyled(motion.figure)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
}));
