import { IconBoxProps, SelectStackType } from '../../../type/sections';

import { Button, styled as MuiStyled } from '@mui/material';

/**
 * 스킬 메인페이지에서 데이터 넘겨받음
 * @param categoryData 메인 페이지에서 선택한 카테고리 (프론트엔드, 백엔드, 툴 등)
 * @param stack 선택한 스택 (프론트엔드 - 리액트, 쿼리 등)
 * @returns 스택에 관한 아이콘 매핑
 */
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

  /* 타블렛 */
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    gridTemplateColumns: 'repeat(50px)',
  },

  /* 모바일 */
  '@media screen and (max-width:767px)': {
    gridTemplateColumns: 'repeat(auto-fit,70px)',
  },
}));

const IconBtn = MuiStyled(Button)<{ $matchStack?: boolean; $stackColor: string }>(
  ({ $matchStack, $stackColor, theme }) => ({
    backgroundColor: `${$matchStack ? 'white' : '#1A1B24'}`,

    '&:hover': {
      backgroundColor: '#343434',
    },
  }),
);
