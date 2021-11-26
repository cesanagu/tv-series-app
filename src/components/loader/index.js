import React from "react";
import loaderSrc from "../../assets/Rhombus.gif";

const Loader = () => (
  <div>
    <img
      style={{ width: 55, marginTop: 20 }}
      alt="Loader icon"
      src={loaderSrc}
    />
  </div>
);

export default Loader;
