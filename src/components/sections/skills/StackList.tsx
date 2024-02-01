import React, { useEffect, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import { allStack } from '../../../constant/info';
import { AllStackType, SelectStackType, StackListProps } from '../../../type/sections';

export default function StackList({ category, stackInfo, stack, setStack }: StackListProps) {
  const [categoryData, setCategoryData] = useState<{ [tech: string]: SelectStackType }>();
  const [detailStack, setDetailStack] = useState<SelectStackType>();
  // query 사용하기

  useEffect(() => {
    const mappingStack = allStack[category];
    const detailStack: SelectStackType = mappingStack[stack];

    setCategoryData(mappingStack);
    setDetailStack(detailStack);
  }, [stack]);

  return (
    <Container>
      <IconBox>
        {categoryData &&
          Object.entries(categoryData).map(([key, value]) => (
            <IconBtn
              onClick={() => setStack(key)}
              key={key}
              $matchStack={stack === value.displayName}
              $stackColor={value.color}>
              <img
                src={`https://cdn.simpleicons.org/${value.color !== 'black' ? key : key + '/' + value.color}`}
                alt="icon"
                width="50"
                height="50"
              />
            </IconBtn>
          ))}
      </IconBox>
      {detailStack && stackInfo && (
        <StackInfo $color={stackInfo.color}>
          <StackName $color={stackInfo.color}>
            <img src={`https://cdn.simpleicons.org/${detailStack.name}/white`} alt="icon" width="100" height="100" />
            <h3>{detailStack.name}</h3>
          </StackName>
          <StackDetail>
            <div>{detailStack.description}</div>
            <div>{detailStack.link}</div>
          </StackDetail>
        </StackInfo>
      )}
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
  backgroundColor: `${$color !== 'black' ? $color : '#1A1B24'}`,
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

  h3: {
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
