import React, { useEffect, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import { allStack } from '../../../constant/info';
import { SelectStackType, StackListProps } from '../../../type/sections';

export default function StackList({ category, stackInfo, stack, setStack }: StackListProps) {
  const mappingStack = allStack[category];
  const detailStack: SelectStackType = mappingStack[stack];

  return (
    <Container>
      <IconBox>
        {mappingStack &&
          Object.entries(mappingStack).map(([key, value]) => (
            <IconBtn
              onClick={() => setStack(key)}
              key={key}
              $matchStack={stack === value.title}
              $stackColor={value.color}>
              <img src={`https://cdn.simpleicons.org/${key}`} alt="icon" width="50" height="50" />
            </IconBtn>
          ))}
      </IconBox>
      <StackInfo $color={stackInfo.color}>
        {mappingStack && (
          <React.Fragment>
            <StackName $color={stackInfo.color}>
              <img src={`https://cdn.simpleicons.org/${detailStack.title}/white`} alt="icon" width="100" height="100" />
              <h2>{detailStack.name}</h2>
            </StackName>
            <StackDetail>
              <div>{detailStack.description}</div>
              <div>{detailStack.link}</div>
            </StackDetail>
          </React.Fragment>
        )}
      </StackInfo>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  alignItems: 'center',
  justifyContent: 'center',

  '.title': {
    color: 'white',
  },
}));

const IconBox = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  gap: 10,
  gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 100px))',
}));

const IconBtn = MuiStyled(Button)<{ $matchStack?: boolean; $stackColor: string }>(
  ({ $matchStack, $stackColor, theme }) => ({
    backgroundColor: `${$matchStack ? 'white' : '#1A1B24'}`,
  }),
);

const StackInfo = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'grid',
  padding: '5%',
  backgroundColor: $color,
  color: 'white',
  borderRadius: 10,
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'minmax(100px, 200px) auto',
}));

const StackName = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,

  h2: {
    color: $color,
    fontWeight: 600,
    backgroundColor: 'white',
    padding: '5px 20px',
    borderRadius: 10,
  },
}));

const StackDetail = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
}));
