import React from "react";
import { useState } from "react";
import divider from "../assets/pattern-divider-desktop.svg";
import mobileDivider from "../assets/pattern-divider-mobile.svg"
import iconDice from "../assets/icon-dice.svg";

const AdviceApp = () => {
  const [advice, setAdvice] = useState({
    heading: "115",
    text: "One of the top five regrets people have is that they didn't have the courage to be their true self.",
  });
  const url = "https://api.adviceslip.com/advice";
  const fetchAdvice = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setAdvice({ heading: data.slip.id, text: data.slip.advice });
  };
  return (
    <div className="advice-div">
      <h5>ADVICE #{advice.heading}</h5>
      <p>"{advice.text}"</p>
      <img src={divider} className="divider" />
      <img src={mobileDivider} className="mobileDivider" />

      <button onClick={fetchAdvice}>
        <img src={iconDice} />
      </button>
    </div>
  );
};

export default AdviceApp;
