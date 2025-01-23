import React from 'react';

function Menu({ toggledisplay1 }) {
  return (
    <div className="fixed bottom-0 h-12 w-full flex bg-gray-800 text-white">
      <button
        onClick={toggledisplay1}
        className="flex-1 flex items-center justify-center bg-black hover:bg-[#200000] transition-colors duration-300"
      >
        <p>Tab 1</p>
      </button>
      <button className="flex-1 flex items-center justify-center bg-black hover:bg-[#200000] transition-colors duration-300">
        <p>Tab 2</p>
      </button>
      <button className="flex-1 flex items-center justify-center bg-black hover:bg-[#200000] transition-colors duration-300">
        <p>Tab 3</p>
      </button>
    </div>
  );
}

export default Menu;
