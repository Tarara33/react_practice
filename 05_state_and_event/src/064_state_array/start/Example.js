import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [arry, setArry] = useState(numArray);

  const shuffle = () => {
    const newNums = [...arry];
    const lastVal = newNums.pop();
    newNums.unshift(lastVal);
    setArry(newNums);
  };

  return (
    <>
      <h1>{arry}</h1>
      <button onClick={shuffle}>シャッフル</button>
    </>
  );
};

export default Example;
