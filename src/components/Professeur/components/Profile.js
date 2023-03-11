import React from 'react';


function Profile (props){
    return (
      <div className={`profile ${props.className}`} style={props.style}>
        <img
          src={props.image}
          alt={props.alt}
          style={{ width: props.width, height: props.width }}
        />
      </div>
    );
  }; 