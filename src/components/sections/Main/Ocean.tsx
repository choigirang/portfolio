import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface MouseState {
  x: number;
  y: number;
  mousedown: boolean;
  power: number;
}

interface Point {
  x: number;
  y: number;
  vy: number;
  vx: number;
  mass: number;
}

interface Wave {
  points: Point[];
}

const NUM_POINTS = 50;
const SPRING_CONSTANT = 0.1;
const SPRING_CONSTANT_BASELINE = 0.005;
const DAMPING = 0.89;
const POINT_MASS = 1;
const SHOW_VERTS = false;
const POINT_RADIUS = 4;
const INTERACTIVE_SPREAD = Math.ceil(NUM_POINTS / 4);
const MOUSE_POW = 0.002;

const OceanContainer = styled.canvas`
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-image: linear-gradient(to top, rgb(0, 50, 150) 0%, rgb(0, 150, 255) 50%);
`;

const Ocean = () => {
  const [mouse, setMouse] = useState<MouseState>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    mousedown: false,
    power: 15,
  });

  const [wave, setWave] = useState<Wave | null>(null);

  const setCanvasSize = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth * window.devicePixelRatio || 1;
    canvas.height = window.innerHeight * window.devicePixelRatio || 1;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    constructWave();
  };

  const constructWave = () => {
    const padding = 60 * window.devicePixelRatio;
    const points = NUM_POINTS;

    const y = window.innerHeight / 2;

    const p1: Point = { x: 0, y, vy: 0, vx: 0, mass: POINT_MASS };
    const p2: Point = { x: window.innerWidth, y, vy: 0, vx: 0, mass: POINT_MASS };

    setWave(prevWave => ({
      ...prevWave,
      points: [p1, p2],
    }));
  };

  const handleMouse = (event: MouseEvent) => {
    const x = event.clientX * window.devicePixelRatio;
    const y = event.clientY * window.devicePixelRatio;
    setMouse(prevMouse => ({ ...prevMouse, x, y }));
  };

  const handleMousedown = () => {
    setMouse(prevMouse => ({ ...prevMouse, mousedown: true }));
  };

  const handleMouseup = () => {
    setMouse(prevMouse => ({ ...prevMouse, mousedown: false }));
  };

  const handleClick = (event: MouseEvent) => {
    const x = event.clientX * window.devicePixelRatio;
    setMouse(prevMouse => ({ ...prevMouse, x }));
  };

  const updateWavePower = () => {
    const max = 10;

    setMouse(prevMouse => ({
      ...prevMouse,
      power: prevMouse.mousedown && prevMouse.power > max ? max : prevMouse.power + 0.1,
    }));
  };

  const triggerWave = (x: number, y: number) => {
    if (!wave) return;
    let closestPoint = {};
    let closestDistance = -1;
    const points = wave.points;
    let idx = 0;

    for (let n = 0; n < points.length; n++) {
      const p = points[n];
      const distance = Math.abs(x - p.x);

      if (closestDistance === -1 || distance <= closestDistance) {
        closestPoint = p;
        closestDistance = distance;
        idx = n;
      }
    }

    const halfHeight = window.innerHeight / 2;
    const dy = y - halfHeight;
    const spread = INTERACTIVE_SPREAD;
    const mod = (idx - spread) % points.length;
    const start = mod < 0 ? points.length + mod : mod;
    const length = spread * 2 + 1;

    let rad = 0;
    const radInc = Math.PI / length;

    for (let n = 0; n < length; n++) {
      const i = (start + n) % points.length;
      const point = points[i];
      const pow = Math.sin(rad) * dy * MOUSE_POW * mouse.power;
      point.vy += pow;
      rad += radInc;
    }
  };

  const updateWave = () => {
    if (!wave) return;

    const points = wave.points;

    for (let n = 0; n < points.length; n++) {
      const p = points[n];
      let force = 0;
      let forceFromLeft;
      let forceFromRight;

      if (n === 0) {
        let dy = points[points.length - 1].y - p.y;
        forceFromLeft = SPRING_CONSTANT * dy;
      } else {
        let dy = points[n - 1].y - p.y;
        forceFromLeft = SPRING_CONSTANT * dy;
      }

      if (n === points.length - 1) {
        let dy = points[0].y - p.y;
        forceFromRight = SPRING_CONSTANT * dy;
      } else {
        let dy = points[n + 1].y - p.y;
        forceFromRight = SPRING_CONSTANT * dy;
      }

      let dy = window.innerHeight / 2 - p.y;
      const forceToBaseline = SPRING_CONSTANT_BASELINE * dy;

      force += forceFromLeft;
      force += forceFromRight;
      force += forceToBaseline;

      const acceleration = force / p.mass;

      p.vy = DAMPING * p.vy + acceleration;
      p.y = p.y + p.vy;
    }
  };

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.width = window.innerWidth * window.devicePixelRatio || 1;
    canvas.height = window.innerHeight * window.devicePixelRatio || 1;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    constructWave();

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousedown', handleMousedown);
    window.addEventListener('mouseup', handleMouseup);
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('click', handleClick);

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const render = () => {
      drawBackground(ctx);
      drawCurve(ctx, wave);
      SHOW_VERTS && drawVerts(ctx, wave);
      drawMouse(ctx, mouse);

      if (mouse.mousedown) {
        const { x, y } = mouse;
        triggerWave(x, y);
      }

      updateWavePower();
      updateWave();

      window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousedown', handleMousedown);
      window.removeEventListener('mouseup', handleMouseup);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('click', handleClick);
    };
  }, [mouse, wave]);

  return <OceanContainer id="canvas"></OceanContainer>;
};

