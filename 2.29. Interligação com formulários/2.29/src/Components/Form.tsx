import { useState } from "react"

export default function Form () {
  const [name, setName] = useState('Leandro')
  return <div>
    <input 
      placeholder="Nome"
      type="text"
      value={name}
      onChange={e => console.log(e.target.value)}
    />  
    <div>
      { name }
    </div>
  </div>
}