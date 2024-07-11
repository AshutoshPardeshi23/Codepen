import { useContext } from 'react'
import Editar from './Editar'
import { DiHtml5 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiJsBadge } from 'react-icons/di' 
import { DetaContext } from '../context/DetaProvider'

function Choise_1() {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DetaContext);
  return (
    <>
      <div className='flex bg-cyan-300 mb-3 overflow-hidden '>
    
        <Editar
          heading='HTML' 
          icons={<DiHtml5 color='red'/>}  
          value={html} 
          onChange={setHtml} 
        />

        <Editar 
          heading='CSS'  
          icons={<DiCss3 color='blue'/>}  
          value={css}
          onChange={setCss}
        />

        <Editar 
          heading='JS'   
          icons={<DiJsBadge color='yellow'/>}
          value={js} 
          onChange={setJs} 
        />

      </div>
    </>
  )
}

export default Choise_1

