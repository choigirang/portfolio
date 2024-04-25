import Header from './components/common/Header/Header';
import Footer from './components/layout/footer/Index';
import React from 'react';
import Summary from './components/sections/Summary/Index';

const About = React.lazy(() => import('./components/sections/about/Index'));
const Skills = React.lazy(() => import('./components/sections/skills/Index'));
const Project = React.lazy(() => import('./components/sections/project/Index'));
const Contact = React.lazy(() => import('./components/sections/contact/Index'));

function App() {
  return (
    <div className="flex bg-[#0F1015]">
      <Header />
      <div className="relative flex flex-col p-10 gap-10 width-layout">
        <Summary />
        {/* <About />
        <Skills />
        <Project />
        <Contact /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
