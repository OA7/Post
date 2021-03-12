import React from 'react';
import Type1 from './components/Type1';
import Type2 from './components/Type2';
import Type3 from './components/Type3';
import './App.css';
import Title from './components/Title';
function App() {
  return (
    <>
      <div>
        <header className="invite">
          Join 3500 Developers at Spectra March 17th
        </header>
      </div>
      <Title />
      <Type1 />
      <Type2 />
      <Type3 />
    </>
  );
}

export default App;
