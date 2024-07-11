import React from 'react';
import { BiLogoCodepen } from 'react-icons/bi';
import Code from './Components/Choise_1';
import Result from './Components/Result';

function App() {
  return (
    <>
      <div className=' w-screen bg-cyan-300 justify-between '>
        <BiLogoCodepen size={300} />
      </div>
      <Code />
      <Result/>
    </>
  )
}

export default App
