import React, { useState } from "react";

const Text = () => {
  const [text, setText] = useState("LIKELION");

  const changeText = (e) => {
    setText(text === "LIKELION" ? "REACT" : "LIKELION");
  };

  return (
    <>
      <button onClick={changeText}>글자 변경</button>
      <h1>{text}</h1>
    </>
  );
};
export default Text;
