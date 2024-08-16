import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  const [countClick, setCountClick] = useState(0);
  const [squaredCount, setSquaredCount] = useState(0);

  function handleClick() {
    setCountClick(countClick + 1);
    console.log("Button clicked", countClick);
  }
  function handleSquaredCount() {
    setSquaredCount(countClick ** 2);
    console.log("Square of countClick", squaredCount);
  }

  function handleReset() {
    setCountClick(0);
    setSquaredCount(0);
  }

  useEffect(() => {
    console.log("test click");
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Number of clicks: {countClick}</h1>
      <button onClick={handleClick}>Click me</button>

      <div>
        <h1>ยกกำลังสอง {squaredCount}</h1>
        <button onClick={handleSquaredCount}>ยกกำลังสอง</button>
      </div>

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Home;
