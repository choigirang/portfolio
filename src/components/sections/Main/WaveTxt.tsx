import { styled as MuiStyled } from '@mui/material';
import { textWave, textWaveSecond } from '../../../styles/keyframe';
export default function WaveTxt() {
  return (
    <Container>
      <div className="frontend">
        <h2 className="first">Frontend</h2>
        <h2 className="second">Frontend</h2>
        <h2 className="third">Frontend</h2>
      </div>
      <div className="portfolio">
        <h2 className="fourth">Portfolio</h2>
      </div>
    </Container>
  );
}

const Container = MuiStyled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Russo One',
  fontSize: 100,

  '.frontend': {
    position: 'relative',
    height: 200,
  },
  '.first': {
    color: 'white',
    WebkitTextStroke: '5px #38b3ff',
    zIndex: -1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  '.second': {
    color: '#83cfff',
    animation: `${textWave} 4s ease-in-out infinite`,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '.third': {
    color: '#009dff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    animation: `${textWave} 2s ease-in-out infinite`,
    transform: 'translate(-50%, -50%)',
  },

  '.fourth': {
    fontSize: 100,
    color: 'white',
  },

  ...(theme.palette.mode === 'dark' && {
    '.first': {
      color: '#0d6093',
      WebkitTextStroke: '5px #0d6093',
      zIndex: -1,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    '.third': {
      color: '#1f74a9',
      position: 'absolute',
      top: '50%',
      left: '50%',
      animation: `${textWave} 2s ease-in-out infinite`,
      transform: 'translate(-50%, -50%)',
    },
  }),
}));
