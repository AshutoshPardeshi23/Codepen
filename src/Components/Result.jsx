import { useContext, useState, useEffect, Children } from "react"
import { DetaContext } from '../context/DetaProvider'

function Result() {
    const [scr, setScr] = useState('')
    const { html, css, js } = useContext(DetaContext);
    const  srcCode =//.props.children[0].props.children[1]
    `   <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>             
    `
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setScr(src);
        }, 1000);

        return () => clearInterval(timeOut);
    }, [html, css, js])
  return (
    <div className=" h-svh">  
      <iframe
      srcDoc={srcCode}
      title="Output"
      sandbox="allow-scripts"
      frameBorder={0}
      width='100%'
      height='100%' 
      />
    </div>
  )
}

export default Result
