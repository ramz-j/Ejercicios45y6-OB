import React, { useEffect, useState } from 'react'

const Clock = () => {

  const stateInitial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martin',
    apellidos: 'San Jose'
  }

  const [state, setState] = useState(stateInitial);

  function tick(){
    setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad
      }
    });
  }

  useEffect(() => {

    const timerID = setInterval (
      () => tick(), 1000
    );

    return () => {
      clearInterval(timerID);
    }

  }, [])
  

  return (
    <div>
      <h2>Hola Actual: {state.fecha.toLocaleTimeString()}</h2>
      <h3>{state.nombre} {state.apellidos}</h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  )
}

export default Clock;