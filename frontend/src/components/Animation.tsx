
// import React from 'react';

const Animation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="flex items-center space-x-2">
        <span className="text-5xl font-extrabold animate-moveLeft">&lt;</span>
        <span className="text-5xl font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 animate-pop">Priyanshu</span>
        <span className="text-5xl font-extrabold animate-moveRight">&gt;</span>
      </div>
    </div>
  );
};

export default Animation;
