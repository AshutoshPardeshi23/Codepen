import { createContext, useState } from 'react'

export const DetaContext = createContext();

const DetaProvider = ({ children }) => {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  if(html.length === 0 && css.length === 0 && js.length === 0){
    setHtml("<h1>Hello Word </h1> \n <button class='click'> Click Mi!</button>");
    setCss(".feed{ \n color: #643;\n }\n \n h1{\n color: #682;\n }\n \n .click{\n height: px;\n width: 100px; \n background-color: rgb(255, 188, 43);\n border: none;\n border-radius: 10px;\n } \n");
    setJs("let btn = document.querySelector('.click');\n let text = document.querySelector('h1');\n btn.addEventListener('click', () => {\n text.classList.toggle('feed');\n });\n");
  }

  return (
    <DetaContext.Provider 
        value={{
          html,
          setHtml,
          css,
          setCss,
          js,
          setJs
        }}
        > 
      { children }
    </DetaContext.Provider>
  )
}

export default DetaProvider
