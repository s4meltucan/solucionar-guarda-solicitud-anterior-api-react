import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';


const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('')

  useEffect(() => {
    console.log(localStorage.getItem("nombreApi"));
    if(localStorage.getItem("nombreApi")){
        setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje));
  }, [nombrePersonaje]);

  return(
    <div className='container'>
        <h1>App Rick and Morty</h1>
        <Formulario setNombrePersonaje = {setNombrePersonaje}/>
        <PintarDatos nombrePersonaje = {nombrePersonaje} />
    </div>
  )
}

export default App

//   const[contador, setContador] = useState(0)

  //   useEffect(() => {
  //     console.log(`contador: ${contador}`);
  //   }, [contador]);

  //   const resta = () => setContador( contador - 1 )

  // return (
  //   <div className='container'>
  //       <h1>App Rick and Morty</h1>
  //       <h1>{contador}</h1>
  //       <button onClick={() => setContador( contador + 1 )}> aumentar  </button>
  //       <button onClick={resta}> -1  </button>
    
  //   </div>
  // )