import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#212531",
      }}
    >
      <span className="loader" />
    </div>
  );
};

export default Loader;
