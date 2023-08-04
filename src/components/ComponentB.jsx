const ComponentB = () => {
  let nombor = 10;

  const handleButton = () => {
    nombor = 20;
    console.log(nombor);
  };

  return (
    <>
      {nombor}
      <button onClick={handleButton}>Tukar nombor</button>
    </>
  );
};

export default ComponentB;
