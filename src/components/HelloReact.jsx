/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const HelloReact = ({ nama, umur, buahKegemaran }) => {
  const [isMerah, setMerah] = useState(true);
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    // Immutability
    alert("Hello!");
    setMerah((prevState) => {
      return !prevState;
    });
  };

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  return (
    <>
      <p>Merah: {isMerah.toString()}</p>
      <button onClick={handleClick}>Tukar state</button>
      <input value={userInput} onChange={handleInput} />
      <p>{nama}</p>
      <p>{umur}</p>
      {buahKegemaran.map((buah) => {
        return <p key={buah}>{buah}</p>;
      })}
    </>
  );
};

export default HelloReact;
