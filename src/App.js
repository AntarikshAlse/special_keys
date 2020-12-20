import React from "react";
import { useState } from "react";
import "./styles.css";

const kyzdictionary = {
  "~": "Tilde",
  "!": "Exclamation",
  "@": "ampersat or at",
  "#": "hash",
  $: "dollar",
  "%": "percent",
  "^": "caret"
};
var kyz = Object.keys(kyzdictionary);

export default function App() {
  var [show, setshow] = useState(" ");
  var [key, setkey] = useState("");
  var [value, setvalue] = useState("");
  var [mean, setmean] = useState(""); //to Display input usestate sepreatly.
  function inputkeys(input) {
    show = input.target.value;
    setshow(show);
    // Statement to check and show the meaning
    // use the conditional and copy the same code in other function
    if (show in kyzdictionary) {
      setmean(kyzdictionary[show]);
    } else {
      setmean(<p style={{ color: "red" }}>"please input correct keys"</p>);
    }
  }

  function keysclickhandler(keys) {
    console.log(keys);
    key = keys;
    // to show meaning from array
    setkey(key);
    setvalue(kyzdictionary[keys]);
  }

  return (
    <div className="App">
      <h1>Special Keys</h1>
      <input
        style={{ padding: "1em", minWidth: "80%" }}
        placeholder="Search for keys"
        onChange={inputkeys}
      />
      <h3>
        {show}:{mean}
      </h3>
      <h3 style={{ fontSize: "2rem", color: "dodgerblue" }}>--------</h3>
      <p>
        {kyz.map((keys) => {
          return (
            <span
              onClick={() => keysclickhandler(keys)}
              style={{
                padding: ".5em",
                cursor: "pointer",
                color: "blueviolet",
                fontSize: "1.5rem"
              }}
            >
              {keys}
            </span>
          );
        })}
      </p>
      <h2>Click the keys to know the meaning.</h2>
      <h3>
        {key}:<span>{value}</span>
      </h3>
    </div>
  );
}
