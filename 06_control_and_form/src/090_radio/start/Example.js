import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState("Apple");

  const onChange = (e) => setFruits(e.target.value);

  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>
{/* 普通に書く場合
      <label><input type="radio"
                    value="Apple"
                    checked={fruits === "Apple"}
                    onChange={onChange} />
        Apple</label>

      <label><input type="radio"
                    value="Banana"
                    checked={fruits === "Banana"}
                    onChange={onChange} />
        Banana</label>

      <label><input type="radio"
                    value="Cherry"
                    checked={fruits === "Cherry"}
                    onChange={onChange} />
        Chery</label> */}

      {/* mapメソッド使う */}
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key={value}>
            <input type="radio"
              value={value}
              checked={fruits === value}
              onChange={onChange} />
              {value}</label>
      )})}

      <h3>私は{fruits}が食べたい！</h3>
    </>
  );
};

export default Example;
