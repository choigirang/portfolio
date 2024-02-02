import React from 'react';
import { styled as MuiStyled } from '@mui/material';

export default function DescriptionContent(props: { selectFlip: boolean; description: Array<string> }) {
  const { selectFlip, description } = props;

  return (
    <BackContent selectFlip={selectFlip}>
      <FlipTxt selectFlip={selectFlip}>
        {description.map(item => (
          <div>
            <span>✅</span>
            <span>{item}</span>
          </div>
        ))}
      </FlipTxt>
    </BackContent>
  );
}

const BackContent = MuiStyled('div')<{ selectFlip: boolean }>(({ selectFlip, theme }) => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  padding: '5%',
  backfaceVisibility: 'hidden',
  visibility: selectFlip ? 'visible' : 'hidden',
  transition: 'all 1s',
  color: 'white',
  overflow: 'scroll',

  ...(!selectFlip && {
    visibility: 'hidden',
  }),
}));

const FlipTxt = MuiStyled('div')<{ selectFlip: boolean }>(({ selectFlip, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  visibility: selectFlip ? 'visible' : 'hidden',
  transform: selectFlip ? 'rotateY(180deg)' : 'rotateY(0)',
  gap: 30,

  div: {
    display: 'flex',
    gap: 20,
  },

  span: {
    lineHeight: '20px',
  },
}));
