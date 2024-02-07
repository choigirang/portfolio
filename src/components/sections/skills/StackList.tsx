import { useEffect, useState } from 'react';
import IconBox from './IconBox';
import StackInfo from './StackInfo';

import { allStack } from '../../../constant/info';
import { SelectStackType, StackListProps } from '../../../type/sections';

import { styled as MuiStyled } from '@mui/material';

/**
 *
 * @param category 선택한 카테고리 정보
 * @param stack 선택한 스택
 * @param stackInfo 선택한 스택에 대한 정보
 * @param setStack 스택 설정
 * @returns 아이콘 목록과 스택 정보
 */
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
