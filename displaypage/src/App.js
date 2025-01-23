import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu.js';
import Display1 from './components/Display1.js';

function App() {
  const [showdisplay1, setshowdisplay1] = useState(false);

  function toggledisplay1() {
    console.log("Display1 toggled");
    setshowdisplay1(!showdisplay1);
  }

  return (
    <div className="min-h-screen bg-custom-gradient">
      {showdisplay1 && <Display1 />}
      <Menu toggledisplay1={toggledisplay1} />
    </div>
  );
}

export default App;
