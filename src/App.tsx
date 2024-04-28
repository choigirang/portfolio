import Header from './components/common/Header/Header';
import React, { Suspense } from 'react';

const About = React.lazy(() => import('./components/sections/About/Index'));
const Skills = React.lazy(() => import('./components/sections/Skills/Index'));
const Project = React.lazy(() => import('./components/sections/Project/Index'));

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-10 pl-[240px] gap-10 width-layout">
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