const drawBackground = (ctx: CanvasRenderingContext2D) => {
  const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
  gradient.addColorStop(0, '#beb1ed');
  gradient.addColorStop(1, '#ea839b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
};

const drawCurve = (ctx: CanvasRenderingContext2D, wave: Wave | null) => {
  if (!wave) return;
  ctx.lineCap = 'round';
  ctx.lineWidth = 3 * window.devicePixelRatio;
  ctx.strokeStyle = '#b224ef';

  const highestPoint = Math.min.apply(
    Math,
    wave.points.map(o => o.y),
  );

  const gradient = ctx.createLinearGradient(0, highestPoint, 20, window.innerHeight + highestPoint / 4);
  gradient.addColorStop(0, 'rgba(124, 231, 249, 0.7)');
  gradient.addColorStop(0.5, 'rgba(72, 197, 239, 0.8)');
  gradient.addColorStop(1, '#1380b2');
  ctx.fillStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(wave.points[0].x, wave.points[0].y);

  for (let n = 0; n < wave.points.length - 1; n++) {
    const p1 = wave.points[n];
    const p2 = wave.points[n + 1];

    const cpx = (p1.x + p2.x) / 2;
    const cpy = (p1.y + p2.y) / 2;

    if (n === wave.points.length - 2) {
      ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    } else {
      ctx.quadraticCurveTo(p1.x, p1.y, cpx, cpy);
    }
  }

  ctx.lineTo(window.innerWidth, window.innerHeight);
  ctx.lineTo(0, window.innerHeight);

  ctx.closePath();
  ctx.fill();
};

const drawVerts = (ctx: CanvasRenderingContext2D, wave: Wave | null) => {
  if (!wave) return;
  ctx.lineWidth = 2 * window.devicePixelRatio;
  ctx.strokeStyle = '#009efd';

  wave.points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, POINT_RADIUS * window.devicePixelRatio, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });
};

const drawMouse = (ctx: CanvasRenderingContext2D, mouse: MouseState) => {
  ctx.lineWidth = 2 * window.devicePixelRatio;

  if (mouse.mousedown) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.strokeStyle = '#537895';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 16 * window.devicePixelRatio * mouse.power, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.strokeStyle = mouse.mousedown ? '#ed6ea0' : '#537895';

  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 16 * window.devicePixelRatio, 0, Math.PI * 2, true);
  ctx.closePath();
  mouse.mousedown && ctx.fill();
  ctx.stroke();
};

export default Ocean;
