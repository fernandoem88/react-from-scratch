import React from "react";
import classnames from "classnames";
import "./style.scss";

const MessageWrapper = ({ children, className = "", as = "div", ...props }) => {
  const Element = as;
  return (
    <Element {...props} className={classnames("message-wrapper", className)}>
      {children}
    </Element>
  );
};

export default MessageWrapper;
