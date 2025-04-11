import { useState } from "react";
import poke from './assets/pokeapi_256.png'

function App() {

  

const Formulario = (props) => {

  const [nome, setNome] = useState("Memphis")

  return (
    <div>
      
      
      <input 
      className="nome"
      name="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      placeholder={props.sombra != null ? props.sombra : "Texto Padrao"}
      type="text" />
      <button
        className="botao"
      onClick={()=>{alert(nome)}}>
        Clique Here
      </button>

    </div>
  )
}

  return (
    <div>
      <h3>Pizzaria 2F</h3>
      <img src={poke} style={{widht:200, height:100}}/>
      <Formulario sombra="Digite se nome.." />
      <Formulario sombra="Digite se email.." />
      <Formulario sombra="(99)99999-9999" />

      <Formulario sombra="Coloque seu Cpf"/>
      <Formulario />
      
      <Formulario />

    </div>

  )
}

export default App