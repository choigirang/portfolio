import React, { Dispatch, SetStateAction } from 'react';
import { styled as MuiStyled } from '@mui/material';
import { Variants, motion } from 'framer-motion';
import { String } from 'aws-sdk/clients/acm';
import { StackInfoType } from '../../../type/sections';
import Tooltip from './Tooltip';

const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

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
