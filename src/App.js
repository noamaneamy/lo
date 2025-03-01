import React from "react";
import Home from "./Components/Home";
import Routage from "./Routage";
import { Routes , Route  } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/:d" element={<Routage />} />
      </Routes> 
    </div>
  );
}

export default App;

