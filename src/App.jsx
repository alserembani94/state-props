import "./App.css";
import HelloReact from "./components/HelloReact";
import { useState } from "react";

function App() {
  const [nama, setNama] = useState("Halim");
  return (
    <>
      <HelloReact
        nama={nama}
        umur={23}
        buahKegemaran={["durian", "rambutan"]}
      />
    </>
  );
}

export default App;
