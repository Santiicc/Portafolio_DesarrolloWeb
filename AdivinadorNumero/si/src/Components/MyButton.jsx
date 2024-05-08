import React from "react";
import classes from "./mybutton.module.css"

const MyButton = ({ onClick, type, buttonStyle}) => {

  return (
    <button 
    onClick={onClick} 
    className={classes[buttonStyle]} >
      {type}
    </button>
  );
};

export default MyButton;
