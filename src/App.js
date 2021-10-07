import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { remove, create } from "./actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(list);
  }, [list]);
  return (
    <div className="App">
      {data.map((e) => (
        <div>{e}</div>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          import("./actions").then((obj) => {
            dispatch(obj.create(text));
          });
          setText("");
        }}
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default App;
