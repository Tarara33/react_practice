import { AnimalItems } from "./AnimalItem";


export const AnimalList = ({animals}) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりません</h3>
  }
  return (
    <>
      <ul>
          {animals
            .map((animal) => {
              return (
                <AnimalItems animal={animal} key={animal} />
              );
            })}
        </ul>
      </>
  );
};