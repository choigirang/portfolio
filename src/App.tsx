import Header from './components/common/Header/Header';
import Footer from './components/layout/footer/Index';
import React from 'react';
import Summary from './components/sections/Summary/Index';

const About = React.lazy(() => import('./components/sections/About/Index'));
const Skills = React.lazy(() => import('./components/sections/Skills/Index'));
const Project = React.lazy(() => import('./components/sections/project/Index'));

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col p-10 pl-[240px] gap-10 width-layout">
        <Summary />
        <About />
        <Skills />
        {/* <Project />*/}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
