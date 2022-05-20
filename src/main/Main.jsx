import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

export default function Main() {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    const response = await axios.get("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    setJoke(response.data.joke);
  }
  return (
    <div className="App-main">
      <div className="content-block">
        <div className="content">
          <h1>{joke}</h1>
        </div>
        <div>
          <Button onClick={getJoke} text={"Find a joke"} />
        </div>
      </div>
    </div>
  );
}
