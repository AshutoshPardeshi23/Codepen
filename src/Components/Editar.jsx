import React, { useState } from 'react'
import { IoMdSettings } from 'react-icons/io'
import { GoChevronDown } from 'react-icons/go'
import { Controlled as ControlleEditor } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';
import { VscLaw } from 'react-icons/vsc';

const Editar = ({ heading, icons, value, onChange }) => {

  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <>
      <div className={`w-4/12 ml-1 ${ open ? 'w-6/12':'w-4/12'}`}>

        <div className=' justify-between flex bg-zinc-600'>

          <div className='logo gap-2 pt-1 text-center flex pr-1 pl-1'>
            <div className=' mt-1'>{icons}</div>
            {heading}
          </div>

          <div className='flex gap-2 mt-1'>
            <p className='bg-zinc-600' > <IoMdSettings /> </p>
            <p className=' bg-zinc-600 mr-1' onClick={() => { setOpen(prevState => !prevState)}} ><GoChevronDown /></p>
          </div>
        </div>

        <div className=' h-56 w-full'>
          < ControlleEditor className='controlled-editor'
           value={value}
           onBeforeChange={handleChange}
            options={{
              theme: 'material',
              lineNumbers: true
            }} />
        </div>
      </div>
    </>
  )
}

export default Editar
