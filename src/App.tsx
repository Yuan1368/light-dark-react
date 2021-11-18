import "./App.scss"

import React,{useState} from "react"
const App:React.FC = () => {

  const [theme, setTheme] = useState<string>("light")

  return (
    <div className="App" data-theme={theme}>
      <p>dark</p>
      <div>
        <button onClick={()=>{setTheme(theme==="light"?"dark":"light")}}>change Color </button>
      </div>
    </div>
  );
}

export default App;
