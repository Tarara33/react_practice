export const AnimalItems = ({animal}) => {
  return (
    <>
      <li>
                  {animal}
                  {animal === "Dog" && "★"}
      </li>
    </>
  )
}