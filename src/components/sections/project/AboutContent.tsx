import React from 'react';
import { ProjectDetailType } from '../../../type/sections';
import { styled as MuiStyled } from '@mui/material';

export default function AboutContent(props: ProjectDetailType) {
  const { name, description, github, stack, link } = props;

  const floorItems = [
    { title: '프로젝트명', value: name },
    { title: '설명', value: description },
    { title: '깃허브', value: github },
    { title: '스택', value: stack.frontend.concat(stack.backend).join(', ') },
    { title: '링크', value: link },
  ];

  return (
    <Container>
      {floorItems.map((item, index) => (
        <Floor key={index}>
          <Title>{item.title} :</Title>
          <Text>{item.value}</Text>
        </Floor>
      ))}
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
}));

const Floor = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
}));

const Title = MuiStyled('p')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Text = MuiStyled('p')(({ theme }) => ({
  color: 'white',
}));
