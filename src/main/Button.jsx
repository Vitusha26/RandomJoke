import React from "react";

export default function Button({ onClick, text }) {
  return (
    <button className="buttonFact" onClick={onClick}>
      {text}
    </button>
  );
}
