import React from "react";
import "./App.css";
import axios from "axios"

const App = () => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

  const url = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await axios.get(url)
    console.log(result);
  }
  return (
    <div className="App">
      <h1 onClick={getData}>Food Recipe App</h1>
    </div>
  );
};

export default App;
