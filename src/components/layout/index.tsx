import React from "react";
import Navbar from "./navbar";

const Layout = (props: any) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
    </div>
  );
};

export default Layout;
