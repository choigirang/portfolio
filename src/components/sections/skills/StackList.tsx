import React, { useEffect, useState } from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import { allStack } from '../../../constant/info';
import { AllStackType, SelectStackType, StackListProps } from '../../../type/sections';
import IconBox from './IconBox';
import StackInfo from './StackInfo';

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

  const iconProps = { categoryData, stack, setStack };
  const infoProps = { stackInfo, detailStack };

  return (
    <Container>
      <IconBox {...iconProps} />
      <StackInfo {...infoProps} />
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  alignItems: 'center',
  justifyContent: 'center',

  '.title': {
    color: 'white',
  },
}));
