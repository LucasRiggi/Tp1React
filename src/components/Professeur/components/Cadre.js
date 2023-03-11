import React from "react";

const Cadre = (props) => {
  return (
    <div className={`cadre ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Cadre;