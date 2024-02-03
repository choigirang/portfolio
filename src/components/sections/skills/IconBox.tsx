import { Button, styled as MuiStyled } from '@mui/material';
import React from 'react';
import { IconBoxProps, SelectStackType, StackListProps } from '../../../type/sections';

export default function IconBox({ categoryData, stack, setStack }: IconBoxProps) {
  const iconImg = (key: string, value: SelectStackType) => {
    const url = 'https://cdn.simpleicons.org/';

    if (value.color === 'black') return url + key;
    else return url + key + '/' + value.color;
  };

  return (
    <Container>
      {categoryData &&
        Object.entries(categoryData).map(([key, value]) => (
          <IconBtn onClick={() => setStack(key)} key={key} $matchStack={stack === value.name} $stackColor={value.color}>
            <img src={iconImg(key, value)} alt="icon" width="50" height="50" />
          </IconBtn>
        ))}
    </Container>
  );
}

const Container = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  gap: 10,
  gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 100px))',
}));

const IconBtn = MuiStyled(Button)<{ $matchStack?: boolean; $stackColor: string }>(
  ({ $matchStack, $stackColor, theme }) => ({
    backgroundColor: `${$matchStack ? 'white' : '#1A1B24'}`,

    '&:hover': {
      backgroundColor: '#343434',
    },
  }),
);
