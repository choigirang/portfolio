import Header from './components/common/Header/Header';
import React, { Suspense } from 'react';
import useSize from './hooks/useSize';

const About = React.lazy(() => import('./components/sections/About/Index'));
const Skills = React.lazy(() => import('./components/sections/Skills/Index'));
const Project = React.lazy(() => import('./components/sections/Project/Index'));

function App() {
  const { isMobile } = useSize();

  return (
    <>
      <Header />
      <div
        className="flex flex-col p-10 gap-10"
        style={{ paddingTop: isMobile ? 100 : 40, paddingLeft: isMobile ? 40 : 240 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Project />
        </Suspense>
      </div>
    </>
  );
}

export default App;
