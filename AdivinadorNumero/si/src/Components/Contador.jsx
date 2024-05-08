import React, { useState } from "react";
import MyButton from "./MyButton";

const MyCont = () => {
  const [numero, setContador] = useState(randomNumberInRange(0, 100));
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [encontrado, setEncontrado] = useState(false);

  const mayor = () => {
    setMin(numero + 1);
    const newNumber = randomNumberInRange(numero + 1, max);
    setContador(newNumber);
  };

  const menor = () => {
    setMax(numero - 1);
    const newNumber = randomNumberInRange(min, numero - 1);
    setContador(newNumber);
  };

  const reiniciar = () => {
    const newNumber = randomNumberInRange(0, 100);
    setContador(newNumber);
    setMin(0);
    setMax(100);
    setEncontrado(false);
  };

  const esEse = () => {
    setEncontrado(true);
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <h1>{numero}</h1>
      <MyButton onClick={menor} type="Menor" buttonStyle="blue" />
      <MyButton onClick={mayor} type="Mayor" buttonStyle="green" />
      <MyButton onClick={reiniciar} type="Reiniciar" buttonStyle="orange" />
      <MyButton onClick={esEse} type="¡Es ese!" buttonStyle="red" />
      {encontrado && (
        <p>
         🎉 ¡Encontraste el numero! 🎉
        </p>
      )}
    </div>
  );
};

export default MyCont;
