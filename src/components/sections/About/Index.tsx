import React from 'react';
import { styled as MuiStyled } from '@mui/material';
import TextContainer from './TextContainer';
import { profileInfo } from '../../../constant/info';
import ProfileCard from './ProfileCard';

export default function About() {
  const firstRowEntries = Object.entries(profileInfo).slice(0, 3);
  const secondRowEntries = Object.entries(profileInfo).slice(3);

  return (
    <Container id="about">
      <Title>
        <p>🧑🏻‍💻</p>
        <p>소개</p>
      </Title>
      <TextContainer />
      {/* First Row */}
      <ProfileContainer>
        {firstRowEntries.map(([key, value]) => (
          <ProfileCard key={key} name={key} value={value} />
        ))}
      </ProfileContainer>
      {/* Second Row */}
      <ProfileContainer>
        {secondRowEntries.map(([key, value]) => (
          <ProfileCard key={key} name={key} value={value} />
        ))}
      </ProfileContainer>
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 50,
  gap: 20,
});

const Title = MuiStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  fontSize: 32,

  p: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 700,
  },
}));

const ProfileContainer = MuiStyled('ul')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  marginTop: 50,
  columnGap: 100,
  rowGap: 50,
  gridTemplateRows: 'repeat(1, 200px)',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
}));
