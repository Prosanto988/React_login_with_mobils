import React from 'react';
import Tilt from 'react-parallax-tilt';

function App() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex flex-col justify-center items-center">
      <div className="w-40-r h-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded-full absolute top-96 -left-20 animate-pulse"></div>
      <Tilt>
        <div className="container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm">
          <form className="h-full flex flex-col justify-evenly items-center">
            <div className="text-white text-2xl tracking-wider">Login form</div>
            <input type="text" placeholder="username" className="input-text" />
            <input type="password" placeholder="password" className="input-text"/>
            <input type="submit" className="cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80"/>
          </form>
        </div>
      </Tilt>
    </div>
  );
}

export default App;
