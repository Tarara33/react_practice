import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterValue} onChange={(e) => {setFilterValue(e.target.value)}}/>
      <ul>
        {animals
          .filter(animal => {
            const isMatch = animal.indexOf(filterValue) !== -1;
            console.log(animal.indexOf(filterValue));
            return isMatch;
          })
          .map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
