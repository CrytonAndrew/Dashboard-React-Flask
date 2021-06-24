import React, { useState, useEffect } from "react"

import Navbar from "./Components/Navbar";

import HomeScreen from "./Screens/HomeScreen";

function App() {
  const [currentTime, setCurrentTime] = useState(0)

  // useEffect(() => {
  //   fetch("/time").then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <>
      <Navbar />
      <p>{currentTime}</p>
      <div>
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
