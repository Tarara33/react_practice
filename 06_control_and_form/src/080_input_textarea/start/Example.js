import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");

  const clear = () => setVal("");

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>

      
      <input type="text"
             id="abc"
             placeholder="初期値"
             value={val}
             onChange={(e) => setVal(e.target.value)} />

      <label >
        <textarea
                  placeholder="初期値"
                  value={val}
                  onChange={(e) => setVal(e.target.value)} />
      ラベル</label>

      <h3>{val}</h3>
      <button onClick={clear}>クリア</button>
    </>
  );
};

export default Example;
