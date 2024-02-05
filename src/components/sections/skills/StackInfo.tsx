import React from 'react';
import { Button, styled as MuiStyled } from '@mui/material';
import { SelectStackType } from '../../../type/sections';

export default function StackInfo(props: {
  stackInfo: SelectStackType | undefined;
  detailStack: SelectStackType | undefined;
}) {
  const { stackInfo, detailStack } = props;

  const mappingDescription = (des: string[], link: string | string[]) => {
    if (!Array.isArray(link)) return;

    return des.map((each, idx) =>
      link[idx] !== '' ? (
        <Description href={link[idx]} target="_blank" key={each}>
          • {each}
        </Description>
      ) : (
        <span>• {each}</span>
      ),
    );
  };

  if (!stackInfo || !detailStack) return <div>스택에 관한 정보가 없습니다.</div>;

  return (
    <Container $color={stackInfo.color}>
      <StackName $color={stackInfo.color}>
        <img src={`https://cdn.simpleicons.org/${detailStack.name}`} alt="icon" width="100" height="100" />
        <h3>{detailStack.displayName}</h3>
      </StackName>
      <StackDetail>{mappingDescription(detailStack.description, detailStack.link)}</StackDetail>
    </Container>
  );
}

const Container = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'grid',
  padding: '5%',
  backgroundColor: '#1A1B24',
  color: 'white',
  borderRadius: 10,
  gridTemplateRows: '1fr',
  gridTemplateColumns: 'minmax(100px, 200px) auto',
  gap: 50,
}));

const StackName = MuiStyled('div')<{ $color: string }>(({ $color, theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,

  h3: {
    color: 'white',
    textShadow: '3px 3px 3px #424242',
    fontWeight: 600,
    backgroundColor: $color,
    padding: '5px 20px',
    borderRadius: 10,
  },
}));

const StackDetail = MuiStyled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
}));

const Description = MuiStyled('a')(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));
