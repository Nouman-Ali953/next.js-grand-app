import React from "react";
import "./tooltip.css";

const Tooltip = ({ title,children }) => {
  return (
    <>
      <li className="tooltip fade" data-title={title}>{children}</li>
    </>
  );
};

export default Tooltip;
