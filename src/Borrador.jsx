import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // Estado para almacenar el nombre ingresado
  
  const [input, setInput] = useState('');
  const listarapida = [1,2,3,4,5,6,7]
  return (
    <div>
      {
        listarapida.map((_, index) => <Card key={index} numero={index}/> )
      }
      
      {
        input.toLowerCase() === 'love' ?
        <h1>Si!</h1>
        :
        input === '' ?
        <h1>International...?</h1>
        :
        <h1>NO FLACO, INTERNATIONAL NO ES {input}, MAS MAOR</h1>
      }
      <input
        type="text"
        placeholder="Respuesta"
        value={input}
        onChange = {(e) => setInput(e.target.value)}
      />
    </div>
  );
}
export default App