import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <>
      <p style={{ textAlign: "center" }}>
        startフォルダの内容が表示されます。
        <br />
        練習用に使ってください！
      </p>

      <label htmlFor="check">チェック：</label>
      <input type="checkbox"
             id="check"
             checked={isChecked}
             onChange={() => setIsChecked(prevState => !prevState)}/>

      <h3>{isChecked ? "ON" : "OFF" }</h3>
    </>
  );
};

export default Example;
