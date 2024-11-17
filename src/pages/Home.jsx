import React from 'react';
import Intro from "../components/Intro.jsx";
import Section from "../components/Sections.jsx";
import Information from "../components/Information.jsx"


const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Intro />
      <Section />
      <Information />
    </main>
  )
  
}

export default App;