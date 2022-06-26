import React, { useState } from "react";

const CounterApp = (props) => {
  const { valor, mensaje } = props;

  const [counter, setCounter] = useState(valor);

  //Desestructuración de objetos
  // const usuario = {
  //   id: 1,
  //   username: "Pepe",
  //   rol: "Dev",
  //   horas: {
  //     time: 2,
  //   },
  // };

  // const { username, rol, horas } = usuario;

  // console.log("Username:", username);
  // console.log("Rol:", rol);
  // console.log(horas.time);

  //Desestructuración de arreglos

  // const pokemones = ["Pikachu", "Charizar", "Charmander"];

  // const [poke3, poke2, cualquiera] = pokemones;

  // console.log(cualquiera);

  const sumarValor = () => {
    setCounter(counter + 1);
  };

  const restarValor = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(valor);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Contador: {counter}</h3>
          <button className="btn btn-primary" onClick={sumarValor}>
            +1
          </button>
          <button className="btn btn-primary ms-2" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-primary ms-2" onClick={restarValor}>
            -1
          </button>
          <p>{mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;