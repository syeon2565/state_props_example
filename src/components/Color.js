import React, { useState } from "react";

const Text = () => {
  const [textColor, setTextColor] = useState("black");

  const handleChnageTextColor = (e) => {
    setTextColor(textColor === "black" ? "orange" : "black");
  };

  return (
    <>
      <button onClick={handleChnageTextColor}>색상 변경</button>
      <h1 style={{ color: textColor }}>색상변경</h1>
    </>
  );
};
export default Text;
