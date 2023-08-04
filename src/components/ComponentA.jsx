/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ComponentA = ({ nomborA, warnaLatar }) => {
  // Immutability
  const [isLapar, setIsLapar] = useState(true);
  const [nama, setNama] = useState("");
  const [bgColor, setBgColor] = useState("blue");

  const handleButton = () => {
    alert("Nyam nyam nyam");

    setIsLapar(false);
  };

  const handleInput = (event) => {
    setNama(event.target.value);
  };

  const handleColor = (color) => {
    setBgColor(color);
  };

  useEffect(() => {
    // Mounting & Updating
    // if (nama.toLowerCase() === "najmi") {
    //   alert("IMPOSTOR!");
    // }

    // // Unmounting
    // return () => {
    //   alert("Keluar ke tu?");
    // };
    const element = document.getElementById("warna");
    element.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: warnaLatar,
        gap: 16,
        fontSize: 36,
      }}
    >
      Nombor daripada App: {nomborA}
      Lapar ke? {isLapar.toString()}
      <button onClick={handleButton}>Makan</button>
      <input
        style={{ padding: "16px 32px", fontSize: 24 }}
        id="nama"
        name="nama"
        value={nama}
        // Function call by reference
        // onChange={handleInput}
        // Function call by value
        onChange={(event) => handleInput(event)}
      />
      <button onClick={() => handleColor("blue")}>Biru</button>
      <button onClick={() => handleColor("red")}>Merah</button>
      <button onClick={() => handleColor("yellow")}>Kuning</button>
      <div id="warna" style={{ width: 100, height: 100 }}></div>
    </div>
  );
};

export default ComponentA;
