import React from "react";
import ReactDOM from "react-dom";

import vars from "./variables.module.scss";
import style from "./style.module.scss";

console.log(vars);

ReactDOM.render(
  <h1 className={style.red}>Hello React libindi!</h1>,
  document.getElementById("app-root")
);
