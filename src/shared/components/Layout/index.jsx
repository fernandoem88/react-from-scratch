import React from "react";
import "./style.scss";

const Layout = ({ children, header, footer }) => {
  return (
    <div className="layout">
      {!!header && <header className={"layout__header"}>{header}</header>}
      <div className="layout__content">{children}</div>
      {!!footer && <footer className="layout__footer">{footer}</footer>}
    </div>
  );
};

export default Layout;
