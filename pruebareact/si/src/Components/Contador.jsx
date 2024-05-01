import React, { useState } from "react";
import MyButton from "./MyButton";

const MyCont = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <MyButton onClick={sumar} type="sumar" buttonStyle='blue'/>
      <MyButton onClick={restar} type="restar"  buttonStyle='green'/>
      <MyButton onClick={reiniciar} type="reiniciar"  buttonStyle='red'/>
    </div>
  );
};

export default MyCont;
