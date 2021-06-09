import React, { useState } from 'react';
import './style.css';

// Usando hooks, vamos a declarar un contador, y por medio de un boton y un evento de click, vamos a ir mostrando por pantalla la cntidad de clicks que hemos hecho y adicionalmente vamos a mostrar la fecha.

const Component = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toString())

  return (
    <div>
      <h1>Mi boyon contador</h1>
      <p>Button down!</p>
      <button onClick={() => {
        setCount(count + 1)
        setDate(new Date().toString())
        }
      }>
        Me has presionado {count} veces!
      </button>
      <div style={{marginTop: 10}}>
        {date}
      </div>
    </div>
  );
};
export default Component;

