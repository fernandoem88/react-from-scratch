import React from "react";

const Layout = ({ children, title }) => {
  return (
    <div className="layout">
      <h1 className={"layout__header"}>{title}</h1>
      <div className="layout__content">{children}</div>
    </div>
  );
};

export default Layout;
