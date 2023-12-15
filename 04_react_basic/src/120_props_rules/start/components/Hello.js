const Hello = (props) => {
  const dev = Reflect.getOwnPropertyDescriptor(props, 'name')
  console.log(dev)
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;