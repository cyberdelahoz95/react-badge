import React from "react";
import Navbar from "./NavBar";

const Layout = props => {
  const { children } = props;

  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
