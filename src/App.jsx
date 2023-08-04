import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <>
      {/* With props */}
      <ComponentA nomborA="saya" warnaLatar="burlywood" />
      {/* Without props */}
      <ComponentB />
      <ComponentC
        objekSaya={{
          nama: "Atif",
          umur: 29,
        }}
      />
    </>
  );
}

export default App;
