import { styled as MuiStyled } from '@mui/material';
import { planeAni, planeContainerAni } from '../../../styles/keyframe';

export default function Plane() {
  return (
    <Container>
      <StyledPlane
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1131.53 379.304"
        enable-background="new 0 0 1131.53 379.304">
        <polygon points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223" />
        <polygon points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102" />
      </StyledPlane>
    </Container>
  );
}

const Container = MuiStyled('div')({
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  top: '10%',
  animation: `${planeContainerAni} 2s alternate infinite`,
});

const StyledPlane = MuiStyled('svg')({
  width: '200px',
  height: '150px',
  animation: `${planeAni} 4s forwards infinite`,

  '& polygon:nth-of-type(1)': {
    fill: '#f5f5f5',
  },

  '& polygon:nth-of-type(2)': {
    fill: '#e3e3e3',
  },
});
