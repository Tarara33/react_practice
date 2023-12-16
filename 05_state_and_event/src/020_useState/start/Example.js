import React, { useState } from 'react';

const Example = () => {
  let [num, setNum] = useState();
  return (
    <>
      <input type="text" onChange={(e) => {
        setNum(e.target.value)
        }} />= {num}
    </>
  );
};

export default Example;
