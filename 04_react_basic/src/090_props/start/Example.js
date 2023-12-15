import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `HELLO ${arg}`;
  return (
    <>
      <Child num={123} fn={hello} />
    </>
  );
};

export default Example;
