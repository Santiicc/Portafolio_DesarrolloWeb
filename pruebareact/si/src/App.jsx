import { useState } from 'react'
import MyCont from './Components/Contador';


function App() {


  const [count, setCount] = useState(0)

  return(
    <div id='cont'>
      <h1>Contador</h1>
      <MyCont></MyCont>
    </div>
    
  );
}

export default App;