import React from "react";

const Button = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={className + " btn"}>
      {children}
    </button>
  );
};

export default Button;
